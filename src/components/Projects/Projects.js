import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import orbitz from "../../Assets/Projects/orbitz.png";
import Hotstar from "../../Assets/Projects/Hotstar.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotstar}
              isBlog={false}
              title="Hotstar Clone"
              techstack = "TechStack- HTML,CSS,Javascript "
              description="Hotstar is Entertainment website,In this website User can watch the movies,series,Tv serials as per their respective language. Hotstar (also known as Disney+ Hotstar) is an Indian brand of subscription video on-demand over-the-top streaming service operated by Disney Media and Entertainment Distribution, a division of The Walt Disney Company.
           
We had to given time constrainet of 5 days to clone this website."
              link="https://github.com/arunkr741/project_hotstar"
              link1 ="https://thirsty-roentgen-4c4218.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orbitz}
              isBlog={false}
              title="Orbitz Clone"
              techstack = "TechStack- HTML,CSS,Javascript "
              description="In This project We have cloned Orbitz.com website in 4 days. This project is given to us by Masai School as our second unit project. Our Team name is BEAS which came from the River BEAS.We have created five pages of this website from where user can book a hotel room for him.Orbitz landing Page Hotel list Page Hotel DescriptionPage Login/Signin/Forget Password Page Payment Page and also two pop up pages(hotel price and chatbot)"
              link="https://github.com/amit-web/Orbitz-clone"
              link1="https://nrjrwt0.github.io/Orbitz-clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
