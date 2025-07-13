import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { supabase } from "../../../lib/supabase";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = "INR", userId, items, shippingAddress } = body;

    // Create Razorpay order
    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: `order_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Save order to database
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        razorpay_order_id: razorpayOrder.id,
        amount,
        currency,
        status: "created",
        shipping_address: shippingAddress,
        items,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to save order" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      dbOrderId: order.id,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 },
    );
  }
}
