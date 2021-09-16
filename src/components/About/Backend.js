import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiMongodb } from "react-icons/di";

function Backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>Mongo DB</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img width="100"  src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"/>
        <h4>Express</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img width="100"  src="https://miro.medium.com/max/1200/1*4E0JF4BkB4lkJrf8G30qlg.png"/>
        <h4>Mongoose</h4>
      </Col>


     
    </Row>
  );
}

export default Backend;
