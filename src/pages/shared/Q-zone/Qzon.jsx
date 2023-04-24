import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const Qzon = () => {
  return (
    <div className="text-center bg-light my-4 p-2">
      <h3>Q-zon</h3>
      <div>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default Qzon;
