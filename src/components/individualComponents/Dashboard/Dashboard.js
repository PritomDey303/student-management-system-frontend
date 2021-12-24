import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ContextProvider } from "../../../App";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import VerticalTabs from "./VerticalTabs/VerticalTabs";
const Dashboard = () => {
  const navigate = useNavigate();
  const [, LoggedInUser] = useContext(ContextProvider);
  console.log(!LoggedInUser.email);
  if (!LoggedInUser.email) {
    navigate("/");
  }
  return (
    <div>
      <Navigation />
      <VerticalTabs />
      <Footer />
    </div>
  );
};

export default Dashboard;
