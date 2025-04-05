import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
    <CustomNavbar />
    <Container>
      <div class="bg-light p-5 rounded-lg m-3">
        <h1 class="display-4">Welcome to douglasWB.io</h1>
        <p class="lead">This basic ReactJS/Bootstrap site showcases some of my tech projects and skills and tells you a little about me.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Link to="/music">
          <Button variant="primary">My Music!</Button>
        </Link>
      </div>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/2021Portrait.jpg" roundedCircle className="profile-pic" />
          <h3>Blog</h3>
          <p>That's a crooked tree. We'll send him to Washington.</p>
        </Col>  
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src="assets/person-2.jpg" roundedCircle className="profile-pic" />
          <h3>WebApps</h3>
          <p>That's a crooked tree. We'll send him to Ottawa.</p>
        </Col>  
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src="assets/websites/acexi3art_07.png" roundedCircle className="profile-pic" />
          <h3>Websites</h3>
          <p>That's a crooked tree. We'll send him to Bangkok.</p>
        </Col>  
      </Row>  
    </Container>
    </>
  )
};
export default About;