// import { BoxesLoader } from "react-awesome-loaders";
// export default  BoxesLoaderComponent = () => {
//   return (
//
//   );
// };

import React from "react";
import { BoxesLoader } from "react-awesome-loaders";

const Boxesloadercomponent = () => {
  return (
    <div className="box-loader">
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};

export default Boxesloadercomponent;
