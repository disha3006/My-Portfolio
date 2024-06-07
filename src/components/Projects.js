import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpeg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpeg";
import projImg4 from "../assets/img/project5.webp";
import projImg5 from "../assets/img/project4.jpeg";
import projImg6 from "../assets/img/calculator.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Enhancing Single-Cell RNA Sequencing Analysis for Neurodegenerative Disease Research",
      description: "Design & Development",
      date: "Jan’24-Apr’24",
      imgUrl: projImg1,
    },
    {
      title: "Image Analysis & Similarity-Based Retrieval",
      description: "Design & Development",
      date: "Aug’23-Nov’23",
      imgUrl: projImg2,
    },
    {
      title: "Conversational AI Platform - Natural Language Processing",
      description: "Design & Development",
      date: "Aug’21 - Apr’22",
      imgUrl: projImg3,
    },
    {
      title: "Carify - Machine Learning based Web Application",
      description: "Design & Development",
      date: "Sept’20 - Apr’21",
      imgUrl: projImg4,
    },
    {
      title: "Facial Expression detector",
      description: "Design & Development",
      date: "Oct'20-Nov’20",
      imgUrl: projImg5,
    },
    {
      title: "Scientific Calculator for an educational app",
      description: "Design & Development",
      date: "Feb'20-Jun’20",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <br></br>
                  <br></br>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
