import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "../../../lib/supabase";
import { sendOrderConfirmationEmail } from "../../../lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
    } = body;

    // Verify payment signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 },
      );
    }

    // Update order status
    const { data: order, error } = await supabase
      .from("orders")
      .update({
        razorpay_payment_id,
        status: "paid",
        updated_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", razorpay_order_id)
      .eq("user_id", userId)
      .select(
        `
        *,
        users:user_id (email, full_name)
      `,
      )
      .single();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to update order" },
        { status: 500 },
      );
    }

    // Clear user's cart
    await supabase.from("cart_items").delete().eq("user_id", userId);

    // Send confirmation email
    try {
      await sendOrderConfirmationEmail(order);
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        orderId: order.razorpay_order_id,
        paymentId: order.razorpay_payment_id,
        amount: order.amount,
        status: order.status,
        items: order.items,
        created_at: order.created_at,
      },
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 },
    );
  }
}
