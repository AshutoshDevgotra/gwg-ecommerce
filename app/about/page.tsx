import * as React from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="homepage-container">
      <Navigation />

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">About GWG Fitness</h1>
            <p className="page-subtitle">
              Empowering fitness enthusiasts worldwide with premium athletic
              wear and equipment
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Founded in 2020, GWG Fitness emerged from a simple belief:
                everyone deserves access to high-quality athletic wear that
                doesn't compromise on style or performance. Our journey began
                when our founders, passionate fitness enthusiasts themselves,
                struggled to find workout gear that met their exacting
                standards.
              </p>
              <p className="story-paragraph">
                What started as a mission to create the perfect workout outfit
                has evolved into a comprehensive fitness lifestyle brand. Today,
                we serve over 50,000 satisfied customers worldwide, offering
                everything from moisture-wicking tank tops to professional-grade
                fitness equipment.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">4.9★</span>
                  <span className="stat-label">Customer Rating</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <Image
                src="/about-story.svg"
                alt="Our fitness journey"
                width={500}
                height={400}
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-description">
                We never compromise on quality. Every product undergoes rigorous
                testing to ensure it meets our high standards for durability and
                performance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-description">
                We're committed to sustainable practices, using eco-friendly
                materials and ethical manufacturing processes wherever possible.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3 className="value-title">Empowerment</h3>
              <p className="value-description">
                Our mission is to empower every individual to achieve their
                fitness goals with confidence and style.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Community</h3>
              <p className="value-description">
                We believe in building a supportive community where fitness
                enthusiasts can connect, inspire, and motivate each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team-1.svg"
                  alt="Sarah Johnson"
                  width={200}
                  height={250}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Sarah Johnson</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-bio">
                  Former fitness instructor with 10+ years of experience in the
                  athletic wear industry.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team-2.svg"
                  alt="Mike Chen"
                  width={200}
                  height={250}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Mike Chen</h3>
                <p className="member-role">Head of Design</p>
                <p className="member-bio">
                  Award-winning designer specializing in functional and
                  fashionable athletic wear.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team-3.svg"
                  alt="Emily Rodriguez"
                  width={200}
                  height={250}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Emily Rodriguez</h3>
                <p className="member-role">Customer Success Manager</p>
                <p className="member-bio">
                  Dedicated to ensuring every customer has an exceptional
                  experience with GWG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
