
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Printify</h1>
        <p>Create and sell custom products with our easy-to-use platform</p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="hero-image.jpg" alt="Hero Image" />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <ul>
        <li>
          <div className="feature-icon">
            <img src="feature-icon-1.jpg" alt="Feature Icon 1" />
          </div>
          <h3>Easy Product Creation</h3>
          <p>Create custom products with our intuitive design tool</p>
        </li>
        <li>
          <div className="feature-icon">
            <img src="feature-icon-2.jpg" alt="Feature Icon 2" />
          </div>
          <h3>Global Shipping</h3>
          <p>Ship products to customers worldwide with our reliable shipping partners</p>
        </li>
        <li>
          <div className="feature-icon">
            <img src="feature-icon-3.jpg" alt="Feature Icon 3" />
          </div>
          <h3>Real-time Tracking</h3>
          <p>Track orders in real-time with our advanced tracking system</p>
        </li>
      </ul>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="call-to-action">
      <h2>Get Started Today</h2>
      <p>Sign up for a free account and start creating custom products</p>
      <button className="btn">Sign Up</button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Printify. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;