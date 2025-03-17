import React from 'react'
import CardWidget from '../../../components/Card/CardWidget'
import { Typography } from '@mui/material';

const ImpactClaims = () => {
  return (
    <CardWidget
      sx={{
        backgroundColor: "#FFFFFF",
        
      }}
    >

      <Typography variant="h6">This is a Card Widget</Typography>
      <Typography variant="body2">Using MUI & `sx` prop</Typography>
    </CardWidget>
  );
}

export default ImpactClaims