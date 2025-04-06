import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './Music.css';

const Music = () => {
    return (
      <>
        <CustomNavbar />
        <Container className="page-container">
          <h2>My Music</h2>
          <p>Check out my latest tracks and albums here!</p>
        </Container>
      </>
    );
};

export default Music;
