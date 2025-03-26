import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  CardMedia,
  Container,
} from "@mui/material";

const SustainabilityCard = () => {
  return (
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on larger screens
          width: "100%",
          boxShadow: 1,
          gap: "20px",
          margin: "14px",
        }}
      >
        {/* Left Side: Image */}
        <CardMedia
          component="img"
          image="/src/assets/images/news.png"
          alt="Shopping Sustainability"
          sx={{
            width: { xs: "100%", md: "45%" },
            height: { xs: 200, md: "auto" },
            objectFit: "cover",
          }}
        />

        {/* Right Side: Content */}
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: { xs: 2, md: 3 },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-10px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(132, 127, 59, 1)",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "18px",
                letterSpacing: "2%",
              }}
            >
              Trending
            </Typography>
            {/* Icons */}
            <Box>
              <IconButton size="small">
                <img
                  sx={{ border: "1.5px solid rgba(14, 14, 14, 1)" }}
                  src="/src/assets/images/news3.png" // Ensure the image path is correct
                  alt="Custom Icon"
                  style={{ width: 20, height: 20 }} // Adjust size as needed
                />
              </IconButton>
              <IconButton size="small">
                <img
                  sx={{ border: "1.5px solid rgba(14, 14, 14, 1)" }}
                  src="/src/assets/images/news4.png" // Ensure the image path is correct
                  alt="Custom Icon"
                  style={{ width: 20, height: 20 }} // Adjust size as needed
                />
              </IconButton>

              <IconButton size="small">
                <img
                  sx={{ border: "1.5px solid rgba(14, 14, 14, 1)" }}
                  src="/src/assets/images/news2.png" // Ensure the image path is correct
                  alt="Custom Icon"
                  style={{ width: 20, height: 25, marginTop: "-3px" }} // Adjust size as needed
                />
              </IconButton>
            </Box>
          </div>
          <Typography
            variant="h6"
            fontWeight="600"
            fontSize="25px"
            marginTop="10px"
          >
            Rising Consumer Demand for Sustainability
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 1,
              fontWeight: "400p",
              fontSize: "14.07px",
              lineHeight: "167%",
            }}
          >
            Consumers are increasingly choosing eco-friendly products, ethical
            sourcing, and transparent supply chains. Surveys indicate that
            buyers prefer brands with clear sustainability goals, leading
            businesses to adopt responsible sourcing, fair trade practices, and
            digital traceability solutions.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Spacing around items
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography
              variant="caption"
              fontWeight="600"
              fontSize="11.56px"
              lineHeight="165%"
            >
              2 hours ago
            </Typography>
            {/* <Typography variant="caption" color="text.secondary">
              |
            </Typography> */}
            <div>
              <Typography variant="caption" color="text.secondary" margin="5px">
                By Lucy Hiddleston
              </Typography>
              <Typography variant="caption" color="text.secondary">
                |
              </Typography>
              <Typography variant="caption" color="text.secondary" margin="5px">
                4 min read
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
  );
};

export default SustainabilityCard;
