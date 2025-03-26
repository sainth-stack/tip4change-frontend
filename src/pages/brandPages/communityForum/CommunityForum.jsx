import React from 'react';
import { Box } from '@mui/material';
import PostCard from './forum';
import Leaderboard from './leaderboard/leaderboard.jsx';

const CommunityForum = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '50px',  // Ensure spacing between components
        width: '100%',  // Ensure full width
        justifyContent: 'space-between',  // Ensure both components are properly spaced
        alignItems: 'flex-start',  // Align items properly
      }}
    >
      <Box sx={{ flex: 1, maxWidth: "calc(100% - 350px)" }}> 
        {/* PostCard takes remaining space except for Leaderboard width */}
        <PostCard />
      </Box>

      <Box sx={{ width: "300px", minWidth: "300px" }}> 
        {/* Leaderboard takes a fixed width */}
        <Leaderboard />
      </Box>
    </Box>
  );
};

export default CommunityForum;
