import React from "react";
import Scan from "../components/Scanner";
import Navbar from "../components/Navbar";

const Qrscan = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <Scan />
      </body>
    </div>
  );
};
export default Qrscan;
