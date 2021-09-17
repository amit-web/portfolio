import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Enthusiastic Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, A team player, Seeking a challenging position with any organization.
              <br />
            
              <br />
              <br />I am passionate about solving real world problems  and always eager to connect with other people. &nbsp;
              
              <br />
             
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                width="270"
                style={{ borderRadius: "40px" }}
                height=""
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amit-web"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Amitkum13525749"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amitmehta007/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <p>
              <FiPhoneCall />

              <span
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  fontSize: "17px",
                }}
                className="white"
              >
                8617342954{" "}
              </span>

              <AiOutlineMail />
              <span
                style={{ marginLeft: "10px", fontSize: "17px" }}
                className="white"
              >
                mehtaamitpro@gmail.com
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
