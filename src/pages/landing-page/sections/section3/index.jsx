import React from "react";
import "./style.css";

import ProfileIconCard from "../../../../component/Card";
import { Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <div className="Section3">
        <div className="bg-img2"></div>
        <h1 className="chain">Supply Chain Transparency</h1>
        <Typography>
          <p className="believe">
            We believe in transparency and accountability throughout our supply
            chain.
            <br /> Meet the farmers and suppliers who work with us to produce{" "}
            <br />
            our sustainable cotton T-shirts.
          </p>
        </Typography>
        <div className="SectionProfile">
          <ProfileIconCard />
          <ProfileIconCard />
          <ProfileIconCard />
        </div>
      </div>
    </>
  );
};

export default index;
