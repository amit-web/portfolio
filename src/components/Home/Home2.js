import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";


import {
  AiFillGithub,
  
  AiOutlineTwitter,

  AiOutlineMail
  
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {FiPhoneCall } from "react-icons/fi";
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
            I am a passionate Full-Stack Web Developer, skilled in building single-page applications using ReactJs and several UI libraries.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JavaScript, ReactJs, NodeJs, Express and MongoDB. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also intrested to solve{" "}
                <b className="purple">
                Data structures and Algorithm Problems.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img width="270" style={{borderRadius:"40px"}} height=""src={myImg} className="img-fluid" alt="avatar" />
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

            <FiPhoneCall/>
            
              <span style={{marginLeft:"10px",marginRight:"10px",fontSize:"17px"}} className="white">8617342954 </span>

              <AiOutlineMail/>
              <span style={{marginLeft:"10px",fontSize:"17px"}} className="white">mehtaamitpro@gmail.com</span>
            </p>

            

        
            
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
