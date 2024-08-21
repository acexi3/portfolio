import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './WebApps.css';

const WebApps = () => {
    return (
      <>
      <CustomNavbar sticky="top"/>
      <Container>
        <div>
          <Image src="assets/image-4.jpg" className="webapp-header-image" rounded />
          <Container>
            <Col xs={12} sm={12} smOffset={2}>
              <Image src="assets/2021Portrait.jpg" className="webapp-profile-pic" rounded />  
              <div class="bg-light p-5 rounded-lg m-3">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <p>This is probably the greatest thing to happen in my life - to be able to share this with you. If you don't like it - change it. It's your world. This is unplanned it really just happens. At home you have unlimited time. We don't really know where this goes - and I'm not sure we really care. This present moment is perfect simply due to the fact you're experiencing it.</p>
                <p>Let's put some happy little clouds in our world. Isn't that fantastic that you can create an almighty tree that fast? When you buy that first tube of paint it gives you an artist license. It's life. It's interesting. It's fun. We'll throw some happy little limbs on this tree.</p>
                <p>Don't fiddle with it all day. We want to use a lot pressure while using no pressure at all. As trees get older they lose their chlorophyll. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Use what happens naturally, don't fight it.</p>
                <p>Here we're limited by the time we have. Working it up and down, back and forth. In life you need colors. We need a shadow side and a highlight side.</p>
                <p>Let's give him a friend too. Everybody needs a friend. We'll put some happy little leaves here and there. This is a fantastic little painting. Get tough with it, get strong. Maybe there's a happy little bush that lives right there. There's nothing wrong with having a tree as a friend.</p>
              </div>
            </Col>
          </Container>
        </div>
      </Container>
    </>
    )
};
export default WebApps;