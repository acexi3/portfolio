import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap'; // Removed Button for now
import CustomNavbar from './components/CustomNavbar';
import './CondoAI.css'; // Import the CSS
import './components/WebApps.css'; // Import shared webapp styles (for profile pic)

const CondoAI = () => {
  // Placeholder data for cards - replace with actual content/images
  const cardsData = [
    { title: 'Feature 1', text: 'Description of Condo AI feature 1.', imgSrc: '/assets/placeholder.png' },
    { title: 'Feature 2', text: 'Description of Condo AI feature 2.', imgSrc: '/assets/placeholder.png' },
    { title: 'Feature 3', text: 'Description of Condo AI feature 3.', imgSrc: '/assets/placeholder.png' },
    { title: 'Feature 4', text: 'Description of Condo AI feature 4.', imgSrc: '/assets/placeholder.png' },
  ];


  return (
    <>
      <CustomNavbar sticky="top"/>
      <Container className="page-container">
        {/* Intro Section */}
        <div className="bg-light p-4 rounded-lg m-3 shadow-sm d-flex align-items-center">
          <Image src="/assets/2021Portrait.jpg" className="webapp-profile-pic-small me-3" roundedCircle />
          <div>
            <h1 className="display-5">Condo AI App</h1>
            <p className="lead mb-0"> {/* Adjusted text */}
              AI-powered tools for condominium management (details coming soon).
            </p>
            {/* No live link yet */}
          </div>
        </div>

        {/* Card Section */}
        <h2 className="text-center my-4">App Features & Screenshots</h2>
        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
           {cardsData.map((card, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Card className="h-100" style={{ width: '100%', maxWidth: '20rem' }}>
                <Card.Img variant="top" src={card.imgSrc} alt={card.title} style={{aspectRatio: '16/9', objectFit: 'cover'}}/>
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

export default CondoAI;
