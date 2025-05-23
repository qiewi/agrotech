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
    field_code,
    field_name,
    location,
    crop_type,
    area_size,
    image_url,
  } = body;

  if (!user_id || !field_name || !location || !area_size || !field_code) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const result = await pool.query(
      `INSERT INTO fields (user_id, field_code, field_name, location, crop_type, area_size, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        user_id,
        field_code,
        field_name,
        location,
        crop_type,
        area_size,
        image_url || null,
      ]
    );
    return NextResponse.json({ field: result.rows[0] }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
