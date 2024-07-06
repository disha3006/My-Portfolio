import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <Col size={12} sm={4} className="text-center text-sm-start">
            <MailchimpForm />
          </Col> */}
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} sm={4} className="text-center">
            <div className="contact-us">
              <p><b>Contact Me</b></p>
              <p><FontAwesomeIcon icon={faEnvelope} />  :  <a href="mailto:akshata.jedhe@gmail.com">akshata.jedhe@gmail.com</a></p>
              <p><FontAwesomeIcon icon={faPhone} />  :  <a href="tel:+62333405844">+62333405844</a></p>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akshata-jedhe-7ab5b11a4%20/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/akshataj28" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_akshiiii._/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
