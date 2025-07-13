"use client";
import * as React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="offers-container">
          <div className="offer-text">
            Get 20% off gym wear products - Free shipping over $100
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="navigation-bar">
        <div className="nav-left">
          <div className="nav-item home-active">
            <div className="nav-text">HOME</div>
          </div>
          <div className="nav-item">
            <div className="nav-text">SHOP</div>
          </div>
          <div className="nav-item">
            <div className="nav-text">ABOUT</div>
          </div>
          <div className="nav-item">
            <div className="nav-text">CONTACT</div>
          </div>
        </div>

        <Image
          src="/logo.svg"
          alt="GWG Logo"
          width={80}
          height={80}
          className="logo"
        />

        <div className="nav-right">
          <div className="search-container">
            <div className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="search-text">Search</div>
          </div>

          <div className="icon-container">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 17H20L18.595 15.595C18.407 15.407 18.407 15.093 18.595 14.905L19.5 14C19.5 11.515 17.485 9.5 15 9.5S10.5 11.515 10.5 14L11.405 14.905C11.593 15.093 11.593 15.407 11.405 15.595L10 17H15ZM15 17V18C15 19.657 13.657 21 12 21S9 19.657 9 18V17"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="icon-container">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21V19C20 16.791 18.209 15 16 15H8C5.791 15 4 16.791 4 19V21M16 7C16 9.209 14.209 11 12 11S8 9.209 8 7 9.791 3 12 3 16 4.791 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="icon-container cart-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19S21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="cart-badge">0</span>
          </div>
        </div>
      </div>

      {/* Moving Text */}
      <div className="moving-text-container">
        <div className="moving-text-background" />
        <div className="moving-text-content">
          <div className="scrolling-text">
            <div className="text-item">🚀 Fast delivery with Delhivery</div>
            <div className="dot-separator">•</div>
            <div className="text-item">📦 Premium packaging quality</div>
            <div className="dot-separator">•</div>
            <div className="text-item">💳 Secure payments with Razorpay</div>
            <div className="dot-separator">•</div>
            <div className="text-item">
              💰 Affordable prices, unmatched value
            </div>
            <div className="dot-separator">•</div>
            <div className="text-item">
              📱 Track your orders anytime, anywhere
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Unleash Your <span className="highlight">Potential</span>
            </h1>
            <p className="hero-subtitle">
              Premium gym wear and fitness equipment designed for champions.
              Elevate your workout experience with our cutting-edge collection.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">View Collection</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/hero-image.svg"
              alt="Fitness enthusiast in premium gym wear"
              width={600}
              height={700}
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Categories Section - Disc Form */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-disc-grid">
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">👕</div>
                <h3 className="disc-title">Men's Wear</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">👚</div>
                <h3 className="disc-title">Women's Wear</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">🎽</div>
                <h3 className="disc-title">Tank Tops</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">🩳</div>
                <h3 className="disc-title">Shorts</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">👕</div>
                <h3 className="disc-title">Leggings</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">🥤</div>
                <h3 className="disc-title">Accessories</h3>
              </div>
            </div>
            <div className="category-disc">
              <div className="disc-inner">
                <div className="disc-icon">🏋️</div>
                <h3 className="disc-title">Equipment</h3>
              </div>
            </div>
            <div className="category-disc sale-disc">
              <div className="disc-inner">
                <div className="disc-icon">🔥</div>
                <h3 className="disc-title">Sale</h3>
                <span className="sale-badge">50% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose GWG?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Superior materials and craftsmanship in every product we
                deliver.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Performance Focused</h3>
              <p className="feature-description">
                Designed to enhance your performance and comfort during
                workouts.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3 className="feature-title">Trendy Designs</h3>
              <p className="feature-description">
                Latest fashion trends combined with functional fitness wear.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💝</div>
              <h3 className="feature-title">Best Value</h3>
              <p className="feature-description">
                Premium quality at affordable prices with amazing offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <Image
                  src="/product-1.svg"
                  alt="Premium Tank Top"
                  width={280}
                  height={350}
                />
                <div className="product-badge bestseller">Best Seller</div>
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                  <button className="wishlist">♡</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(124)</span>
                </div>
                <h3 className="product-name">Premium Tank Top</h3>
                <p className="product-description">
                  Breathable moisture-wicking fabric
                </p>
                <div className="product-pricing">
                  <span className="current-price">$29.99</span>
                  <span className="original-price">$39.99</span>
                  <span className="discount">25% OFF</span>
                </div>
                <div className="product-colors">
                  <span className="color-option black"></span>
                  <span className="color-option white"></span>
                  <span className="color-option gray"></span>
                </div>
                <button className="add-to-cart improved">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <Image
                  src="/product-2.svg"
                  alt="Compression Leggings"
                  width={280}
                  height={350}
                />
                <div className="product-badge new">New</div>
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                  <button className="wishlist">♡</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(89)</span>
                </div>
                <h3 className="product-name">Compression Leggings</h3>
                <p className="product-description">
                  High-waist compression fit
                </p>
                <div className="product-pricing">
                  <span className="current-price">$49.99</span>
                  <span className="original-price">$69.99</span>
                  <span className="discount">28% OFF</span>
                </div>
                <div className="product-colors">
                  <span className="color-option black"></span>
                  <span className="color-option navy"></span>
                  <span className="color-option charcoal"></span>
                </div>
                <button className="add-to-cart improved">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <Image
                  src="/product-3.svg"
                  alt="Sports Bra"
                  width={280}
                  height={350}
                />
                <div className="product-badge limited">Limited</div>
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                  <button className="wishlist">♡</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating-count">(156)</span>
                </div>
                <h3 className="product-name">Sports Bra Pro</h3>
                <p className="product-description">Maximum support & comfort</p>
                <div className="product-pricing">
                  <span className="current-price">$34.99</span>
                  <span className="original-price">$44.99</span>
                  <span className="discount">22% OFF</span>
                </div>
                <div className="product-colors">
                  <span className="color-option pink"></span>
                  <span className="color-option black"></span>
                  <span className="color-option white"></span>
                </div>
                <button className="add-to-cart improved">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <Image
                  src="/product-4.svg"
                  alt="Training Shorts"
                  width={280}
                  height={350}
                />
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                  <button className="wishlist">♡</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(203)</span>
                </div>
                <h3 className="product-name">Training Shorts</h3>
                <p className="product-description">
                  Lightweight quick-dry material
                </p>
                <div className="product-pricing">
                  <span className="current-price">$24.99</span>
                  <span className="original-price">$34.99</span>
                  <span className="discount">29% OFF</span>
                </div>
                <div className="product-colors">
                  <span className="color-option black"></span>
                  <span className="color-option gray"></span>
                  <span className="color-option navy"></span>
                </div>
                <button className="add-to-cart improved">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="products-cta">
            <button className="btn-primary large">View All Products</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">
              Get the latest updates on new products, exclusive offers, and
              fitness tips.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Image src="/logo.svg" alt="GWG Logo" width={60} height={60} />
                <h3>GWG FITNESS</h3>
              </div>
              <p className="footer-description">
                Your ultimate destination for premium gym wear and fitness
                equipment. Unleash your potential with GWG.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  📸
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  💼
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Size Guide</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Categories</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Men's Wear</a>
                </li>
                <li>
                  <a href="#">Women's Wear</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Equipment</a>
                </li>
                <li>
                  <a href="#">Sale Items</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Customer Service</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Shipping Info</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Size Exchange</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 GWG Fitness. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
