import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memory from "../../Assets/Projects/memory.png";
import Airbnb from "../../Assets/Projects/airbn.png";
import calculator from "../../Assets/Projects/calculator.png";
import tenzies from "../../Assets/Projects/tenzies.png";
import bluespace from "../../Assets/Projects/bluespace.png";

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
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description=" Tenzies Game involves selecting a set of dice and then rolling them repeatedly until all dice show the same value. The game is played as a single player and the objective is to achieve the goal of matching all the dice in as few rolls as possible."
              ghLink="https://github.com/The-SaqlainNawaz/Tenzies_Game"
              demoLink="https://the-saqlainnawaz.github.io/Tenzies_Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="This calculator supports basic arithmetic operations on operands such as addition, subtraction, multiplication, and division. It also supports decimal numbers and has a clear button to reset the calculator. A simple Calculator but beautiful GUI, provide all the basic operations. It is made with React.js."
              ghLink="https://github.com/The-SaqlainNawaz/Calculator"
              demoLink="https://the-saqlainnawaz.github.io/Calculator/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="Memory game is a game where players match pairs of cards that are arranged face down on a game board. Players flip two cards at a time and try to find a match. If the cards match, they are removed from the board, and if they don't, they are flipped back over. The game ends when all pairs of cards are matched."
              ghLink="https://github.com/The-SaqlainNawaz/memory_game"
              demoLink="https://github.com/The-SaqlainNawaz/memory_game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Airbnb}
              isBlog={false}
              title="Airbnb clone"
              description="The Airbnb Clone React is a front-end only project that demonstrates how React can be used to create a functional and attractive user interface for a web application. However, it does not include any backend functionality."
              ghLink="https://github.com/The-SaqlainNawaz/Airbnb-Clone-React"
              demoLink="https://github.com/The-SaqlainNawaz/Airbnb-Clone-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluespace}
              isBlog={false}
              title="BlueSpace"
              description="The social media website allows users to create an account, post text and image content, follow other users, and like and comment on posts. The website also includes features such as user authentication, password reset, and profile editing."
              ghLink="https://github.com/The-SaqlainNawaz/Social_Media_website"
              demoLink="https://github.com/The-SaqlainNawaz/Social_Media_website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
