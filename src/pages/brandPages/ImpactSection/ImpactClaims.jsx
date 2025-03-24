import React from "react";
import { Box, Grid2 } from "@mui/material";
import Section2 from "./Section2";
import Section3 from './section3/section3'


import StatesCard from "../../landing-page/sections/section5/CardData";
import Section1 from "./section1";

const ImpactClaims = () => {
  return (
    <Grid2 direction="column" spacing={2}>
      <Grid2 item>
        <Box>
          <Section1 />
          <Section2 />
          <Section3 />
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default ImpactClaims;
