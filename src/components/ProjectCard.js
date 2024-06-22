import { Col } from "react-bootstrap";

export const ProjectCard = ({ about,title, description, date, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <h5 className="top_heading">{about}</h5>
      <div className="proj-imgbx">
        <div className="proj-title-top">
        </div>
        <img src={imgUrl} style={{ width: "415px", height:"250px" }}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>{date}</span>
        </div>
      </div>
    </Col>
  );
};
