"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);

  const product = {
    id: parseInt(params.id),
    name: "Premium Tank Top",
    price: 29.99,
    originalPrice: 39.99,
    rating: 5,
    reviews: 124,
    description:
      "Our Premium Tank Top is designed for ultimate comfort and performance. Made with moisture-wicking fabric that keeps you dry during intense workouts, this tank features a modern fit that moves with your body.",
    features: [
      "Moisture-wicking technology",
      "Quick-dry fabric",
      "Lightweight and breathable",
      "Anti-odor treatment",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", value: "#000" },
      { name: "White", value: "#FFF" },
      { name: "Gray", value: "#999" },
      { name: "Navy", value: "#003366" },
    ],
    images: [
      "/product-1.svg",
      "/product-2.svg",
      "/product-3.svg",
      "/product-4.svg",
    ],
    inStock: true,
    badge: "Best Seller",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Compression Leggings",
      price: 49.99,
      image: "/product-2.svg",
    },
    { id: 3, name: "Sports Bra Pro", price: 34.99, image: "/product-3.svg" },
    { id: 4, name: "Training Shorts", price: 24.99, image: "/product-4.svg" },
    {
      id: 5,
      name: "Performance Hoodie",
      price: 59.99,
      image: "/product-1.svg",
    },
  ];

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="homepage-container">
      <Navigation />

      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="product-details">
        <div className="container">
          <div className="product-layout">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  width={500}
                  height={600}
                />
                {product.badge && (
                  <div className="product-badge bestseller">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`thumbnail ${activeImage === index ? "active" : ""}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={100}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-detailed">
              <div className="product-rating">
                <span className="stars">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </span>
                <span className="rating-count">
                  ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="product-title">{product.name}</h1>

              <div className="product-pricing-detailed">
                <span className="current-price">${product.price}</span>
                <span className="original-price">${product.originalPrice}</span>
                <span className="discount">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100,
                  )}
                  % OFF
                </span>
              </div>

              <p className="product-description">{product.description}</p>

              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              <div className="selection-group">
                <h3 className="selection-title">Size:</h3>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-option ${selectedSize === size ? "selected" : ""}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="selection-group">
                <h3 className="selection-title">Color:</h3>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`color-option ${selectedColor === color.name ? "selected" : ""}`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="selection-group">
                <h3 className="selection-title">Quantity:</h3>
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="product-actions">
                <button
                  onClick={addToCart}
                  className="btn-primary add-to-cart-large"
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="wishlist-btn">♡ Add to Wishlist</button>
              </div>

              <div className="product-guarantees">
                <div className="guarantee">
                  <span className="guarantee-icon">🚚</span>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="guarantee">
                  <span className="guarantee-icon">↩️</span>
                  <span>30-day return policy</span>
                </div>
                <div className="guarantee">
                  <span className="guarantee-icon">🛡️</span>
                  <span>1-year warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="reviews-summary">
            <div className="rating-overview">
              <span className="overall-rating">4.8</span>
              <div className="stars-large">{"★".repeat(5)}</div>
              <span className="review-count">
                Based on {product.reviews} reviews
              </span>
            </div>
          </div>

          <div className="reviews-list">
            <div className="review-item">
              <div className="review-header">
                <span className="reviewer-name">Sarah M.</span>
                <span className="review-rating">★★★★★</span>
                <span className="review-date">2 weeks ago</span>
              </div>
              <p className="review-text">
                "Amazing quality tank top! The fabric is so soft and breathable.
                Perfect for my morning workouts. Highly recommend!"
              </p>
            </div>

            <div className="review-item">
              <div className="review-header">
                <span className="reviewer-name">Mike R.</span>
                <span className="review-rating">★★★★★</span>
                <span className="review-date">1 month ago</span>
              </div>
              <p className="review-text">
                "Great fit and the moisture-wicking really works. I've worn this
                for multiple gym sessions and it still looks new."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <div className="container">
          <h2 className="section-title">You might also like</h2>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/shop/${item.id}`}
                className="related-item"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={240}
                />
                <h3 className="related-name">{item.name}</h3>
                <p className="related-price">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
