import React from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './WebPages.css';
import './WebApps.css';

const WebPages = () => {
  // Placeholder data for webpage cards - replace with actual content
  const cardsData = [
    { title: 'aceXi3::art', text: 'NFT Art project website with theme exploration.', imgSrc: '/assets/websites/acexi3art_07.png' },
    { title: 'Webpage 2', text: 'Description for webpage showcase 2.', imgSrc: '/assets/placeholder.png' },
    { title: 'Webpage 3', text: 'Description for webpage showcase 3.', imgSrc: '/assets/placeholder.png' },
    { title: 'Webpage 4', text: 'Description for webpage showcase 4.', imgSrc: '/assets/placeholder.png' },
  ];

  return (
    <>
      <CustomNavbar sticky="top" />
      <Container className="page-container">
        {/* Intro Section - Similar to FindYourNextJam */}
        <div className="bg-light p-4 rounded-lg m-3 shadow-sm d-flex align-items-center">
          {/* Using a generic icon instead of profile pic for variety */}
          {/* <Image src="/assets/2021Portrait.jpg" className="webapp-profile-pic-small me-3" roundedCircle /> */}
          <i className="bi bi-palette-fill fs-1 me-3 text-secondary"></i> {/* Example icon */}
          <div>
            <h1 className="display-5">Website Showcase</h1>
            <p className="lead mb-2">
              Examples of static and dynamic websites I've built.
            </p>
            {/* Link to acexi3art */}
            <Button
              variant="primary" // Use the primary (autumn orange) style
              href="https://acexi3.github.io/acexi3art/#projects"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Visit aceXi3::art <i className="bi bi-box-arrow-up-right ms-1"></i>
            </Button>
          </div>
        </div>

        {/* Card Section */}
        <h2 className="text-center my-4">Showcase Examples</h2>
        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          {cardsData.map((card, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Card className="h-100" style={{ width: '100%', maxWidth: '20rem' }}>
                <Card.Img variant="top" src={card.imgSrc} alt={card.title} style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WebPages;
