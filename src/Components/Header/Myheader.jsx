import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap';
import { LuShoppingBasket } from "react-icons/lu";
import './Myheader.css'; // Import the CSS file

import Food from "./1717838226248.png";

class Myheader extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>Enjoy Lazez Foodz 🥳</h1>
          <Row className="justify-content-center mt-5">
            <Col md={8} lg={6} className="d-flex align-items-center">
              <Form className="w-100 d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Food Here"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form>
            </Col>
          </Row>
          <Button className='mt-5' style={{ fontSize: "20px" }}>
            <LuShoppingBasket style={{ fontSize: "20px", color: "black" }} />
            &nbsp; Order Now
          </Button>
          <Row className="justify-content-center mt-5">
            <Col md={9} className="d-flex justify-content-center">
              <img src={Food} className="img-fluid rotate" alt="Food" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Myheader;
