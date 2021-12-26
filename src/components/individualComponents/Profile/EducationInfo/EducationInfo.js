import React from "react";
import { Table } from "react-bootstrap";

const Educationinfo = (props) => {
  const { hsc_year, hsc_gpa, college, ssc_year, ssc_gpa, school } =
    props.educationInfo;
  return (
    <>
      <div className="card p-3 shadow-lg mb-4">
        <div className="card-header bg-transparent border-0">
          <h3 className="mb-2 text-success">
            <i className="far fa-clone pr-1 "></i>Education Information
          </h3>
        </div>
        <div className="card-body pt-0">
          <Table striped borderless>
            <tbody>
              <tr>
                <th width="30%">HSC GPA</th>
                <td width="2%">:</td>
                <td>{hsc_gpa}</td>
              </tr>
              <tr>
                <th width="30%">HSC Year </th>
                <td width="2%">:</td>
                <td>{hsc_year}</td>
              </tr>
              <tr>
                <th width="30%">College</th>
                <td width="2%">:</td>
                <td>{college}</td>
              </tr>
              <tr>
                <th width="30%">SSC GPA</th>
                <td width="2%">:</td>
                <td>{ssc_gpa}</td>
              </tr>
              <tr>
                <th width="30%">SSC Year</th>
                <td width="2%">:</td>
                <td>{ssc_year}</td>
              </tr>
              <tr>
                <th width="30%">School</th>
                <td width="2%">:</td>
                <td>{school}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Educationinfo;
