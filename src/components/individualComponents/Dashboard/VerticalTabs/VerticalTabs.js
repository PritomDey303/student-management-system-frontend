import React, { useContext } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { ContextProvider } from "../../../../App";
import AdminRequest from "../AdminRequest/AdminRequest";
import Dashboardwelcome from "../DashboardWelcome/DashboardWelcome";
import Studentrequest from "../StudentRequest/StudentRequest";
import Updateeducationinfo from "../UpdateEducationInfo/UpdateEducationInfo";
import Updatepersonalinfo from "../UpdatePersonalInfo/UpdatePersonalInfo";
import Updateprofilepicture from "../UpdateProfilePicture/UpdateProfilePicture";
import Updateresult from "../UpdateResult/UpdateResult";
import "./VerticalTabs.css";
const Verticaltabs = () => {
  const [, LoggedInUser] = useContext(ContextProvider);
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Dashboard">
        <Row>
          <Col sm={3}>
            {LoggedInUser.role === 2 && (
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Dashboard">Dashboard</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="UpdateProfilePicture">
                    Update Profile Picture
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="UpdatePersonalInfo">
                    Update Personal Info
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="UpdateEducationInfo">
                    Update Education Info
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            )}
            {LoggedInUser.role === 1 && (
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Dashboard">Dashboard</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="StudentSignUpRequests">
                    Student SignUp Requests
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="AdminSignUpRequests">
                    Admin SignUp Requests
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="UpdateResults">Update Results</Nav.Link>
                </Nav.Item>
              </Nav>
            )}
          </Col>
          <Col sm={9}>
            {LoggedInUser.role === 2 && (
              <Tab.Content>
                <Tab.Pane eventKey="Dashboard">
                  <Dashboardwelcome />
                </Tab.Pane>
                <Tab.Pane eventKey="UpdateProfilePicture">
                  <Updateprofilepicture />
                </Tab.Pane>
                <Tab.Pane eventKey="UpdatePersonalInfo">
                  <Updatepersonalinfo />
                </Tab.Pane>
                <Tab.Pane eventKey="UpdateEducationInfo">
                  <Updateeducationinfo />
                </Tab.Pane>
              </Tab.Content>
            )}
            {LoggedInUser.role === 1 && (
              <Tab.Content>
                <Tab.Pane eventKey="Dashboard">
                  <Dashboardwelcome />
                </Tab.Pane>
                <Tab.Pane eventKey="UpdateProfilePicture"></Tab.Pane>
                <Tab.Pane eventKey="StudentSignUpRequests">
                  <Studentrequest />
                </Tab.Pane>
                <Tab.Pane eventKey="AdminSignUpRequests">
                  <AdminRequest />
                </Tab.Pane>

                <Tab.Pane eventKey="UpdateResults">
                  <Updateresult />
                </Tab.Pane>
              </Tab.Content>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Verticaltabs;
