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
        flexBasis: { xs: "100%", sm: "calc(100% / 2 - 24px)", md: "calc(100% / 3 - 24px)" },
        borderRadius: "20px",
        boxShadow: 3,
        height: "530px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" image={image} alt={title} sx={{objectFit:"fill",width:"100%",height:"200px"}} />
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
    <Box sx={{ width: "100%" }} mt={4}>
      <Typography sx={{ fontWeight: "600", fontSize: "20px", fontFamily: "Montserrat", color: "#847F3B",textAlign:"left"  }} ml={2}>Latest News</Typography>
      <Box 
        display="grid" 
        gridTemplateColumns={"auto auto auto"} 
        gap={"35px"}
        flexWrap="wrap" 
        mt={2}
        mb={3} 
        sx={{ 
          justifyContent: "center",
        }}
      >
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article}  />
        ))}
      </Box>
    </Box>
  );
};

export default ArticleList;
