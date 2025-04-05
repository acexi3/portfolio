import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './Skills.css';

// Define the skills data
const skills = [
  { name: 'JavaScript', logo: '../assets/logos/javascript.svg' }, // <-- Update paths later
  { name: 'TypeScript', logo: '../assets/logos/typescript.svg' },
  { name: 'React', logo: '../assets/logos/react.svg' },
  { name: 'Redux', logo: '../assets/logos/redux.svg' },
  { name: 'Next.js', logo: '../assets/logos/nextjslogo.svg' },
  { name: 'Node.js', logo: '../assets/logos/nodejs.svg' },
  { name: 'Express', logo: '../assets/logos/express.svg' },
  { name: 'REST API', logo: '../assets/logos/restapi.svg' }, // Consider a generic icon
  { name: 'Claude AI', logo: '../assets/logos/anthropic.png' },        // Consider a generic icon
  { name: 'Python', logo: '../assets/logos/python.svg' },
  { name: 'PostgreSQL', logo: '../assets/logos/postgresql.svg' },
  { name: 'HTML', logo: '../assets/logos/html.svg' }, // Might need separate or combined
  { name: 'CSS', logo: '../assets/logos/css.svg' },          // Consider a generic icon
  { name: 'EVM/Solidity', logo: '../assets/logos/ethereum.svg' },
  { name: 'Hardhat', logo: '../assets/logos/hardhat.png' },
  { name: 'SUI/Move', logo: '../assets/logos/SUIlogo.svg' },     // Or move.svg
  { name: 'Walrus', logo: '../assets/logos/88845815.png' },    // Need specific logo?
  { name: 'Algokit', logo: '../assets/logos/ALGOkit.jpg' },  // Need specific logo?
];

const Skills = () => {
    return (
      <>
        <CustomNavbar />
        <Container className="skills-container mt-1 mb-5">
          <h2 className="text-center mb-5">Technologies and frameworks I am most comfortable with.</h2>
        
          <Row xs={1} sm={2} md={4} lg={6} className="g-4 justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} className="d-flex justify-content-center">
                <Card className="skill-card text-center">
                  <Card.Body>
                    <img
                      src={skill.logo} // <-- Placeholder path
                      alt={`${skill.name} logo`}
                      className="skill-logo mb-3"
                      onError={(e) => { e.target.style.display = 'none'; e.target.onerror = null; }} // Hide if logo fails to load
                    />
                    <Card.Title>{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
};

export default Skills;