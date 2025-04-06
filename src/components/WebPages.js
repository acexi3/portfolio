import React, { useEffect } from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './WebPages.css';

const WebPages = () => {
  // Dummy data for web pages
  const webPages = [
    // ... (existing web pages array)
  ];

  // Add/remove no-scroll class on mount/unmount
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
        <h1 className="text-center mb-4">Webpages Showcase</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {webPages.map((page) => (
            <Col key={page.id}>
             {/* ... existing Card structure ... */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WebPages;
