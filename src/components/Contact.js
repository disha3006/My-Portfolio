import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Simulating form submission locally
    // Replace this with actual server endpoint if needed
    try {
      // Simulating server response delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulating server response
      const mockResponse = { code: 200 }; // Simulating success

      // Handle response (mocking as if it's coming from the server)
      if (mockResponse.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
        alert("Message sent successfully")
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
        alert("Something went wrong, please try again later.")
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    }

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </Col>

              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </Col>
              <Col size={12} className="px-2">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  className="form-control messageinput" // Bootstrap class 'form-control' and custom class 'messageinput'
                  style={{ width: "1240px" }} // Set the width as needed
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              
              {/* {status.message && (
                <Col style={{ marginTop:"30px" }}>
                  <p
                    className={
                      status.success === false ? "danger" : "success"
                    }
                  >
                    {status.message}
                    
                  </p>
                </Col>
              )} */}
            </Row>
          </form>
        </Row>
      </Container>
    </section>
  );
};
