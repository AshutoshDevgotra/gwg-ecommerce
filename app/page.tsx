import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Navigation />

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
            <Link href="/shop" className="btn-primary large">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
