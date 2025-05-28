import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET: Ambil semua field milik user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user_id = searchParams.get("user_id");
  if (!user_id) {
    return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
  }
  try {
    const result = await pool.query(
      `SELECT * FROM fields WHERE user_id = $1 ORDER BY date_created DESC`,
      [user_id]
    );
    return NextResponse.json({ fields: result.rows });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

// POST: Tambah field baru
export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    user_id,
    field_name,
    location,
    crop_type,
    area_size,
    image_url,
  } = body;

  if (!user_id || !field_name || !location || !area_size) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Get the latest field code for this user
    const latestFieldResult = await pool.query(
      `SELECT field_code FROM fields 
       WHERE user_id = $1 
       ORDER BY field_code DESC 
       LIMIT 1`,
      [user_id]
    );

    // Generate new field code
    let newFieldCode;
    if (latestFieldResult.rows.length === 0) {
      // If this is the first field for the user
      newFieldCode = "F001";
    } else {
      try {
        // Log the result for debugging
        console.log('Latest field result:', latestFieldResult.rows[0]);
        
        const latestCode = latestFieldResult.rows[0].field_code;
        if (!latestCode) {
          console.error('No field_code found in result:', latestFieldResult.rows[0]);
          newFieldCode = "F001";
        } else {
          // Extract the number from the latest field code and increment
          const number = parseInt(latestCode.substring(1)) + 1;
          newFieldCode = `F${number.toString().padStart(3, '0')}`;
        }
      } catch (err) {
        console.error('Error generating field code:', err);
        newFieldCode = "F001";
      }
    }

    console.log('Generated field code:', newFieldCode);

    const result = await pool.query(
      `INSERT INTO fields (user_id, field_code, field_name, location, crop_type, area_size, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        user_id,
        newFieldCode,
        field_name,
        location,
        crop_type,
        area_size,
        image_url || null,
      ]
    );
    return NextResponse.json({ field: result.rows[0] }, { status: 201 });
  } catch (err: any) {
    console.error('Database error:', err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
