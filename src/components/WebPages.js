import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './WebPages.css';

export default function WebPages() {
  return (
    <>
    <CustomNavbar />
      <Container>
          <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">Webpage Designs</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </div>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="webpage-wrapper">
            <Image src="assets/image-1.jpg" className="webpage-pic" rounded />
            <h3>Wat Arun</h3>
            <p>A beautiful temple built on the banks of the Chao Phraya</p>
          </Col>  
          <Col xs={12} sm={4} className="webpage-wrapper">
            <Image src="assets/image-2.jpg" className="webpage-pic" rounded />
            <h3>Bangkok</h3>
            <p>City full of life and lights</p>
          </Col>  
          <Col xs={12} sm={4} className="webpage-wrapper">
            <Image src="assets/image-3.jpg" className="webpage-pic" rounded />
            <h3>Pai</h3>
            <p>A beautiful and peaceful village in the mountains</p>
          </Col>  
        </Row>
      </Container>
    </> 
  )
};
