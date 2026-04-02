import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../lib/db";

// Protege a rota com um token secreto
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "cortgenetica-secret-2025";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.substring(7);
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const [totalRow] = await query<{ count: number }>(
      "SELECT COUNT(*) as count FROM pageviews",
    );
    const [uniqueRow] = await query<{ count: number }>(
      "SELECT COUNT(DISTINCT ip_hash) as count FROM pageviews",
    );
    const topPages = await query<{ path: string; views: number }>(
      "SELECT path, COUNT(*) as views FROM pageviews GROUP BY path ORDER BY views DESC LIMIT 10",
    );

    const analyticsData = {
      totalPageviews: totalRow?.count || 0,
      uniqueVisitors: uniqueRow?.count || 0,
      topPages,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(analyticsData);
  } catch (error: any) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch analytics data",
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
