import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { articles } from "./cardsData";

const ArticleCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 337,
        borderRadius: "20px",
        boxShadow: 3,
        height: "490px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" height="169.54px" image={image} alt={title} />
      <CardContent sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between", p: 0 }}>
        <Box sx={{ p: 2, flexGrow: 1 }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "600", color: "#0E0E0E", mt: 0 }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: "13px", color: "#0E0E0E" }}>
            {description}
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography sx={{ fontSize: "10.75px", color: "#0E0E0E" }}>2 hours ago</Typography>
            <Typography sx={{ ml: 5, fontSize: "10.75px", color: "#2A2A2A" }}>By Lucy Hiddleston | 4 min read</Typography>
          </Box>
        </Box>

        {/* Footer section with full-width border */}
        <Box
          sx={{
            width: "100%",
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            gap:"20px",
            pt: 1.5,
          }}
        >
          <Box display="flex" alignItems="center">
            <IconButton size="small" color="error">
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">2</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton size="small" color="default">
              <ShareIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">2</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton size="small" color="default">
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">2</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ArticleList = () => {
  return (
    <Box>
      <Typography sx={{fontWeight:"600",fontSize:"20px",fontFamily:"Montserrat",color:"#847F3B",marginLeft:{lg:"300px"}}}>Latest News</Typography>
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={3}>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </Box>
    </Box>
  );
};

export default ArticleList;
