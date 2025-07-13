"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "./AuthModal";

export default function Navigation() {
  const { user, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<"login" | "signup">("login");

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setAuthModalOpen(true);
    }
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  return (
    <>
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
          <Link href="/" className="nav-item home-active">
            <div className="nav-text">HOME</div>
          </Link>
          <Link href="/shop" className="nav-item">
            <div className="nav-text">SHOP</div>
          </Link>
          <Link href="/about" className="nav-item">
            <div className="nav-text">ABOUT</div>
          </Link>
          <Link href="/contact" className="nav-item">
            <div className="nav-text">CONTACT</div>
          </Link>
        </div>

        <Link href="/">
          <Image
            src="/logo.svg"
            alt="GWG Logo"
            width={80}
            height={80}
            className="logo"
          />
        </Link>

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

          <button onClick={handleAuthClick} className="icon-container auth-btn">
            {user?.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt="User Avatar"
                className="user-avatar"
              />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21V19C20 16.791 18.209 15 16 15H8C5.791 15 4 16.791 4 19V21M16 7C16 9.209 14.209 11 12 11S8 9.209 8 7 9.791 3 12 3 16 4.791 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {user && <span className="user-indicator">•</span>}
          </button>

          <Link href="/cart" className="icon-container cart-icon">
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
          </Link>
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

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={switchAuthMode}
      />
    </>
  );
}
