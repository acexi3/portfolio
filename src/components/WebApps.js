import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './WebApps.css';

const WebApps = () => {
    return (
      <>
      <CustomNavbar sticky="top"/>
      <Container className="page-container">
        <div className="bg-light p-4 rounded-lg m-3 shadow-sm d-flex align-items-center">
          <Image src="assets/2021Portrait.jpg" className="webapp-profile-pic-small me-3" roundedCircle />
          <div>
            <h1 className="display-5">Web Applications</h1>
            <p className="lead mb-0">
              Showcasing interactive applications built with various technologies.
            </p>
          </div>
        </div>
      </Container>
    </>
    )
};
export default WebApps;