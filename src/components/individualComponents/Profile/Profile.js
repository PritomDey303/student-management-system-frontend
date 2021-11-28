import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <Navigation />
      <div class="student-profile py-4">
        <div class="container">
          <Row>
            <Col lg={4}>
              <div class="card shadow-sm">
                <div class="card-header bg-transparent text-center">
                  <img
                    class="profile_img"
                    src="https://placeimg.com/640/480/arch/any"
                    alt=""
                  />
                  <h3>Ishmam Ahasan Samin</h3>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    <strong class="pr-1">Student ID:</strong>321000001
                  </p>
                  <p class="mb-0">
                    <strong class="pr-1">Class:</strong>4
                  </p>
                  <p class="mb-0">
                    <strong class="pr-1">Section:</strong>A
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div class="card shadow-sm">
                <div class="card-header bg-transparent border-0">
                  <h3 class="mb-0">
                    <i class="far fa-clone pr-1"></i>General Information
                  </h3>
                </div>
                <div class="card-body pt-0">
                  <Table striped borderless>
                    <tbody>
                      <tr>
                        <th width="30%">Roll</th>
                        <td width="2%">:</td>
                        <td>125</td>
                      </tr>
                      <tr>
                        <th width="30%">Academic Year </th>
                        <td width="2%">:</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <th width="30%">Gender</th>
                        <td width="2%">:</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th width="30%">Religion</th>
                        <td width="2%">:</td>
                        <td>Group</td>
                      </tr>
                      <tr>
                        <th width="30%">blood</th>
                        <td width="2%">:</td>
                        <td>B+</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
