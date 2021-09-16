import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode, SiPostman, SiNetlify } from "react-icons/si";
import {
 
  DiGit,
} from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS code </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
        <h4>Github </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify </h4>

        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
