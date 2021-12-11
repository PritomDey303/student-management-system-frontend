import React from "react";

const Academicinfo = () => {
  return (
    <>
      <div class="card pb-2 shadow-lg">
        <div class="card-header bg-transparent text-center">
          <img
            class="profile_img"
            src="https://placeimg.com/640/480/arch/any"
            alt=""
          />
          <h3>Ishmam Ahasan Samin</h3>
        </div>
        <div class="card-body mt-3">
          <p class="mb-3">
            <strong class="pr-1">Student ID:</strong>18701932
          </p>
          <p class="mb-3">
            <strong class="pr-1">Session:</strong>2017-18
          </p>
          <p class="mb-3">
            <strong class="pr-1">Current Semester:</strong>4th Semester
          </p>
          <p class="mb-3">
            <strong class="pr-1">Hall:</strong>Saheed Abdur Rab Hall
          </p>
        </div>
      </div>
    </>
  );
};

export default Academicinfo;
