import React from "react";
import blankPicture from "../../../../images/blank-profile-picture.png";
const Academicinfo = (props) => {
  const {
    student_id,
    name,
    hall_name,
    session,
    semester_name,
    profile_picture,
  } = props.academicInfo;
  console.log(props.academicInfo);
  return (
    <>
      <div
        className="card text-center   shadow-lg  p-2 shadow-lg"
        style={{ borderRadius: "10px" }}
      >
        <div className="card-header bg-transparent border-none  text-center">
          <img
            className="profile_img d-block mx-auto rounded-circle mb-2"
            src={profile_picture !== "N/A" ? profile_picture : blankPicture}
            alt="profile_picture"
            width={150}
            height={150}
            style={{ border: "8px solid #0B4619" }}
          />
          <h3 className="text-center text-green">{name}</h3>
        </div>
        <div className="card-body  mt-3" style={{ textAlign: "center" }}>
          <p className="mb-3 ">
            <strong className="text-center ">Student ID: </strong>
            {student_id}
          </p>
          <p className="mb-3">
            <strong className="pr-1">Session: </strong>
            {session}
          </p>
          <p className="mb-3">
            <strong className="pr-1">Current Semester: </strong>
            {semester_name}
          </p>
          <p className="mb-3">
            <strong className="pr-1">Hall: </strong>
            {hall_name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Academicinfo;
