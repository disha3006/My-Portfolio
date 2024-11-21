import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project5.jpg";
import projImg5 from "../assets/img/project4.jpg";
import projImg6 from "../assets/img/jewelery.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import React, { useEffect, useState } from 'react';

export const Projects = () => {
  const [backgroundGradient, setBackgroundGradient] = useState(null);

  const projects = [
    {
      about: "E-Com Website",
      title: "Jewelery Website for an instagram Business",
      description: "Design & Development",
      date: "May'24-Present",
      imgUrl: projImg6,
    },
    {
      about: "Recipe-Radar",
      title: "Search recipes based on your diet and allergies!",
      description: "Design & Development",
      date: "Jan’24-Apr’24",
      imgUrl: projImg1,
    },
    {
      about: "Face Recognition Attendance",
      title: "Image Analysis & Similarity-Based Retrieval",
      description: "Design & Development",
      date: "Aug’23-Nov’23",
      imgUrl: projImg2,
    },
    {
      about: "My Portfolio",
      title: "A fully functional portfolio app",
      description: "Design & Development",
      date: "Aug’21 - Apr’22",
      imgUrl: projImg3,
    },
    
  
  ];

  useEffect(() => {
    // Function to get the average color from an image
    const getAverageColor = (imageUrl) => {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.crossOrigin = "Anonymous"; // Ensure CORS compatibility
        img.onload = function () {
          let canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width, img.height);

          let imageData = ctx.getImageData(0, 0, img.width, img.height);
          let data = imageData.data;
          let r = 0, g = 0, b = 0;

          for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
          }

          let pixels = data.length / 4;
          r = Math.floor(r / pixels);
          g = Math.floor(g / pixels);
          b = Math.floor(b / pixels);

          let averageColor = rgbToHex(r, g, b);
          resolve(averageColor);
        };

        img.onerror = function (error) {
          reject(error);
        };

        img.src = imageUrl;
      });
    };

    // Helper function to convert RGB to Hex
    const rgbToHex = (r, g, b) => {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    const componentToHex = (c) => {
      let hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    // Call getAverageColor function and update state with the gradient
    getAverageColor(colorSharp2)
      .then((averageColor) => {
        let gradient = `linear-gradient(90.21deg, ${averageColor} -5.91%, #686281 111.58%)`;
        setBackgroundGradient(gradient);
      })
      .catch((error) => {
        console.error('Error calculating average color:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={`animate__animated ${isVisible ? "animate__slideInUp" : ""}`}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Add more Tab.Pane components if needed */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
      {/* Apply background gradient dynamically */}
      <style>
        {`.project .nav.nav-pills .nav-link::before {
            background-image: ${backgroundGradient};
          }`}
      </style>
    </section>
  );
};
