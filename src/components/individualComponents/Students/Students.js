import React from "react";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import BackToTop from "../../utilityComponents/BackToTop/BackToTop";
import FilterBox from "../../utilityComponents/FilterBox/FilterBox";
import StudentsDrawer from "./StudentsDrawer/StudentsDrawer";

const Students = () => {
  return (
    <div>
      <Navigation />
      <FilterBox />
      <StudentsDrawer />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Students;
