import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Form, Container, Row, Col, Button } from "react-bootstrap";
// import "./footerStyles.css";  // Import custom styles

function Myfooter() {
  return (
    <div className="footer-container text-white py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>
              <Button variant="success" type="submit">Submit</Button>
            </Form>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0869809013496!2d144.96328031530784!3d-37.81410797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57719a77dd3ec1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1612470820164!5m2!1sen!2sau"
                width="350px"
                height="350"
                style={{ border: 0, borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Myfooter;
