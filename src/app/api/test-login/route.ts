import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const envUsername = process.env.ADMIN_USERNAME;
    const envPassword = process.env.ADMIN_PASSWORD;

    return NextResponse.json({
      inputUsername: username,
      inputPassword: password ? "***provided***" : "***empty***",
      envUsernameSet: !!envUsername,
      envPasswordSet: !!envPassword,
      usernameMatch: username === envUsername,
      passwordMatch: password === envPassword,
      authWouldSucceed: username === envUsername && password === envPassword,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
