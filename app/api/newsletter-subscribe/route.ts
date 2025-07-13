import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterConfirmation } from "../../../lib/email";
import { supabase } from "../../../lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Save to newsletter subscribers table (you can create this table in Supabase)
    try {
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email: email.toLowerCase(),
          subscribed_at: new Date().toISOString(),
          status: "active",
        });

      if (dbError && !dbError.message.includes("duplicate key value")) {
        console.error("Database error:", dbError);
        // Continue anyway, don't fail just because of DB issues
      }
    } catch (dbError) {
      console.error("Database subscription error:", dbError);
      // Continue anyway
    }

    // Send confirmation email
    await sendNewsletterConfirmation(email);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      {
        error: "Failed to subscribe to newsletter",
      },
      { status: 500 },
    );
  }
}
