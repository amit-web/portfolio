import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  
} from "react-icons/di";
import {IoLogoHtml5} from "react-icons/io";
import { SiRedux, SiCss3, SiMaterialUi, SiStyledComponents } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoHtml5/>
        <h4>HTML</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h4>CSS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h4>Redux</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialUi />
        <h4>Material UI</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStyledComponents />
        <h4>Styled Components</h4>
      </Col>

      

     

     
    </Row>
  );
}

export default Techstack;
