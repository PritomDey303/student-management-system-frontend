import React from "react";
import { BoxesLoader } from "react-awesome-loaders";
import "./BoxLoader.css";
const Boxloader = () => {
  return (
    <div className="box-loader-container">
      <BoxesLoader
        className="box-loader"
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};

export default Boxloader;
