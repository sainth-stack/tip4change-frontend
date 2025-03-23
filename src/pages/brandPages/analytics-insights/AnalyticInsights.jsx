import React from "react";
import { Box, Grid2 } from "@mui/material";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Table1 from './table/table'

const AnaliticalInsights = () => {
  return (
    <Grid2 direction="column" spacing={2}>
      <Grid2 item>
        <Box>
          <Section2 />
          <Section3 />
          <Table1 />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default AnaliticalInsights;
