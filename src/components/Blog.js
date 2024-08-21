import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './Blog.css';

export default function Blog() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <h2>Blog</h2>
        <Row>
          <Col xs={12} sm={8} className="main-section">
            <p>There is immense joy in just watching - watching all the little creatures in nature. This is gonna be a happy little seascape. You're meant to have fun in life. You create the dream - then you bring it into your world. Let's just drop a little Evergreen right here. Play with the angles.</p>
            <p>Let that brush dance around there and play. Now, we're going to fluff this cloud. By now you should be quite happy about what's happening here. This is the way you take out your flustrations.</p>
            <p>Anything you want to do you can do here. There we go. Here's another little happy bush We'll make some happy little bushes here. You have to make those little noises or it won't work. There isn't a rule. You just practice and find out which way works best for you.</p>
            <p>Let your imagination be your guide. See how easy it is to create a little tree right in your world. That's what makes life fun. That you can make these decisions. That you can create the world that you want. We spend so much of our life looking - but never seeing. It's so important to do something every day that will make you happy. Get tough with it, get strong.</p>
            <p>The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. It takes dark in order to show light. Maybe there's a little something happening right here. If you do too much it's going to lose its effectiveness. You can create anything that makes you happy. Go out on a limb - that's where the fruit is.</p>
            <p>There it is. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Mix your color marbly don't mix it dead. The man who does the best job is the one who is happy at his job. All those little son of a guns.</p>
            <p>If you don't think every day is a good day - try missing a few. You'll see. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Didn't you know you had that much power? You can move mountains. You can do anything. In your world you have total and absolute power. Working it up and down, back and forth.</p>
          </Col>
          <Col xs={12} sm={4} className="side-section">
            <Image src="assets/2021Portrait.jpg" className="blog-bio-pic" rounded />
            <p>We'll lay all these little funky little things in there. Now we'll take the almighty fan brush. And maybe a little bush lives there. We don't have anything but happy trees here. Life is too short to be alone, too precious. Share it with a friend. You better get your coat out, this is going to be a cold painting.</p>
            <p>We need a shadow side and a highlight side. Use what you see, don't plan it. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. This piece of canvas is your world.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
};
