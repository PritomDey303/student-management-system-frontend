import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Students from "../../../../fakedata/students";
import ProfileCard from "../../../utilityComponents/ProfileCard/ProfileCard";
const StudentsDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>abc</ListItem>
      </List>
      <Divider />
    </Box>
  );

  //Dummy array

  const studentsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Container>
      <div>
        {["Filter"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      {/* StudentsCard display */}
      <Row>
        {Students.map((student) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
            <ProfileCard key={student.student_id} students={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentsDrawer;
