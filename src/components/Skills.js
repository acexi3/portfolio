import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './Skills.css';

// Define the skills data
const skills = [
  { name: 'JavaScript', logo: '../assets/logos/javascript.svg' }, 
  { name: 'TypeScript', logo: '../assets/logos/typescript.svg' },
  { name: 'React', logo: '../assets/logos/react.svg' },
  { name: 'Redux', logo: '../assets/logos/redux.svg' },
  { name: 'Next.js', logo: '../assets/logos/nextjslogo.svg' },
  { name: 'Node.js', logo: '../assets/logos/nodejs.svg' },
  { name: 'Express', logo: '../assets/logos/express.svg' },
  { name: 'REST API', logo: '../assets/logos/restapi.svg' }, 
  { name: 'Claude AI', logo: '../assets/logos/anthropic.png' },        
  { name: 'Python', logo: '../assets/logos/python.svg' },
  { name: 'PostgreSQL', logo: '../assets/logos/postgresql.svg' },
  { name: 'HTML', logo: '../assets/logos/html.svg' }, 
  { name: 'CSS', logo: '../assets/logos/css.svg' },   
  { name: 'EVM/Solidity', logo: '../assets/logos/ethereum.svg' },
  { name: 'Hardhat', logo: '../assets/logos/hardhat.png' },
  { name: 'SUI/Move', logo: '../assets/logos/SUIlogo.svg' },     
  { name: 'Walrus', logo: '../assets/logos/88845815.png' },    
  { name: 'Algokit', logo: '../assets/logos/ALGOkit.jpg' }, 
];

const Skills = () => {
  return (
    <>
      <CustomNavbar />
      <Container className="page-container">
        <h2 className="display-5 mb-5 text-center">Technologies & frameworks I'm most comfortable with:</h2>
      
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