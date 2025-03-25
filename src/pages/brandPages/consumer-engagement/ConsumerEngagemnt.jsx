

import React from 'react'
import Section1 from './section1';
import { Box, Grid2 } from '@mui/material';
import Table2 from './table/table'
import {DoughnutChartComponent1} from './sectio2/chat/'
import DiscussionCard from './sectio2/discussionForums/forums'

const ConsumerEngagemnt = () => {
  return (
    
      <Grid2 direction="column" spacing={2}>
        <Grid2 item>
          <Box>
            <Section1 />
            <div style={{display:"flex",gap:"30px",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
            <DoughnutChartComponent1 />
            <DiscussionCard />
            </div>
            <Table2 />
           
          </Box>
        </Grid2>
      </Grid2>
    
  );
}

export default ConsumerEngagemnt