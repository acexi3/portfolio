import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <>
      <CustomNavbar />
      <Container>
      <div>
          <h2>Welcome to douglasWB.io</h2>
          <p>This ReactJS site showcases my tech projects and skills and tells you a little about me.</p>
      </div>
      <Link to="/about">
          <Button variant="primary">About Me</Button>
      </Link>        
    </Container>
    </>
    )
};
export default About;