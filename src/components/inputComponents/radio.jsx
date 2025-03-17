import React, { useState } from "react";
import { Radio, Checkbox, Grid, Box } from "@mui/material";

const DonationSelection = () => {
  const [selectedDonation, setSelectedDonation] = useState("");
  const [donateOnBehalf, setDonateOnBehalf] = useState(false);

  return (
    <Grid container spacing={2} alignItems="center">
      {/* One Time Donation */}
      <Grid item xs={12} sm={6} sx={{height:"44px",marginBottom:{xs:"15px",}}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: selectedDonation === "one-time" ? "2px solid #a38e5d" : "1px solid #ccc",
            borderRadius: "30px",
            padding: "2px 10px",
            cursor: "pointer",
            borderColor:"#847F3B"
          }}
          onClick={() => setSelectedDonation("one-time")}
        >
          <Radio
            checked={selectedDonation === "one-time"}
            onChange={() => setSelectedDonation("one-time")}
            sx={{
              color: "#a38e5d",
              "&.Mui-checked": {
                color: "#a38e5d",
              },
            }}
          />
          One Time Donation
        </Box>
      </Grid>

      {/* Donate on Behalf of Someone */}
      <Grid item xs={12} sm={6} sx={{height:"44px",marginBottom:{xs:"15px",}}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: donateOnBehalf ? "2px solid #a38e5d" : "1px solid #ccc",
            borderRadius: "30px",
            padding: "2px 10px",
            cursor: "pointer",
            borderColor:"#847F3B"
          }}
          onClick={() => setDonateOnBehalf(!donateOnBehalf)}
        >
          <Checkbox
            checked={donateOnBehalf}
            onChange={() => setDonateOnBehalf(!donateOnBehalf)}
            sx={{
              color: "#a38e5d",
              "&.Mui-checked": {
                color: "#a38e5d",
              },
            }}
          />
          Donate on Behalf of Someone
        </Box>
      </Grid>
    </Grid>
  );
};

export default DonationSelection;