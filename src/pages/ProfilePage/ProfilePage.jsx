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
import CustomTypography from "../../components/TypoGraphy/CustomTypography";

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
};

const pathnames = location.pathname.split("/").filter((x) => x);

const ProfileView = () => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1024px)");
  const isLaptop = useMediaQuery("(min-width:1025px)");
  return (
    <Box sx={{ width: "100%", mx: "auto", my: 4, p: 3, pl: 0 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={-9}
      >
        <Grid item xs={12} sm={8} sx={{ padding: { xs: 2, sm: 2, md: 0 } }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontFamily: "Montserrat" }}
          >
            View Profile
          </Typography>
          <Breadcrumbs separator="››" aria-label="breadcrumb">
            <CustomTypography color="#858040">Dashboard</CustomTypography>
            {pathnames.map((value, index) => (
              <CustomTypography key={index} color="#858040">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </CustomTypography>
            ))}
          </Breadcrumbs>
        </Grid>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#858040",
            "&:hover": { bgcolor: "#6E6B3D" },
            fontFamily: "Montserrat",
            marginRight: isTablet ? "0px" : isLaptop ? "-43px" : "0px",
            borderRadius: "20px",
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Grid container spacing={0} alignItems="flex-start">
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
              md: "flex-start",
            },
          }}
        >
          <Avatar
            src={profileData.profileImage}
            alt={profileData.name}
            variant="square"
            sx={{
              width: { xs: "100px", sm: "150px", md: "180px" },
              height: { xs: "100px", sm: "150px", md: "180px" },
              objectFit: "cover",
              borderRadius: 0,
            }}
          />
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} sm={8} md={9}>
          <Grid
            container
            spacing={2.5}
            sx={{ paddingLeft: { xs: "10px", sm: "30px", md: "0px" } }}
          >
            {/* Basic Details */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "Montserrat" }}
              >
                Basic Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{ fontFamily: "Montserrat" }}
              >
                Mobile No
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.mobile}
              </Typography>

              <Typography
                variant="subtitle2"
                color="#858040"
                mt={1}
                sx={{ fontFamily: "Montserrat" }}
              >
                Village Name
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.village}
              </Typography>
            </Grid>

            {/* Address Section */}
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "Montserrat" }}
              >
                Account Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                color="#858040"
                sx={{ fontFamily: "Montserrat" }}
              >
                IFSC Code
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {profileData.ifsc}
              </Typography>
            </Grid>

            {/* Members List */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
                sx={{ fontFamily: "Montserrat" }}
              >
                Members List
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={2}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                {profileData.members.map((member, index) => {
                  const nameParts = member.split(" ");
                  const initials =
                    nameParts.length > 1
                      ? `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`
                      : nameParts[0].charAt(0);

                  return (
                    <Stack key={index} alignItems="center" spacing={1}>
                      <Avatar
                        variant="square"
                        sx={{
                          bgcolor: "#5D5A36",
                          color: "#EAE8D3",
                          width: { xs: 30, sm: 35 },
                          height: { xs: 30, sm: 35 },
                          borderRadius: "5px",
                          padding: "3px",
                        }}
                      >
                        {initials.toUpperCase()}
                      </Avatar>
                      <Box
                        sx={{
                          textAlign: "center",
                          padding: "5px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: "#5D5A36",
                            lineHeight: 1.2,
                            fontFamily: "Montserrat",
                          }}
                        >
                          {nameParts[0]}
                        </Typography>
                        {nameParts[1] && (
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "bold",
                              color: "#5D5A36",
                              lineHeight: 1.2,
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
