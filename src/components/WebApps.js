import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { LinkContainer } from 'react-router-bootstrap';
import './WebApps.css';

const WebApps = () => {
    return (
      <>
      <CustomNavbar sticky="top"/>
      <Container className="page-container">
        <div className="bg-light p-4 rounded-lg m-3 mb-4 shadow-sm d-flex align-items-center">
          <Image src="assets/2021Portrait.jpg" className="webapp-profile-pic-small me-3" roundedCircle />
          <div>
            <h1 className="display-5">Web Applications</h1>
            <p className="lead mb-0">
              Showcasing interactive applications built with various technologies.
            </p>
          </div>
        </div>

        <Row xs={1} md={2} className="g-4 justify-content-center">
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '25rem' }}>
              <Card.Body className="text-center">
                <Card.Title>Find Your Next Jam</Card.Title>
                <Card.Text>
                  Discover new music via the Spotify API.
                </Card.Text>
                <LinkContainer to="/webapps/findyournextjam">
                  <Button variant="primary">View App Details</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '25rem' }}>
              <Card.Body className="text-center">
                <Card.Title>Condo AI App</Card.Title>
                <Card.Text>
                  AI-powered tools for condo management.
                </Card.Text>
                <LinkContainer to="/webapps/condoai">
                  <Button variant="primary">View App Details</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
    )
};
export default WebApps;