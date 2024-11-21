import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg1 from "../assets/img/disha-photo.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 50); // Faster typing speed
  const [index, setIndex] = useState(1);
  const toRotate = ["a Web Developer", "a Python Developer", "a UI/UX enthusiast"];
  const period = 1000; // Faster rotation period

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200 - Math.random() * 50); // Reset typing speed after deletion
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <img src={headerImg1} alt="Header Img"/>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={11}>
            <TrackVisibility>
            
              {({ isVisible }) =>
              
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h1>{`Hi! I'm Disha,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "a Web Developer",  "a Python Developer", "an UI enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I am a driven <span className="highlight-1"> Web Developer </span> with expertise in <span className="highlight-1">Java</span>, a knack for creating efficient and scalable web applications, and a strong foundation and interest in <span className="highlight-2">Front-end</span>. With a solid educational background and hands-on experience in both <span className="highlight-3">Development and Electronics</span>, I am committed to leveraging technology to <span className="highlight-3">solve complex problems</span>.
                  </p>                  <div className="highlight-container">
                    <button className="connect-button">
                    <a href="#connect"> Let’s Connect <ArrowRightCircle size={25} /></a>
                    </button>
                  
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
