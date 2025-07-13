"use client";
import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thanks for subscribing! Check your email for confirmation.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">
            Get the latest updates on new products, exclusive offers, and
            fitness tips. Plus, get 15% off your first order!
          </p>

          {status === "success" ? (
            <div className="newsletter-success">
              <div className="success-icon">✅</div>
              <h3>You're All Set!</h3>
              <p>{message}</p>
              <p className="success-bonus">
                Use code <strong>WELCOME15</strong> for 15% off your first
                order!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input"
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <div className="newsletter-error">
              <p>{message}</p>
            </div>
          )}

          <div className="newsletter-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Exclusive Offers</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🆕</span>
              <span>New Arrivals</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💡</span>
              <span>Fitness Tips</span>
            </div>
          </div>

          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
