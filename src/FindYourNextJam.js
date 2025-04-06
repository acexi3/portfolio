import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import './FindYourNextJam.css'; // Import the CSS
import './components/WebApps.css'; // Import shared webapp styles (for profile pic)

const FindYourNextJam = () => {
  // Placeholder data for cards - replace with actual content/images
  const cardsData = [
    { title: 'Artist Search', text: 'Search for your favorite artist to get recommendations.', imgSrc: '/assets/webapps/findyournextjam01.png' },
    { title: 'Recommendations', text: 'View recommended artists based on your search.', imgSrc: '/assets/webapps/findyournextjam02.png' },
    { title: 'Artist Details', text: 'See top tracks and albums for recommended artists.', imgSrc: '/assets/webapps/findyournextjam03.png' },
    { title: 'Responsive Design', text: 'App is designed to work on various screen sizes.', imgSrc: '/assets/webapps/findyournextjam04.png' },
  ];

  return (
    <>
      <CustomNavbar sticky="top"/>
      <Container className="page-container">
        {/* Intro Section */}
        <div className="bg-light p-4 rounded-lg m-3 shadow-sm d-flex align-items-center">
          <Image src="/assets/2021Portrait.jpg" className="webapp-profile-pic-small me-3" roundedCircle />
          <div>
            <h1 className="display-5">Find Your Next Jam</h1>
            <p className="lead mb-2">
              Discover new music based on your favorite artists using the Spotify API.
            </p>
            <Button
              variant="primary"
              href="https://findyournextjam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              size="sm" // Smaller button
            >
              Visit Live App <i className="bi bi-box-arrow-up-right ms-1"></i> {/* Optional icon */}
            </Button>
          </div>
        </div>

        {/* Card Section */}
        <h2 className="text-center my-4">App Features & Screenshots</h2>
        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          {cardsData.map((card, index) => (
            <Col key={index} className="d-flex justify-content-center">
              {/* Make card width slightly more flexible */}
              <Card className="h-100" style={{ width: '100%', maxWidth: '20rem' }}>
                <Card.Img variant="top" src={card.imgSrc} alt={card.title} style={{aspectRatio: '16/9', objectFit: 'cover'}} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {card.text}
                  </Card.Text>
                  {/* Optional: Add buttons or links per card if needed */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </>
  );
};

export default FindYourNextJam;
