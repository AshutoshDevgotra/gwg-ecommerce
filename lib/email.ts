import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderEmailData {
  id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  amount: number;
  currency: string;
  status: string;
  items: any[];
  shipping_address: any;
  created_at: string;
  users: {
    email: string;
    full_name: string;
  };
}

export async function sendOrderConfirmationEmail(order: OrderEmailData) {
  const { users: user } = order;

  // Calculate order summary
  const itemsTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = itemsTotal > 100 ? 0 : 9.99;
  const tax = itemsTotal * 0.18; // 18% GST

  try {
    const { data, error } = await resend.emails.send({
      from: `GWG Fitness <${process.env.EMAIL_FROM}>`,
      to: [user.email],
      subject: `Order Confirmation #${order.id.slice(-8).toUpperCase()} - GWG Fitness`,
      html: generateOrderConfirmationHTML(order, { itemsTotal, shipping, tax }),
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Order confirmation email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
    throw error;
  }
}

export async function sendWelcomeEmail(userEmail: string, userName: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `GWG Fitness <${process.env.EMAIL_FROM}>`,
      to: [userEmail],
      subject: "Welcome to GWG Fitness - Your Fitness Journey Starts Here!",
      html: generateWelcomeHTML(userName),
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Welcome email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}

export async function sendNewsletterConfirmation(userEmail: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `GWG Fitness <${process.env.EMAIL_FROM}>`,
      to: [userEmail],
      subject: "You're In! Welcome to GWG Fitness Newsletter 📧",
      html: generateNewsletterConfirmationHTML(userEmail),
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Newsletter confirmation sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send newsletter confirmation:", error);
    throw error;
  }
}

export async function sendOrderShippedEmail(
  order: any,
  trackingNumber: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `GWG Fitness <${process.env.EMAIL_FROM}>`,
      to: [order.users.email],
      subject: `Your Order is on the Way! Track #${trackingNumber}`,
      html: generateShippingConfirmationHTML(order, trackingNumber),
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Shipping confirmation sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send shipping confirmation:", error);
    throw error;
  }
}

function generateOrderConfirmationHTML(order: OrderEmailData, totals: any) {
  const { users: user } = order;
  const orderNumber = `GWG${order.id.slice(-8).toUpperCase()}`;
  const orderDate = new Date(order.created_at).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const estimatedDelivery = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const itemsHTML = order.items
    .map(
      (item) => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px 8px; vertical-align: top;">
        <div style="font-weight: 600; color: #111827; margin-bottom: 4px;">${item.name}</div>
        <div style="font-size: 14px; color: #6b7280;">
          Size: ${item.size} • Color: ${item.color} • Qty: ${item.quantity}
        </div>
      </td>
      <td style="padding: 16px 8px; text-align: right; font-weight: 600; color: #111827;">
        ₹${(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  `,
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - GWG Fitness</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #E8C288 0%, #d4a865 100%); padding: 40px 32px; text-align: center;">
          <div style="background-color: #000; color: #E8C288; padding: 12px 24px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: 800; margin-bottom: 16px;">
            GWG FITNESS
          </div>
          <h1 style="margin: 0; color: #000; font-size: 32px; font-weight: 800;">Order Confirmed! 🎉</h1>
          <p style="margin: 8px 0 0 0; color: #000; font-size: 18px;">Thank you for choosing GWG Fitness</p>
        </div>

        <!-- Order Info -->
        <div style="padding: 32px;">
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000; font-size: 20px; font-weight: 600;">Hi ${user.full_name || "Valued Customer"},</h2>
            <p style="margin: 0; color: #000; line-height: 1.6;">
              Your order has been confirmed and we're preparing your premium fitness gear.
              You'll receive shipping updates as your order makes its way to you.
            </p>
          </div>

          <!-- Order Details -->
          <div style="margin-bottom: 32px;">
            <h3 style="margin: 0 0 20px 0; color: #000; font-size: 18px; font-weight: 600; border-bottom: 2px solid #E8C288; padding-bottom: 8px;">
              Order Details
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Order Number:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">${orderNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Payment ID:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">${order.razorpay_payment_id}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Order Date:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">${orderDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Estimated Delivery:</td>
                <td style="padding: 8px 0; color: #E8C288; font-weight: 600; text-align: right;">${estimatedDelivery}</td>
              </tr>
            </table>
          </div>

          <!-- Items Ordered -->
          <div style="margin-bottom: 32px;">
            <h3 style="margin: 0 0 20px 0; color: #000; font-size: 18px; font-weight: 600; border-bottom: 2px solid #E8C288; padding-bottom: 8px;">
              Items Ordered
            </h3>
            <table style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; overflow: hidden;">
              ${itemsHTML}

              <!-- Totals -->
              <tr style="border-top: 2px solid #E8C288;">
                <td style="padding: 16px 8px; color: #000; font-weight: 500;">Subtotal</td>
                <td style="padding: 16px 8px; text-align: right; color: #000; font-weight: 600;">₹${totals.itemsTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #000; font-weight: 500;">Shipping</td>
                <td style="padding: 8px; text-align: right; color: #000; font-weight: 600;">
                  ${totals.shipping === 0 ? "FREE" : `₹${totals.shipping.toFixed(2)}`}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #000; font-weight: 500;">GST (18%)</td>
                <td style="padding: 8px; text-align: right; color: #000; font-weight: 600;">₹${totals.tax.toFixed(2)}</td>
              </tr>
              <tr style="background-color: #E8C288;">
                <td style="padding: 16px 8px; color: #000; font-weight: 700; font-size: 18px;">Total</td>
                <td style="padding: 16px 8px; text-align: right; color: #000; font-weight: 700; font-size: 18px;">₹${order.amount}</td>
              </tr>
            </table>
          </div>

          <!-- Shipping Address -->
          <div style="margin-bottom: 32px;">
            <h3 style="margin: 0 0 16px 0; color: #000; font-size: 18px; font-weight: 600; border-bottom: 2px solid #E8C288; padding-bottom: 8px;">
              Shipping Address
            </h3>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #000; line-height: 1.6;">
              <strong>${order.shipping_address.name}</strong><br>
              ${order.shipping_address.address}<br>
              ${order.shipping_address.city}, ${order.shipping_address.state} ${order.shipping_address.pincode}<br>
              Phone: ${order.shipping_address.phone}
            </div>
          </div>

          <!-- What's Next -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 24px; border-radius: 12px; color: #ffffff; margin-bottom: 32px;">
            <h3 style="margin: 0 0 16px 0; color: #E8C288; font-size: 18px; font-weight: 600;">What happens next?</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">📦</span>
                <span>We'll process and pack your order within 24 hours</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">🚚</span>
                <span>You'll receive tracking information via email once shipped</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">🏠</span>
                <span>Expected delivery: ${estimatedDelivery}</span>
              </div>
            </div>
          </div>

          <!-- Support -->
          <div style="text-align: center; padding: 24px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="margin: 0 0 12px 0; color: #000; font-size: 16px; font-weight: 600;">Need Help?</h3>
            <p style="margin: 0 0 16px 0; color: #000;">
              Our support team is here to help with any questions about your order.
            </p>
            <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;">
              <a href="mailto:support@gwgfitness.com" style="color: #E8C288; text-decoration: none; font-weight: 600;">
                📧 support@gwgfitness.com
              </a>
              <a href="tel:+911234567890" style="color: #E8C288; text-decoration: none; font-weight: 600;">
                📞 +91 12345 67890
              </a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 32px; text-align: center; color: #9ca3af;">
          <div style="margin-bottom: 16px;">
            <div style="color: #E8C288; font-size: 20px; font-weight: 700; margin-bottom: 8px;">GWG FITNESS</div>
            <p style="margin: 0; font-size: 14px;">Premium Gym Wear & Fitness Equipment</p>
          </div>
          <div style="margin-bottom: 16px; font-size: 14px;">
            <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 12px;">Privacy Policy</a>
            <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 12px;">Terms of Service</a>
            <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 12px;">Unsubscribe</a>
          </div>
          <p style="margin: 0; font-size: 12px;">© 2024 GWG Fitness. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateWelcomeHTML(userName: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to GWG Fitness</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #E8C288 0%, #d4a865 100%); padding: 40px 32px; text-align: center;">
          <div style="background-color: #000; color: #E8C288; padding: 12px 24px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: 800; margin-bottom: 16px;">
            GWG FITNESS
          </div>
          <h1 style="margin: 0; color: #000; font-size: 32px; font-weight: 800;">Welcome to the Family! 💪</h1>
          <p style="margin: 8px 0 0 0; color: #000; font-size: 18px;">Your fitness journey starts here</p>
        </div>

        <!-- Content -->
        <div style="padding: 32px;">
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000; font-size: 20px; font-weight: 600;">Hi ${userName},</h2>
            <p style="margin: 0 0 16px 0; color: #000; line-height: 1.6;">
              Welcome to GWG Fitness! We're thrilled to have you join our community of fitness enthusiasts
              who are passionate about achieving their goals with premium gear.
            </p>
            <p style="margin: 0; color: #000; line-height: 1.6;">
              Get ready to discover high-quality gym wear, cutting-edge equipment, and everything you need
              to unleash your potential.
            </p>
          </div>

          <!-- What You Get -->
          <div style="margin-bottom: 32px;">
            <h3 style="margin: 0 0 20px 0; color: #000; font-size: 18px; font-weight: 600; border-bottom: 2px solid #E8C288; padding-bottom: 8px;">
              What You Get as a GWG Member
            </h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
                <span style="font-size: 24px;">🎯</span>
                <div>
                  <div style="font-weight: 600; color: #000; margin-bottom: 4px;">Exclusive Offers</div>
                  <div style="color: #000; font-size: 14px;">Be the first to know about sales and new arrivals</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
                <span style="font-size: 24px;">🚚</span>
                <div>
                  <div style="font-weight: 600; color: #000; margin-bottom: 4px;">Free Shipping</div>
                  <div style="color: #000; font-size: 14px;">On orders over ₹100 - always!</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
                <span style="font-size: 24px;">💡</span>
                <div>
                  <div style="font-weight: 600; color: #000; margin-bottom: 4px;">Fitness Tips</div>
                  <div style="color: #000; font-size: 14px;">Expert advice and workout guides delivered to your inbox</div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div style="text-align: center; margin-bottom: 32px;">
            <a href="${process.env.NEXTAUTH_URL || "http://localhost:3000"}/shop"
               style="display: inline-block; background-color: #000; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Start Shopping Now
            </a>
          </div>

          <!-- Support -->
          <div style="text-align: center; padding: 24px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="margin: 0 0 12px 0; color: #000; font-size: 16px; font-weight: 600;">Questions?</h3>
            <p style="margin: 0 0 16px 0; color: #000;">
              Our team is here to help you get the most out of your GWG experience.
            </p>
            <a href="mailto:support@gwgfitness.com" style="color: #E8C288; text-decoration: none; font-weight: 600;">
              📧 support@gwgfitness.com
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 32px; text-align: center; color: #9ca3af;">
          <div style="margin-bottom: 16px;">
            <div style="color: #E8C288; font-size: 20px; font-weight: 700; margin-bottom: 8px;">GWG FITNESS</div>
            <p style="margin: 0; font-size: 14px;">Premium Gym Wear & Fitness Equipment</p>
          </div>
          <p style="margin: 0; font-size: 12px;">© 2024 GWG Fitness. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateNewsletterConfirmationHTML(userEmail: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Newsletter Subscription Confirmed</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #E8C288 0%, #d4a865 100%); padding: 40px 32px; text-align: center;">
          <div style="background-color: #000; color: #E8C288; padding: 12px 24px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: 800; margin-bottom: 16px;">
            GWG FITNESS
          </div>
          <h1 style="margin: 0; color: #000; font-size: 32px; font-weight: 800;">You're All Set! 📧</h1>
          <p style="margin: 8px 0 0 0; color: #000; font-size: 18px;">Thanks for subscribing to our newsletter</p>
        </div>

        <!-- Content -->
        <div style="padding: 32px;">
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000; font-size: 20px; font-weight: 600;">Welcome to the GWG Community!</h2>
            <p style="margin: 0 0 16px 0; color: #000; line-height: 1.6;">
              We've confirmed your subscription to the GWG Fitness newsletter. You'll now receive:
            </p>
            <ul style="color: #000; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Exclusive offers and early access to sales</li>
              <li>New product launches and restocks</li>
              <li>Fitness tips and workout guides</li>
              <li>Success stories from our community</li>
            </ul>
          </div>

          <!-- First Purchase Offer -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 24px; border-radius: 12px; color: #ffffff; margin-bottom: 32px; text-align: center;">
            <h3 style="margin: 0 0 16px 0; color: #E8C288; font-size: 20px; font-weight: 600;">Special Welcome Offer! 🎁</h3>
            <p style="margin: 0 0 20px 0; font-size: 16px;">Get 15% off your first order with code:</p>
            <div style="background-color: #E8C288; color: #000; padding: 12px 24px; border-radius: 8px; font-size: 20px; font-weight: 800; letter-spacing: 2px; margin-bottom: 20px;">
              WELCOME15
            </div>
            <a href="${process.env.NEXTAUTH_URL || "http://localhost:3000"}/shop"
               style="display: inline-block; background-color: #E8C288; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Shop Now & Save
            </a>
          </div>

          <!-- Manage Subscription -->
          <div style="text-align: center; padding: 24px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="margin: 0 0 12px 0; color: #000; font-size: 16px; font-weight: 600;">Manage Your Subscription</h3>
            <p style="margin: 0 0 16px 0; color: #000; font-size: 14px;">
              You can update your preferences or unsubscribe at any time.
            </p>
            <a href="#" style="color: #E8C288; text-decoration: none; font-weight: 600; font-size: 14px;">
              Update Preferences
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 32px; text-align: center; color: #9ca3af;">
          <div style="margin-bottom: 16px;">
            <div style="color: #E8C288; font-size: 20px; font-weight: 700; margin-bottom: 8px;">GWG FITNESS</div>
            <p style="margin: 0; font-size: 14px;">Premium Gym Wear & Fitness Equipment</p>
          </div>
          <p style="margin: 0; font-size: 12px;">© 2024 GWG Fitness. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateShippingConfirmationHTML(order: any, trackingNumber: string) {
  const { users: user } = order;
  const orderNumber = `GWG${order.id.slice(-8).toUpperCase()}`;
  const estimatedDelivery = new Date(
    Date.now() + 3 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Order is on the Way!</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 40px 32px; text-align: center;">
          <div style="background-color: #000; color: #E8C288; padding: 12px 24px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: 800; margin-bottom: 16px;">
            GWG FITNESS
          </div>
          <h1 style="margin: 0; color: #fff; font-size: 32px; font-weight: 800;">Your Order is on the Way! 📦</h1>
          <p style="margin: 8px 0 0 0; color: #fff; font-size: 18px;">Track your shipment below</p>
        </div>

        <!-- Content -->
        <div style="padding: 32px;">
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000; font-size: 20px; font-weight: 600;">Hi ${user.full_name || "Valued Customer"},</h2>
            <p style="margin: 0; color: #000; line-height: 1.6;">
              Great news! Your order has been packed and shipped. Your premium fitness gear is now on its way to you.
            </p>
          </div>

          <!-- Tracking Info -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 24px; border-radius: 12px; color: #ffffff; margin-bottom: 32px; text-align: center;">
            <h3 style="margin: 0 0 16px 0; color: #E8C288; font-size: 18px; font-weight: 600;">Tracking Information</h3>
            <div style="background-color: rgba(232, 194, 136, 0.1); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <div style="color: #E8C288; font-size: 14px; margin-bottom: 4px;">Tracking Number</div>
              <div style="font-size: 20px; font-weight: 800; letter-spacing: 1px;">${trackingNumber}</div>
            </div>
            <div style="margin-bottom: 20px;">
              <div style="color: #E8C288; font-size: 14px; margin-bottom: 4px;">Estimated Delivery</div>
              <div style="font-size: 18px; font-weight: 600;">${estimatedDelivery}</div>
            </div>
            <a href="https://www.delhivery.com/track/package/${trackingNumber}"
               style="display: inline-block; background-color: #E8C288; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Track Your Package
            </a>
          </div>

          <!-- Order Summary -->
          <div style="margin-bottom: 32px;">
            <h3 style="margin: 0 0 16px 0; color: #000; font-size: 18px; font-weight: 600; border-bottom: 2px solid #E8C288; padding-bottom: 8px;">
              Order Summary
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Order Number:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">${orderNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Items:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">${order.items.length} item(s)</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000; font-weight: 500;">Total:</td>
                <td style="padding: 8px 0; color: #000; font-weight: 600; text-align: right;">₹${order.amount}</td>
              </tr>
            </table>
          </div>

          <!-- Delivery Instructions -->
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin-bottom: 32px;">
            <h3 style="margin: 0 0 12px 0; color: #856404; font-size: 16px; font-weight: 600;">📋 Delivery Instructions</h3>
            <ul style="color: #856404; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>Please ensure someone is available to receive the package</li>
              <li>A valid ID may be required for verification</li>
              <li>If you're not available, the package will be rescheduled for delivery</li>
            </ul>
          </div>

          <!-- Support -->
          <div style="text-align: center; padding: 24px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="margin: 0 0 12px 0; color: #000; font-size: 16px; font-weight: 600;">Need Help?</h3>
            <p style="margin: 0 0 16px 0; color: #000;">
              Questions about your shipment? We're here to help!
            </p>
            <a href="mailto:support@gwgfitness.com" style="color: #E8C288; text-decoration: none; font-weight: 600;">
              📧 support@gwgfitness.com
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 32px; text-align: center; color: #9ca3af;">
          <div style="margin-bottom: 16px;">
            <div style="color: #E8C288; font-size: 20px; font-weight: 700; margin-bottom: 8px;">GWG FITNESS</div>
            <p style="margin: 0; font-size: 14px;">Premium Gym Wear & Fitness Equipment</p>
          </div>
          <p style="margin: 0; font-size: 12px;">© 2024 GWG Fitness. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
