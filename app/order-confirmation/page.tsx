"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch order details from your API
    // For now, we'll simulate order details
    setTimeout(() => {
      setOrderDetails({
        id: orderId,
        orderNumber: `GWG${orderId?.slice(-6).toUpperCase()}`,
        paymentId: `pay_${Math.random().toString(36).substr(2, 9)}`,
        amount: 109.97,
        status: "confirmed",
        estimatedDelivery: new Date(
          Date.now() + 5 * 24 * 60 * 60 * 1000,
        ).toLocaleDateString(),
        items: [
          {
            name: "Premium Tank Top",
            size: "M",
            color: "Black",
            quantity: 2,
            price: 29.99,
          },
          {
            name: "Compression Leggings",
            size: "L",
            color: "Navy",
            quantity: 1,
            price: 49.99,
          },
        ],
        shippingAddress: {
          name: "John Doe",
          address: "123 Fitness Street",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
        },
      });
      setLoading(false);
    }, 1000);
  }, [orderId]);

  if (loading) {
    return (
      <div className="homepage-container">
        <Navigation />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading order details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="homepage-container">
        <Navigation />
        <div className="error-container">
          <h1>Order not found</h1>
          <Link href="/shop">Continue Shopping</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <Navigation />

      <section className="confirmation-hero">
        <div className="container">
          <div className="confirmation-content">
            <div className="success-icon">✅</div>
            <h1 className="confirmation-title">Order Confirmed!</h1>
            <p className="confirmation-subtitle">
              Thank you for your purchase. Your order has been successfully
              placed.
            </p>
          </div>
        </div>
      </section>

      <section className="order-details-section">
        <div className="container">
          <div className="order-details-layout">
            {/* Order Summary */}
            <div className="order-summary-card">
              <h2 className="card-title">Order Summary</h2>

              <div className="order-info">
                <div className="info-row">
                  <span className="info-label">Order Number:</span>
                  <span className="info-value">{orderDetails.orderNumber}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Payment ID:</span>
                  <span className="info-value">{orderDetails.paymentId}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Total Amount:</span>
                  <span className="info-value">₹{orderDetails.amount}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Status:</span>
                  <span className="status-confirmed">Confirmed</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Estimated Delivery:</span>
                  <span className="info-value">
                    {orderDetails.estimatedDelivery}
                  </span>
                </div>
              </div>

              <div className="order-items-confirmed">
                <h3 className="items-title">Items Ordered</h3>
                {orderDetails.items.map((item: any, index: number) => (
                  <div key={index} className="confirmed-item">
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-specs">
                        Size: {item.size} | Color: {item.color} | Qty:{" "}
                        {item.quantity}
                      </p>
                    </div>
                    <div className="item-total">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="next-steps-card">
              <h2 className="card-title">What happens next?</h2>

              <div className="steps-list">
                <div className="step">
                  <div className="step-icon">📦</div>
                  <div className="step-content">
                    <h3>Order Processing</h3>
                    <p>We'll prepare your items within 24 hours</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-icon">🚚</div>
                  <div className="step-content">
                    <h3>Shipping</h3>
                    <p>You'll receive tracking information via email</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-icon">🏠</div>
                  <div className="step-content">
                    <h3>Delivery</h3>
                    <p>Expected delivery: {orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="shipping-address-card">
                <h3>Shipping Address</h3>
                <p>
                  {orderDetails.shippingAddress.name}
                  <br />
                  {orderDetails.shippingAddress.address}
                  <br />
                  {orderDetails.shippingAddress.city},{" "}
                  {orderDetails.shippingAddress.state}{" "}
                  {orderDetails.shippingAddress.pincode}
                </p>
              </div>

              <div className="action-buttons">
                <Link href="/shop" className="btn-primary">
                  Continue Shopping
                </Link>
                <button
                  className="btn-secondary"
                  onClick={() => window.print()}
                >
                  Print Receipt
                </button>
              </div>
            </div>
          </div>

          {/* Email Confirmation Notice */}
          <div className="email-notice">
            <h3>📧 Confirmation Email Sent</h3>
            <p>
              We've sent a detailed order confirmation to your email address. If
              you don't see it in your inbox, please check your spam folder.
            </p>
          </div>

          {/* Support */}
          <div className="support-section">
            <h3>Need Help?</h3>
            <p>
              If you have any questions about your order, please contact our
              support team at{" "}
              <a href="mailto:support@gwgfitness.com">support@gwgfitness.com</a>{" "}
              or <a href="tel:+1234567890">+91 12345 67890</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
