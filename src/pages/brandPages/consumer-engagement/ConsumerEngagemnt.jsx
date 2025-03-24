

import React from 'react'
import Section1 from './section1';
import { Box, Grid2 } from '@mui/material';
import Table2 from './table/table'

const ConsumerEngagemnt = () => {
  return (
    
      <Grid2 direction="column" spacing={2}>
        <Grid2 item>
          <Box>
            <Section1 />
            <Table2 />
           
          </Box>
        </Grid2>
      </Grid2>
    
  );
}

export default ConsumerEngagemnt