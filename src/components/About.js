import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { Link } from 'react-router-dom';

const About = () => {
    return (
    <>
      <CustomNavbar />
      <Container>
      <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">Welcome to douglasWB.io</h1>
            <p class="lead">This ReactJS site showcases my tech projects and skills and tells you a little about me.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Link to="/meme">
              <Button variant="primary">My Favorite Meme!</Button>
            </Link>
        </div>  
      </Container>
    </>
    )
};
export default About;