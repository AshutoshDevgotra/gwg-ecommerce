"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedSort, setSelectedSort] = React.useState("featured");
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  const products = [
    {
      id: 1,
      name: "Premium Tank Top",
      price: 29.99,
      originalPrice: 39.99,
      category: "tops",
      image: "/product-1.svg",
      rating: 5,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Compression Leggings",
      price: 49.99,
      originalPrice: 69.99,
      category: "bottoms",
      image: "/product-2.svg",
      rating: 5,
      reviews: 89,
      badge: "New",
    },
    {
      id: 3,
      name: "Sports Bra Pro",
      price: 34.99,
      originalPrice: 44.99,
      category: "tops",
      image: "/product-3.svg",
      rating: 4,
      reviews: 156,
      badge: "Limited",
    },
    {
      id: 4,
      name: "Training Shorts",
      price: 24.99,
      originalPrice: 34.99,
      category: "bottoms",
      image: "/product-4.svg",
      rating: 5,
      reviews: 203,
    },
    {
      id: 5,
      name: "Performance Hoodie",
      price: 59.99,
      originalPrice: 79.99,
      category: "outerwear",
      image: "/product-1.svg",
      rating: 5,
      reviews: 78,
      badge: "New",
    },
    {
      id: 6,
      name: "Yoga Mat Pro",
      price: 39.99,
      originalPrice: 59.99,
      category: "accessories",
      image: "/product-2.svg",
      rating: 4,
      reviews: 95,
    },
    {
      id: 7,
      name: "Resistance Bands Set",
      price: 19.99,
      originalPrice: 29.99,
      category: "accessories",
      image: "/product-3.svg",
      rating: 5,
      reviews: 142,
    },
    {
      id: 8,
      name: "Moisture-Wicking Tee",
      price: 22.99,
      originalPrice: 32.99,
      category: "tops",
      image: "/product-4.svg",
      rating: 4,
      reviews: 67,
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="homepage-container">
      <Navigation />

      {/* Shop Hero */}
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content">
            <h1 className="page-title">Shop All Products</h1>
            <p className="page-subtitle">
              Discover our complete collection of premium fitness wear and
              equipment
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="shop-content">
        <div className="container">
          <div className="shop-layout">
            {/* Filters Sidebar */}
            <div className="shop-sidebar">
              <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>All Products ({products.length})</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value="tops"
                      checked={selectedCategory === "tops"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>
                      Tops (
                      {products.filter((p) => p.category === "tops").length})
                    </span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value="bottoms"
                      checked={selectedCategory === "bottoms"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>
                      Bottoms (
                      {products.filter((p) => p.category === "bottoms").length})
                    </span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value="outerwear"
                      checked={selectedCategory === "outerwear"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>
                      Outerwear (
                      {
                        products.filter((p) => p.category === "outerwear")
                          .length
                      }
                      )
                    </span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value="accessories"
                      checked={selectedCategory === "accessories"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>
                      Accessories (
                      {
                        products.filter((p) => p.category === "accessories")
                          .length
                      }
                      )
                    </span>
                  </label>
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Price Range</h3>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="price-slider"
                  />
                  <div className="price-display">$0 - ${priceRange[1]}</div>
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Features</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span>Moisture Wicking</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span>Quick Dry</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span>Compression</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span>Eco-Friendly</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="shop-main">
              <div className="shop-header">
                <div className="results-count">
                  Showing {sortedProducts.length} of {products.length} products
                </div>
                <div className="sort-controls">
                  <label htmlFor="sort" className="sort-label">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="sort-select"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              <div className="shop-products-grid">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    className="shop-product-card"
                  >
                    <div className="product-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={350}
                      />
                      {product.badge && (
                        <div
                          className={`product-badge ${product.badge.toLowerCase().replace(" ", "")}`}
                        >
                          {product.badge}
                        </div>
                      )}
                      <div className="product-overlay">
                        <button className="quick-view">Quick View</button>
                        <button className="wishlist">♡</button>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-rating">
                        <span className="stars">
                          {"★".repeat(product.rating)}
                          {"☆".repeat(5 - product.rating)}
                        </span>
                        <span className="rating-count">
                          ({product.reviews})
                        </span>
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-pricing">
                        <span className="current-price">${product.price}</span>
                        <span className="original-price">
                          ${product.originalPrice}
                        </span>
                        <span className="discount">
                          {Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100,
                          )}
                          % OFF
                        </span>
                      </div>
                      <button className="add-to-cart improved">
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to see more products.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
