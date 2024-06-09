  import React from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Container, Row, Col, Navbar, Nav, Form, Button, NavDropdown, FormControl } from 'react-bootstrap';
  import Brain from './icons8-fast-cart-48.png';
  import { MdOutlineLocalGroceryStore, MdOutlineBakeryDining, MdLocalGroceryStore } from "react-icons/md";
  import { GiClothes } from "react-icons/gi";
  import { BiSolidShoppingBags } from "react-icons/bi";
  import "./Custom.css"
  function Mynavbar() {
    return (
      <div>
        <Navbar bg="dark" expand="md" fixed='top' variant="dark">
          <Container fluid className='p-3'>
            <Navbar.Brand href='#'>
              <img src={Brain} height={30} className='align-top' alt="image not found" /> &nbsp;
              Lazeez Foodz
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='my-nav' />
            <Navbar.Collapse id='my-nav'>
              <Nav className='me-auto fw-bold ms-5' >
                <NavDropdown
                  title={
                    <span>
                      <MdLocalGroceryStore style={{ fontSize: "20px", color: "black" }} /> &nbsp; Grocery
                    </span>
                  }
                  className='bg-white rounded'
                  id="my-nav-dropdown"
                >
                  <NavDropdown.Item href="#" >
                    <MdOutlineLocalGroceryStore style={{ fontSize: "20px", color: "green" }} /> &nbsp; Grocery
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    <MdOutlineBakeryDining style={{ fontSize: "20px", color: "green" }} /> &nbsp; Bakery
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    <GiClothes style={{ fontSize: "20px", color: "green" }} /> &nbsp; Clothes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    <BiSolidShoppingBags style={{ fontSize: "20px", color: "green" }} /> &nbsp; Bags
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form> */}
              <Button>Buy Now</Button> &nbsp;
              <Button>Become a seller</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container style={{ marginTop: '5rem' }}>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  export default Mynavbar;
