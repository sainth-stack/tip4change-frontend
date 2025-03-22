import React from "react";
import { Box, Grid2 } from "@mui/material";
import Section2 from './Section2/index';

const SupplyChain = () => {
  return (
    <Grid2 direction="column" spacing={2}>
      <Grid2 item>
        <Box>
          <Section2 />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default SupplyChain;
