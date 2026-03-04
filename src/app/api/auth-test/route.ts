import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasAuthSecret: !!process.env.AUTH_SECRET,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    hasAuthUrl: !!process.env.AUTH_URL,
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    hasAdminUsername: !!process.env.ADMIN_USERNAME,
    hasAdminPassword: !!process.env.ADMIN_PASSWORD,
    hasDatabaseUrl: !!(process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL),
  });
}
