import React, { useState } from "react";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import BackToTop from "../../utilityComponents/BackToTop/BackToTop";
import FilterBox from "../../utilityComponents/FilterBox/FilterBox";
import StudentsDrawer from "./StudentsDrawer/StudentsDrawer";

const Students = () => {
  const [Students, setStudents] = useState([]);

  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Navigation />
      <FilterBox setStudents={setStudents} />
      <StudentsDrawer Students={Students} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Students;
