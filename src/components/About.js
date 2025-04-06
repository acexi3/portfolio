import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <CustomNavbar />
      <Container className="page-container">
        <div className="bg-light px-5 py-3 rounded-lg m-3 shadow-sm">
          <h1 className="display-4">Welcome to douglaswb.dev</h1>
          <p className="lead">This basic ReactJS/Bootstrap site showcases some of my tech projects and skills and tells you a little about me.</p>
          <hr className="my-4"/>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">
              It uses utility classes for typography and spacing to space content out within the larger container.
            </p>
            <Link to="/music" className="ms-3">
              <Button variant="primary">My Music!</Button>
            </Link>
          </div>
        </div>
        <Row className="show-grid text-center mt-5">
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/blog">
              <Image src="assets/2021Portrait.jpg" roundedCircle className="profile-pic" />
            </Link>
            <h3>Blog</h3>
            <p>That's a crooked tree. We'll send him to Washington.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/webapps">
              <Image src="assets/webapps/findyournextjam01.png" roundedCircle className="profile-pic" />
            </Link>
            <h3>WebApps</h3>
            <p>That's a crooked tree. We'll send him to Ottawa.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/webpages">
              <Image src="assets/websites/acexi3art_07.png" roundedCircle className="profile-pic" />
            </Link>
            <h3>WebPages</h3>
            <p>That's a crooked tree. We'll send him to Bangkok.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
};
export default About;