import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
     
     <Navbar />

      {/* Introduction Section */}
      <section id="introduction" className="section bg-light text-center">
        <Container>
          <h2>Welcome to HEPHAESTUS</h2>
          <p>Your partner in community empowerment and development.</p>
          <Button variant="primary" href="#features">Learn More</Button>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="section text-center">
        <Container>
          <h2>Our Features</h2>
          <Row>
            <Col md={4}>
              <div className="feature-box">
                <h4>Scale Up Program</h4>
                <p>Reaching every youth across the nation.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <h4>Interactive Map</h4>
                <p>Visualize our impact and reach across communities.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <h4>Community Support</h4>
                <p>Engaging and supporting local communities.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light text-center">
        <Container>
          <h2>Contact Us</h2>
          <p>Have any questions? Reach out to us anytime!</p>
          <Button variant="primary" href="mailto:contact@hephaestus.org">Email Us</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        &copy; {new Date().getFullYear()} HEPHAESTUS. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
