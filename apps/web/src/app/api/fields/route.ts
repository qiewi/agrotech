import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  if (!userId) {
    return NextResponse.json({ error: "user_id required" }, { status: 400 });
  }
  const result = await pool.query(
    "SELECT * FROM fields WHERE user_id = $1",
    [userId]
  );
  return NextResponse.json({ fields: result.rows });
}
