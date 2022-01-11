import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DivMode } from "react-particles-js";
import homeLogo from "../../Assets/banner_picture.png";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content home-header" >
          <Row>
            <Col>
              <h1 className="heading-name">
                Discover a fun way of
              </h1>

              <h1 className="heading-name">
                learning for kids
              </h1>

              <h4 className="heading-content">
                Experience over 45 safe and ad-free
              </h4>

              <h4 className="heading-content">
                mobile games for 2-11 year old kids
              </h4>
              </Col>

              <Col md={7} style={{paddingBottom: 20, height: 10 }}>
                <img src={homeLogo} alt="home pic"  style={{height: 500}}/>
              </Col>
          </Row>
             
          </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
