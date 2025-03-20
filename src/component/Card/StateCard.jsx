import { Box, Typography } from "@mui/material";

const StatCard = ({ title, percentage, icon, description, highlight }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "30px",
        boxShadow: "6px 6px 54px 0px rgba(0, 0, 0, 0.05)", // Fixed `boxshadow` typo
        background: "rgba(255, 255, 255, 1)", // Ensured consistency
        // border: "1px solid white",
        padding: "16px",
        minWidth: "200px",
        width: "100%",
        maxWidth: "262px",
        height: "160px",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <dvi
        style={{
          width: "230px",
          height: "110px",
          marginTop: "20px",
          marginLeft: "16px",
          gap: "15px",
        }}
      >
        {/* Title, Percentage & Icon in a row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%", // Ensures proper spacing
          }}
        >
          {/* Title & Percentage */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              fontWeight="400"
              fontStyle="Monserrat"
              size="16px"
              lineHeight="100%"
              letterSpacing="1px"
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              marginTop="15px"
              fontStyle="Montserrat"
              size="20px"
              letterSpacing="1px"
              lineHeight="100%"
            >
              {percentage}%
            </Typography>
          </Box>

          {/* Icon */}
          <Box
            sx={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              opacity: "90%",
              mt: "-17px",
              alignItems: "",
              justifyContent: "",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontWeight: "500",
            fontStyle: "Montserrat",
            fontSize: "15px",
            lineHeight: "1.5",
            marginTop: "30px",
            lineHeight: "100%",
            width: "220px",
            display: "flex",
            gap: "10px",
          }}
        >
          <strong style={{ color: "var(--green, rgba(132, 127, 59, 1))" }}>
            {highlight}
          </strong>
          <div> {description}</div>
        </Typography>
      </dvi>
    </Box>
  );
};

export default StatCard;
