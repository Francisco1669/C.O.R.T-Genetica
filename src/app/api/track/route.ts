import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { query } from "../../../lib/db";

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const path = typeof body?.path === "string" ? body.path : "/";
    const ip = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || "";

    const ipHash = crypto.createHash("sha256").update(ip).digest("hex");

    await query(
      "CREATE TABLE IF NOT EXISTS pageviews (id BIGINT AUTO_INCREMENT PRIMARY KEY, path VARCHAR(2048) NOT NULL, ip_hash CHAR(64) NOT NULL, user_agent VARCHAR(512) NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, INDEX idx_path (path), INDEX idx_created_at (created_at), INDEX idx_ip_hash (ip_hash))",
    );

    await query(
      "INSERT INTO pageviews (path, ip_hash, user_agent) VALUES (?, ?, ?)",
      [path, ipHash, userAgent],
    );

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Track error:", error);
    return NextResponse.json(
      {
        error: "Failed to track",
        details: {
          message: error?.message,
          code: error?.code,
          sqlState: error?.sqlState,
        },
      },
      { status: 500 },
    );
  }
}
