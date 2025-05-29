import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET: Ambil detail field by field_id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "Missing field id" }, { status: 400 });
    }

    const result = await pool.query(
      `SELECT * FROM fields WHERE field_id = $1 LIMIT 1`,
      [id]
    );
    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Field not found" }, { status: 404 });
    }
    return NextResponse.json({ field: result.rows[0] });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
