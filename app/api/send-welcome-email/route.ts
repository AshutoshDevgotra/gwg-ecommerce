import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "../../../lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 },
      );
    }

    await sendWelcomeEmail(email, name);

    return NextResponse.json({
      success: true,
      message: "Welcome email sent successfully",
    });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 },
    );
  }
}
