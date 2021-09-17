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
              imgPath={"https://i.ibb.co/SNSGcB2/Screenshot-1204.png"}
              isBlog={false}
              title="Skyscanner Clone"
              techstack ="TechStack :- HTML,CSS,Javascript,Reactjs,Redux, MaterialUI "
              description=" Skyscanner is a metasearch engine and travel agency based in Edinburgh, Scotland. The site is available in over 30 languages and is used by 100 million people per month. 
           
               We had to given time constrainet of 5 days to clone this website.There are four members were working on this project."
              link="https://github.com/ravishukla86044/skyscanner"
              link1 ="https://skyscanner-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.ibb.co/vhm7mvC/Screenshot-1211.png"}
              isBlog={false}
              title="Hirist Clone"
              techstack ="TechStack :- HTML,CSS,Javascript,Reactjs"
              description=" It starts with a seed of an idea. Then that seed germinates into a thought. And finally, that thought begins to grow in your mind like a tree seeking sunshine!It was with a similar idea that hirist was born and now that idea has grown into a platform that helps jobseekers connect with their dream job. 
           
               We had to given time constrainet of 5 days to clone this website.There are four members were working on this project."
              link="https://github.com/amit-web/Project-hirist-clone"
              link1 ="https://hiristclone.netlify.app/"
            />
          </Col>
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
