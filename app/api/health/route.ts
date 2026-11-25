import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", app: "nextjs-saas-starter" });
}
