import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './Music.css';

const Music = () => {
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
          <h2>My Music</h2>
          <p>Check out my latest tracks and albums here!</p>
        </Container>
      </>
    );
};

export default Music;
