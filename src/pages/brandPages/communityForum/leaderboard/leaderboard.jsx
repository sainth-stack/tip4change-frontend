import React from "react";
import { Box, Card, Typography, Avatar } from "@mui/material";
import { leaderboardData } from "./leaderboardData";
import profileImage from "../../../../assets/svg/leaderboardprofile.svg"; // Replace with your local image
import img1 from '../../../../assets/svg/leaderboardci1.svg'
import img2 from '../../../../assets/svg/leaderboardci2.svg'
import crone from '../../../../assets/svg/crone.svg'

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
      <Typography sx={{ color: "#FFFFFFB2", fontSize: "20px", fontWeight: "500",fontFamily:"Montserrat" }}>Leaderboard</Typography>
      
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
          marginTop: "16px",
        }}
      >
        <Box component="img" src={crone} sx={{ mb: "-5px" }} alt="crone" />

        <Avatar src={profileImage} sx={{ width: 64, height: 64, }} />
        <Typography sx={{ color: "#FFFFFFB2", fontWeight: "600",fontSize:"16px",fontFamily:"Montserrat" }}>Farina Del</Typography>
        <Typography sx={{ color: "#FFFFFFB2", fontSize: "14px" ,fontFamily:"Inter",fontWeight:"400"}}>Jaipur, Rajasthan</Typography>
        
        {/* Stats Section */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" ,margin:"10px"}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#8C8441",
              padding: "10px",
              borderRadius: "30px",
              marginTop:"50px"
            }}
          >
            <img src={img1} sx={{ color: "#FFD700" }} />
            <Typography sx={{ color: "#FFFFFFB2", fontWeight: "400", fontSize:"14px,"}}><span style={{fontWeight:"600",fontFamily:"Montserrat",fontSize:"20px",xolor:"#FFFFFF"}}>345</span> Referrals</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#8C8441",
              padding: "10px",
              borderRadius: "30px",
            }}
          >
            <img src={img2} sx={{ color: "#FFD700" }} />
            <Typography sx={{ color: "#FFFFFFB2", fontWeight: "400", fontSize:"14px,"}}><span style={{fontWeight:"600",fontFamily:"Montserrat",fontSize:"20px",xolor:"#FFFFFF",}}>₹200</span>Rewards</Typography>
          </Box>
        </Box>
      </Card>
      
      {/* Ranking List */}
      <Box sx={{ width: "100%", height: "344px", gap: "20px", marginTop: "40px" }}>
        {leaderboardData.map((user, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor: index === 2 ? "#FFF3C2" : "#fff",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: 2,
              
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "500",fontFamily:"Montserrat",fontSize:"14px",color:"#000000" }}>{user.name}</Typography>
              <Typography sx={{ fontSize: "14px", color: "#B7B7B7",fontFamily:"Montserrat",fontWeight:"400" }}>{user.referrals} Referrals</Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", color: "#A89F5D", fontSize: "24px" ,fontFamily:"Montserrat"}}>{user.rank}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Leaderboard;
