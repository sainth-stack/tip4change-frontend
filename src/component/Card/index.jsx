import React from "react";
import { Box, Typography, Divider, Card, Toolbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo2 from "../../assets/images/logo.png";

const ProfileIconCard = () => {
  return (
    <Card
      style={{
        width: "370px",
        height: "270px",
        borderradius: "10px",
        borderwidth: "2px",
        background: " rgba(249, 249, 241, 0.1)",
        paddingLeft: "-10px",
        margin: "20px",
        border: "2px solid rgba(235, 234, 237, 1)",
      }}
    >
      <Box
        sx={{
          width: "409px",
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
        {/* Logo and Title */}
        {/* <div
          // style={{
          //   height: "40px",
          //   margin: "-.5rem 0 0 0",
          //   boxShadow: "1px 0px 0px gray",
          //   marginLeft: "1.5rem",
          // }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="src/assets/images/section3Profile .png"
            alt="Grameena Vikas Kendram"
            style={{ width: 56, height: 56 }}
          />
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "100%",
              letterSpacing: "0.3em", // 30% converted to em
              textTransform: "uppercase",
            }}
          >
            GRAMEENA
          </Typography>
          <Typography
            variant="body2"
            letterSpacing="0.2em"
            sx={{ color: "#6D6D6D" }}
          >
            VIKAS KENDRAM
          </Typography>
          <img
            style={{ width: "70px", marginLeft: "70px" }}
            src="src/assets/images/section3color.png"
          />
        </div> */}
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
                marginLeft: "82.41px",
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
              mt: "-10px",
              ml: "30px",
              border: "2px solid rgba(235, 234, 237, 1)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 2,
              padding: "10px",
            }}
          >
            <EmailIcon
              sx={{
                color: "#6D6D6D",
                mb: "10px",
                mt: "-0px",
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: "#6D6D6D", fontWeight: 500 }}
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
