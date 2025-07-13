"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Premium Tank Top",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "Black",
      image: "/product-1.svg",
    },
    {
      id: 2,
      name: "Compression Leggings",
      price: 49.99,
      quantity: 1,
      size: "L",
      color: "Navy",
      image: "/product-2.svg",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="homepage-container">
      <Navigation />

      {/* Cart Hero */}
      <section className="cart-hero">
        <div className="container">
          <div className="cart-hero-content">
            <h1 className="page-title">Shopping Cart</h1>
            <p className="page-subtitle">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
              cart
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="cart-content">
        <div className="container">
          {cartItems.length > 0 ? (
            <div className="cart-layout">
              {/* Cart Items */}
              <div className="cart-items">
                <div className="cart-header">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span></span>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-product">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={100}
                      />
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-variant">
                          Size: {item.size} | Color: {item.color}
                        </p>
                      </div>
                    </div>

                    <div className="item-price">${item.price}</div>

                    <div className="item-quantity">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-line">
                  <span>Shipping:</span>
                  <span>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="summary-line">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="summary-total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {subtotal < 100 && (
                  <div className="shipping-notice">
                    Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
                  </div>
                )}

                <div className="promo-code">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="promo-input"
                  />
                  <button className="promo-btn">Apply</button>
                </div>

                <Link href="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </Link>

                <div className="secure-checkout">
                  <span>🔒 Secure checkout with SSL encryption</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-content">
                <div className="empty-cart-icon">🛒</div>
                <h2 className="empty-cart-title">Your cart is empty</h2>
                <p className="empty-cart-text">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link href="/shop" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recommended Products */}
      {cartItems.length > 0 && (
        <section className="recommended-products">
          <div className="container">
            <h2 className="section-title">You might also like</h2>
            <div className="recommended-grid">
              <div className="recommended-item">
                <Image
                  src="/product-3.svg"
                  alt="Sports Bra Pro"
                  width={150}
                  height={180}
                />
                <h3 className="recommended-name">Sports Bra Pro</h3>
                <p className="recommended-price">$34.99</p>
                <button className="add-recommended">Add to Cart</button>
              </div>
              <div className="recommended-item">
                <Image
                  src="/product-4.svg"
                  alt="Training Shorts"
                  width={150}
                  height={180}
                />
                <h3 className="recommended-name">Training Shorts</h3>
                <p className="recommended-price">$24.99</p>
                <button className="add-recommended">Add to Cart</button>
              </div>
              <div className="recommended-item">
                <Image
                  src="/product-1.svg"
                  alt="Performance Hoodie"
                  width={150}
                  height={180}
                />
                <h3 className="recommended-name">Performance Hoodie</h3>
                <p className="recommended-price">$59.99</p>
                <button className="add-recommended">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
