import React from "react";
import { Box, Grid2 } from "@mui/material";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section1 from "./section1";

const SocialPassport = () => {
  return (
    <Grid2 direction="column" spacing={2}>
      <Grid2 item>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}> 
          <Section1 />
          <Section2 />
          <Section3 />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default SocialPassport;
