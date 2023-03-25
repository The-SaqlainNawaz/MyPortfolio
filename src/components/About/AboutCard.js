import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saqlain Nawaz </span>
            from <span className="purple"> Sargodha, Pakistan.</span>
            <br />I am a student of Computer Science(currentl BSCS) at
            University of Engineering and Technology, Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Chess, RPG, FPS, etc.)
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to explore new things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It’s not a bug; it’s an undocumented feature"{" "}
          </p>
          <footer className="blockquote-footer"> Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
