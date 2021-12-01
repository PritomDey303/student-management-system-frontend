import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
const Profilecard = (props) => {
  const { name, studentId, session } = props.students;
  return (
    <div>
      <Card className="profile-card my-3 rounded">
        <div className="profile-img-wrapper mx-auto my-3">
          <Card.Img
            className="profile-img mx-auto "
            variant="top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Id: {studentId}</Card.Text>
          <Card.Text> Session:{session}</Card.Text>

          <Link to={`/profile/${studentId}`}>
            <div className="btn text-light bg-green profile-button rounded">
              View Details
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profilecard;
