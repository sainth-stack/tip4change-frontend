import React, { useState } from "react";
import { Radio, Checkbox, FormControlLabel, Grid, Box } from "@mui/material";

const DonationSelection = () => {
  const [selectedDonation, setSelectedDonation] = useState("");
  const [donateOnBehalf, setDonateOnBehalf] = useState(false);

  return (
    <Grid container spacing={2} alignItems="center">
      {/* One Time Donation */}
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: selectedDonation === "one-time" ? "2px solid #847F3B" : "1px solid #ccc",
            borderRadius: "30px",
            padding: "2px 10px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedDonation("one-time")}
        >
          <Radio
            checked={selectedDonation === "one-time"}
            onChange={() => setSelectedDonation("one-time")}
            sx={{ color: "#847F3B" }}
          />
          One Time Donation
        </Box>
      </Grid>

      {/* Donate on Behalf of Someone */}
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: donateOnBehalf ? "2px solid #847F3B" : "1px solid #ccc",
            borderRadius: "30px",
            padding: "2px 10px",
            cursor: "pointer",
          }}
          onClick={() => setDonateOnBehalf(!donateOnBehalf)}
        >
          <Checkbox
            checked={donateOnBehalf}
            onChange={() => setDonateOnBehalf(!donateOnBehalf)}
            sx={{ color: "#847F3B" }}
          />
          Donate on Behalf of Someone
        </Box>
      </Grid>
    </Grid>
  );
};

export default DonationSelection;
