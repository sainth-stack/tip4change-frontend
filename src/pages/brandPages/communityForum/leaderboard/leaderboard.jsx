import React from "react";
import { Box, Card, Typography, Avatar } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { leaderboardData } from "./leaderboardData";
import profileImage from "../../../../assets/svg/leaderboardprofile.svg"; // Replace with your local image

const Leaderboard = () => {
  return (
    <Box
      sx={{
        width: "289px",
        height: "820px",
        borderRadius: "10px",
        backgroundColor: "#847F3B",
        padding: "16px",
      }}
    >
      <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>Leaderboard</Typography>
      
      {/* Top User Card */}
      <Card
        sx={{
          width: "258px",
          height: "378px",
          borderRadius: "10px",
          backgroundColor: "#A89F5D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
          gap: "25px",
          marginTop: "16px",
        }}
      >
        <Avatar src={profileImage} sx={{ width: 80, height: 80, border: "3px solid #FFD700" }} />
        <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Farina Del</Typography>
        <Typography sx={{ color: "#ddd", fontSize: "14px" }}>Jaipur, Rajasthan</Typography>
        
        {/* Stats Section */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#8C8441",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <AccountTreeIcon sx={{ color: "#FFD700" }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>345 Referrals</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#8C8441",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <EmojiEventsIcon sx={{ color: "#FFD700" }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>₹200 Rewards</Typography>
          </Box>
        </Box>
      </Card>
      
      {/* Ranking List */}
      <Box sx={{ width: "100%", height: "344px", gap: "20px", marginTop: "20px" }}>
        {leaderboardData.map((user, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: index === 2 ? "#FFF3C2" : "#fff",
              padding: "12px",
              marginBottom: "8px",
              borderRadius: "10px",
              boxShadow: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>{user.name}</Typography>
              <Typography sx={{ fontSize: "12px", color: "#777" }}>{user.referrals} Referrals</Typography>
            </Box>
            <Typography sx={{ fontWeight: "bold", color: "#A89F5D", fontSize: "18px" }}>{user.rank}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Leaderboard;
