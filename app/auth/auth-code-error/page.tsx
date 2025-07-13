import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function AuthCodeError() {
  return (
    <div className="homepage-container">
      <Navigation />

      <section className="auth-error-hero">
        <div className="container">
          <div className="auth-error-content">
            <div className="error-icon">❌</div>
            <h1 className="error-title">Authentication Error</h1>
            <p className="error-subtitle">
              Sorry, there was an error during the authentication process.
            </p>
            <div className="error-actions">
              <Link href="/" className="btn-primary">
                Go to Homepage
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="btn-secondary"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
