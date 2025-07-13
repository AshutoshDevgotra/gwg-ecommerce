"use client";
import * as React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="homepage-container">
      <Navigation />

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Have a question or need support? We're here to help you on your
              fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3 className="method-title">Address</h3>
                    <p className="method-text">
                      123 Fitness Street
                      <br />
                      Wellness District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3 className="method-title">Phone</h3>
                    <p className="method-text">
                      Customer Service: +1 (555) 123-4567
                      <br />
                      Business Inquiries: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3 className="method-title">Email</h3>
                    <p className="method-text">
                      Support: support@gwgfitness.com
                      <br />
                      Business: business@gwgfitness.com
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🕒</div>
                  <div className="method-content">
                    <h3 className="method-title">Business Hours</h3>
                    <p className="method-text">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 6:00 PM
                      <br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="support-note">
                <h3 className="note-title">Need Immediate Help?</h3>
                <p className="note-text">
                  For urgent order-related questions, please include your order
                  number in your message. We typically respond within 24 hours
                  during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is your return policy?</h3>
              <p className="faq-answer">
                We offer a 30-day return policy for all unworn items with
                original tags. Return shipping is free for exchanges within the
                US.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How long does shipping take?</h3>
              <p className="faq-answer">
                Standard shipping takes 3-5 business days. Express shipping (1-2
                days) is available for an additional fee.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Do you offer international shipping?
              </h3>
              <p className="faq-answer">
                Yes! We ship to over 50 countries worldwide. International
                shipping times vary by location (7-14 business days).
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do I track my order?</h3>
              <p className="faq-answer">
                Once your order ships, you'll receive a tracking number via
                email. You can also track orders in your account dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
