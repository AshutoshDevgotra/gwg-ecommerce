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
              src="/Hero/hero-image.png"
              alt="Fitness enthusiast in premium gym wear"
              width={600}
              height={700}
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Categories Section - Disc Form */}
      {/* <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-disc-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

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
        </div>
      </section> */}
      <section className="categories-section py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/ShopByCategory/Travel Accessories.jpg" alt="Travel Accessories" className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm font-medium">Travel Accessories</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/ShopByCategory/Health Snacking.jpg" alt="Health Snacking" className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm font-medium">Health Snacking</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/ShopByCategory/Gym Accessories.jpg" alt="Gym Accessories" className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm font-medium">Gym Accessories</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/ShopByCategory/Health Supplements.jpg" alt="Health Supplements" className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm font-medium">Health Supplements</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/ShopByCategory/Gym Wear.jpg" alt="Gym Wear" className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm font-medium">Gym Wear</p>
            </div>

            {/* More category items here... */}
          </div>
        </div>
      </section>

      {/* Best seller */}

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Shop Our Best Seller</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* <!-- Card 1 --> */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <img src="/BestSeller/gym-shirt.jpg" alt="Gym wear shirt" className="w-[384px] h-[386px] object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Gym wear shirts</h3>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                  ⭐⭐⭐⭐☆ <span className="text-gray-600 ml-2">(66 Reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Our gym wear t-shirts are lightweight, breathable, and designed for peak performance.
                </p>
                <div className="mt-3 font-semibold text-black">₹ 499</div>
                <button className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">Add to Cart</button>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <img src="/BestSeller/bag.jpg" alt="Bag" className="w-[384px] h-[386px] object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Bag</h3>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                  ⭐⭐⭐⭐⭐ <span className="text-gray-600 ml-2">(200 Reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Travel in style with our spacious and durable car bags, designed to keep your essentials organized and secure.
                </p>
                <div className="mt-3 font-semibold text-black">₹ 1999</div>
                <button className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">Add to Cart</button>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <img src="/BestSeller/yoga-mat.jpg" alt="Yoga Mat" className="w-[386px] h-[384px] object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Yoga Mat</h3>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                  ⭐⭐⭐⭐☆ <span className="text-gray-600 ml-2">(240 Reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Our yoga mats provide a non-slip surface for ultimate stability, making every pose comfortable and secure.
                </p>
                <div className="mt-3 font-semibold text-black">₹ 1599</div>
                <button className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">Add to Cart</button>
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
