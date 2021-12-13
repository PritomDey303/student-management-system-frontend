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
    <>
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </>
  );
};

export default Boxesloadercomponent;
