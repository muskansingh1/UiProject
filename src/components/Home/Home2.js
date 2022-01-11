import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/skidosVideo.PNG";
import char1 from "../../Assets/char1.png";
import packagePass from "../../Assets/package_bg.png";
import myFunImg from "../../Assets/devices.png";
import char3 from "../../Assets/char3.png";
import reward1 from "../../Assets/reward1.png";
import reward2 from "../../Assets/reward2.png";
import reward3 from "../../Assets/reward3.png";
import packageOff from "../../Assets/50off.png";
import packageIcon1 from "../../Assets/package_icon1.png";
import packageIcon2 from "../../Assets/package_icon2.png";
import packageIcon3 from "../../Assets/package_icon3.png";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineCheckCircle,
  AiFillStar,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" , color: "black", fontWeight: "bold"}}>
              Why SKIDOS
            </h1>
            <p className="home-about-body" style={{ fontSize: "2.6em" , color: "black"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col className="home-about-social">
            <h1 style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>Let kids learn on their own with meaning-ful screen time</h1>
            <Col md={8}>
            <ul className="home-about-social-links">
              <li className="social-icons" style={{ paddingTop: "30px"}}>
                <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                    Practice maths and develop 21st century skills
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Practice maths and develop 21st century skills
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Practice maths and develop 21st century skills
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Practice maths and develop 21st century skills
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Practice maths and develop 21st century skills
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Practice maths and develop 21st century skills
                </span>
              </li>
            </ul>
            </Col>
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={char1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>Our learning packages</h1>
            <p style={{ fontSize: "1em" , color: "black", paddingLeft: "30px"}}>
              Choose the right Pass for your kids
            </p>
            <ul className="packageDetails">
              <li className="social-icons" style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={packagePass} className="" alt="avatar" width={250} height={400} />
              </Tilt>              
              <span className="Package1" ></span>
              </li>
              <li className="social-icons"  style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={packagePass} className="" alt="avatar"width={250} height={400} />
              </Tilt>
              </li>
              <li className="social-icons" style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={packagePass} className="" alt="avatar" width={250} height={400}/>
              </Tilt>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}className="home-about-social">
            <h1 style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px",paddingTop: "30px"}}>Included in your SKIDOS pass</h1>
            <ul className="home-about-social-links">
              <li className="social-icons" style={{ paddingTop: "30px"}}>
                <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                    Up to 6 users with one Pass.
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Up to 6 users with one Pass.
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Up to 6 users with one Pass.
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Up to 6 users with one Pass.
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Up to 6 users with one Pass.
                </span>
              </li>
              <li className="social-icons" style={{ paddingTop: "30px"}}>
              <p
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineCheckCircle />
                </p>
                <span className="home-about-body" style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>
                Up to 6 users with one Pass.
                </span>
              </li>
            </ul>
            
          </Col>
        </Row>
        <Row>
        <h1 style={{ fontSize: "2.6em" , color: "black", fontWeight: "bold", textAlign: "center", width: "-webkit-fill-available",  paddingTop: "100px"}}>
              Unlimited fun and learning for your kid
            </h1>
            <Col  className="myFun">
            <Tilt>
              <img src={myFunImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="fun-about-description">
            
            <p className="home-about-body" style={{ fontSize: "2.6em" , color: "black"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
        <Row>
        <h1 style={{ fontSize: "2.6em" , color: "black", fontWeight: "bold", textAlign: "center", width: "-webkit-fill-available",  paddingTop: "100px"}}>
              Loved by kids, parents and teachers
            </h1>
          <Col md={8} className="fun-about-description">
          <p className="home-about-body" style={{ fontSize: "1.6em" , color: "green", textAlign: "center"}}>
                Kids are loving it
            </p>
            <p className="home-about-body" style={{ fontSize: "1.6em" , color: "black", paddingTop: "0px", marginBottom: "0rem",textAlign: "center"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="home-about-body" style={{ fontSize: "1.6em" , color: "green", textAlign: "center", paddingTop: "0px"}}>
                -HomeSchoolMommyErica
            </p>
            <p className="home-star-icons" style={{color: "#fffbb0"}}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            </p>
          </Col>
          <Col md={4} className="myStar" >
            <Tilt>
              <img src={char3} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" , color: "black", paddingLeft: "30px"}}>Rewards and Recognition</h1>
            <ul className="packageDetails">
              <li className="social-icons" style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={reward1} className="" alt="avatar" width={250} height={300} />
              </Tilt>              
              <span className="Package1" ></span>
              </li>
              <li className="social-icons"  style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={reward2} className="" alt="avatar"width={250} height={300} />
              </Tilt>
              </li>
              <li className="social-icons" style={{  paddingTop: "30px"}}>
              <Tilt>
              <img src={reward3} className="" alt="avatar" width={250} height={300}/>
              </Tilt>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
