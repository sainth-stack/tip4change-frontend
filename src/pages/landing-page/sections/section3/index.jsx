import React from "react";
import "./style.css";

import ProfileIconCard from "../../../../component/Card";
import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <div className="Section3">
        {/* <div className="bg-img2"></div> */}
        <h1 className="chain">Supply hain Transparency</h1>
       
          <Typography className="believe">
            We believe in transparency and accountability throughout our supply
            chain. Meet the farmers and suppliers who work with us to produce
            our sustainable cotton T-shirts.
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
