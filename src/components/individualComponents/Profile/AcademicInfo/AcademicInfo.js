import React from "react";

const Academicinfo = () => {
  return (
    <>
      <div classname="card pb-2 shadow-lg">
        <div classname="card-header bg-transparent text-center">
          <img
            classname="profile_img"
            src="https://placeimg.com/640/480/arch/any"
            alt=""
          />
          <h3>Ishmam Ahasan Samin</h3>
        </div>
        <div classname="card-body mt-3">
          <p classname="mb-3">
            <strong classname="pr-1">Student ID:</strong>18701932
          </p>
          <p classname="mb-3">
            <strong classname="pr-1">Session:</strong>2017-18
          </p>
          <p classname="mb-3">
            <strong classname="pr-1">Current Semester:</strong>4th Semester
          </p>
          <p classname="mb-3">
            <strong classname="pr-1">Hall:</strong>Saheed Abdur Rab Hall
          </p>
        </div>
      </div>
    </>
  );
};

export default Academicinfo;
