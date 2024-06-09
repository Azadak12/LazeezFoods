import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoIosClock } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className='bg-dark text-white py-5'>
      <Container>
        <Row className='text-white p-3 mb-5' style={{borderBottom: "1px solid gray"}}>
          <Col xs={12} md={6} className='mb-4 mb-md-0' style={{fontSize: "18px"}}>
            <IoLocation style={{fontSize: "25px", color: "green"}} /> Lazeez Foods Lahore Anarkli <br />
            <IoIosCall style={{fontSize: "25px", color: "green"}} /> +923876834989 <br />
            <IoIosClock style={{fontSize: "25px", color: "green"}} /> Monday 9:00 AM to Saturday 11:59:59 PM
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-around align-items-center'>
            <FaFacebook style={{fontSize: "3rem", color: "blue"}} />
            <FaSquareInstagram style={{fontSize: "3rem", color: "red"}} />
            <FaSquareXTwitter style={{fontSize: "3rem", color: "dark"}} />
            <FaLinkedin style={{fontSize: "3rem", color: "lightblue"}} />
          </Col>
        </Row>
        
        <div className='text-center my-5'>
          <h2>About Us</h2>
          <p>Lazeez Foods is your go-to destination for delicious and authentic cuisine in the heart of Lahore's Anarkli. Our commitment to quality and flavor ensures a delightful dining experience every time.</p>
        </div>

        <div className='text-center mt-5'>
          <p>&copy; 2024 Lazeez Foods. All rights reserved. Unauthorized duplication is a violation of applicable laws. Designed with love by Abdul Kalam.</p>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
