import React from "react";
import { Table } from "react-bootstrap";

const Educationinfo = () => {
  return (
    <>
      <div class="card shadow-sm mb-4">
        <div class="card-header bg-transparent border-0">
          <h3 class="mb-0">
            <i class="far fa-clone pr-1"></i>Education Information
          </h3>
        </div>
        <div class="card-body pt-0">
          <Table striped borderless>
            <tbody>
              <tr>
                <th width="30%">HSC GPA</th>
                <td width="2%">:</td>
                <td>5.00</td>
              </tr>
              <tr>
                <th width="30%">HSC Year </th>
                <td width="2%">:</td>
                <td>2017</td>
              </tr>
              <tr>
                <th width="30%">College</th>
                <td width="2%">:</td>
                <td>Chittagong College</td>
              </tr>
              <tr>
                <th width="30%">SSC GPA</th>
                <td width="2%">:</td>
                <td>5.00</td>
              </tr>
              <tr>
                <th width="30%">SSC Year</th>
                <td width="2%">:</td>
                <td>2015</td>
              </tr>
              <tr>
                <th width="30%">School</th>
                <td width="2%">:</td>
                <td>Chittagong Collegiate School</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Educationinfo;
