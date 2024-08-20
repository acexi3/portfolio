import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

export default function Blog() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
      </Container>
    </>
  )
};
