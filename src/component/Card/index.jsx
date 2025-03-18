import React from "react";
import { Box, Typography, Divider, Card, Toolbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo2 from "../../assets/images/logo.png";

const ProfileIconCard = () => {
  return (
    <Card
      sx={{
        width: { xs: "340px", sm: "350px", md: "415px" }, // Full width on mobile, 420px on iPad, 370px on larger screens
        height: { xs: "300px", sm: "280px", md: "270px" }, // Auto height on mobile, slight increase for iPad
        borderRadius: "10px",
        background: "rgba(249, 249, 241, 0.1)",
        paddingLeft: { xs: "0px", sm: "-10px" }, // Adjust padding for different sizes
        margin: "15px auto", // Centering card
        border: "2px solid rgba(235, 234, 237, 1)",
        ml: { xs: 0, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%", // Default width
          maxWidth: "409px", // Maximum width constraint
          height: "70px",
          background: " rgba(249, 249, 241, 0.1)",
          borderRadius: 2,
          p: 1,
          marginLeft: "-10px",
          textAlign: "center",
          position: "relative",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "0 .3rem", sm: "0 .9rem" }, // Responsive padding
            fontWeight: "bold", // Increases font weight inside Toolbar
            fontSize: "18px", // Optional: Increase font size
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Logo Image */}
            <img
              src={logo2} // Replace with your logo path
              alt="Logo"
              style={{
                height: "40px",
                margin: "-.5rem 0 0 0",
                marginLeft: "61.41px",
                marginTop: "31.45px",
              }}
            />
          </Box>
        </Toolbar>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            mt: 2.5,
            fontWeight: "450",
            font: "Montserrat",
            // fontFamily: "Montserrat",
            size: "20px",
            lineHeight: "60px",
            fontColor: "black",
            ml: "-30px",
          }}
        >
          Suppliers Certificates
        </Typography>

        {/* Contact Section */}
        {/* <Divider sx={{ my: 4 }} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            background: " rgba(249, 249, 241, 0.1)",
            borderRadius: 0,
            // p: 1,
            margginBottom: "10px",
            mt: "0px",
            padding: "10px",

            paddingBottom: "10px",
            borderTop: "2px solid #E0E0E0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
            }}
          >
            <PhoneIcon sx={{ color: "#6D6D6D", mb: "11px", mt: "10px" }} />
            <Typography
              variant="body2"
              sx={{ color: "#6D6D6D", fontWeight: 500 }}
            >
              98555 22112
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              bgcolor: "#E0E0E0",
              height: "210px",
              border: "2px solid rgba(235, 234, 237, 1)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent:
              flex: 2,
              padding: "10px",
            }}
          >
            <EmailIcon
              sx={{
                color: "#6D6D6D",
                mb: { xs: "8px", sm: "10px", md: "8px" }, // Adjust bottom margin for spacing
                mt: { xs: "7px", sm: "5px", md: "-3px" }, // Adjust top margin
                fontSize: { xs: "20px", sm: "24px", md: "28px" }, // Smaller on mobile, larger on desktop
                marginLeft: { xs: "-55px", md: "-35px", sm: "-35px" },
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: "#6D6D6D",
                fontWeight: 500,
                textAlign: "center",
                fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Smaller on mobile, medium on iPad, larger on desktop
                width: { xs: "100%", sm: "80%", md: "auto" }, // Full width on mobile, 80% on iPad, auto on desktop
                paddingRight: { xs: "0px", sm: "8px", md: "10px" }, // Adjust padding for spacing
              }}
            >
              grameenavikas@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileIconCard;
