import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import img1 from "../assets/img/javascript.png";
import img2 from "../assets/img/html.png";
import img3 from "../assets/img/css.png";
import img4 from "../assets/img/react.png";
import img5 from "../assets/img/angular.png";
import img6 from "../assets/img/python.png";
import img7 from "../assets/img/android.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                      <br></br>
                      <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Front-end Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data science</h5>
                            </div>
                        </Carousel>
                        <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                        <h2>Tech Stack</h2>
                        <br></br>
                      <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                       
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item2">
                                <img src={img5} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={img6} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={img7} alt="Image" />
                                <h5>Android Studio</h5>
                            </div>
                        </Carousel>
                      
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
