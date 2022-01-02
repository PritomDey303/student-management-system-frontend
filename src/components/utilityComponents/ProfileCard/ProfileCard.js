import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blankPicture from "../../../images/blank-profile-picture.png";
import "./ProfileCard.css";
const Profilecard = (props) => {
  console.log(props.students);
  const { name, student_id, session, profile_picture } = props.students;

  return (
    <div>
      <Card className="profile-card my-3 ">
        <div className="profile-img-wrapper mx-auto my-3">
          <Card.Img
            className="profile-img mx-auto "
            variant="top"
            src={profile_picture ? profile_picture : blankPicture}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Id: {student_id}</Card.Text>
          <Card.Text> Session:{session}</Card.Text>

          <Link to={`/profile/${student_id}`}>
            <div className="btn btn-outline-success profile-button ">
              View Details
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profilecard;
