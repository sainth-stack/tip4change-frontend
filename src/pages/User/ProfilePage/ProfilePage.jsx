import React from "react";
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
  Breadcrumbs,
  Stack,
  useMediaQuery,
} from "@mui/material";
import NavigationHeader from "../../../layout/NavigationHeader";
const profileData = {
  name: "Jacob",
  email: "jacob2915@gmail.com",
  mobile: "+91 9342630063",
  village: "K.K. Nagar (West)",
  address:
    "No. 1, New Bangaru Naidu Colony, K.K. Nagar (West), Chennai - 600078.",
  accountNo: "6223561005",
  ifsc: "IDW000100609",
  members: [
    "Surya Prakash",
    "Jayesh Kumar",
    "Banu Rekha",
    "Sanjeev Surya",
    "Divya Bharathi",
    "Abhay Vishal",
    "Durga Devi",
    "Akshay Kumar",
    "Hari Prasath",
    "Surya Prakash",
  ],
  profileImage: "src/assets/images/profileImage.png",
  img:"src/assets/images/profileimggirl.png"
};

const pathnames = location.pathname.split("/").filter((x) => x);

const ProfileView = () => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1024px)");
  const isLaptop = useMediaQuery("(min-width:1025px)");
  return (
    <Box sx={{ width: "100%", mx: "auto", my: 4, pt: 2 }}>
      {/* Header Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }} // Column on mobile, row on larger screens
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={-7}
        // marginRight={"51px"}
      >
        {/* Navigation Header */}
        <Box
          sx={{
            ml: { xs: "", sm: "", md: "", lg: "" },
            textAlign: { xs: "center", sm: "left" }, // Center align on mobile
            mb: { xs: 2, sm: 0 }, // Adds bottom margin on mobile for spacing
          }}
        >
          <NavigationHeader path={pathnames} PageText="Profile Image" />
        </Box>

        {/* Edit Profile Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#858040",
            "&:hover": { backgroundColor: "#6e6b3d" },
            fontFamily: "Montserrat",
            borderRadius: "20px",
            marginRight: { xs: "280px", sm: "50px", md: "80px" }, // Adjusts margin based on screen size
            textTransform: "uppercase", // Corrected to camelCase
            width: { xs: "150px", sm: "auto" }, // Full width on mobile, auto on larger screens
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Grid container spacing={0} alignItems="flex-start" sx={{paddingLeft:"50px"}}>
        {/* Profile Image */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              sm: "center",
              md: "center",
            },
          }}
        >
          <Avatar
            src={profileData.img}
            alt={profileData.name}
            variant="square"
            sx={{
              width: { xs: "250px", sm: "150px", md: "190px" },
              height: { xs: "200px", sm: "150px", md: "190px" },
              objectFit: "cover",
              borderRadius: 0,
              marginLeft: { xs: "-180px" },
            }}
          />
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} sm={8} md={9}>
          <Grid
            container
            ml="-120px"
            spacing={2.5}
            sx={{ paddingLeft: { xs: "10px", sm: "30px", md: "0px" } }}
          >
            {/* Basic Details */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="500"
                fontSize={"20px"}
                fontStyle={"Montserrat"}
                sx={{ fontFamily: "Work Sans" }}
              >
                Basic Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} fontWeight={500}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{ fontFamily: "Montserrat" }}
              >
                Cluster Name
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.name}
              </Typography>

              <Typography
                variant="subtitle2"
                color="#858040"
                mt={2}
                sx={{ fontFamily: "Montserrat" }}
              >
                Email ID
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.email}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} fontWeight={500}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                Mobile No
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                {profileData.mobile}
              </Typography>

              <Typography
                variant="subtitle2"
                color="#858040"
                mt={1}
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                Village Name
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                {profileData.village}
              </Typography>
            </Grid>

            {/* Address Section */}
            <Grid item xs={12} fontWeight={500}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{ fontFamily: "Montserrat" }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  maxWidth: { xs: "100%", sm: "250px" },
                }}
              >
                {profileData.address}
              </Typography>
            </Grid>

            {/* Account Details */}
            <Grid item xs={12} fontWeight={500}>
              <Typography
                variant="h6"
                fontWeight="500"
                fontSize={"20px"}
                fontStyle={"Montserrat"}
                sx={{ fontFamily: "Montserrat" }}
              >
                Account Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} fontWeight={500}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{ fontFamily: "Montserrat" }}
              >
                Account No
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.accountNo}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} fontWeight={500}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                IFSC Code
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  ml: { xs: "00px", sm: "50px" },
                }}
              >
                {profileData.ifsc}
              </Typography>
            </Grid>

            {/* Members List */}
            <Grid item xs={12} fontWeight={500}>
              <Typography
                variant="h6"
                fontWeight="500"
                fontSize={"20px"}
                fontStyle={"Montserrat"}
                mb={2}
                sx={{ fontFamily: "Montserrat" }}
              >
                Members List
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={2}
                fontWeight={500}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                {profileData.members.map((member, index) => {
                  const nameParts = member.split(" ");
                  const initials =
                    nameParts.length > 1
                      ? `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`
                      : nameParts[0].charAt(0);

                  return (
                    <Stack key={index} alignItems="start" spacing={1.2}>
                      <Avatar
                        variant="square"
                        sx={{
                          bgcolor: "#D5D3B3",
                          color: "#212121",
                          width: { xs: 35, sm: 35 },
                          height: { xs: 35, sm: 35 },
                          borderRadius: "10px",
                          fontSize: "12px",
                          marginLeft: "7px !important",
                          fontWeight: 400,
                        }}
                      >
                        {initials.toUpperCase()}
                      </Avatar>
                      <Box
                        sx={{
                          textAlign: "center",
                          paddingRight: "32px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "400",
                            fontSize: "12px",
                            letterSpacing: "0.15px",
                            color: "#5D5A36",
                            lineHeight: 1.1,
                            fontFamily: "Montserrat",
                          }}
                        >
                          {nameParts[0]}
                        </Typography>
                        {nameParts[1] && (
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              letterSpacing: "0.15px",
                              color: "#5D5A36",
                              lineHeight: 1.1,
                              fontFamily: "Montserrat",
                            }}
                          >
                            {nameParts[1]}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileView;
