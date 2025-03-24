import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";

import card1 from "/src/assets/images/card1.png";
import card2 from "/src/assets/images/card2.png";
import card3 from "/src/assets/images/card3.png";
import card4 from "/src/assets/images/card4.png";
import cardIcon from "/src/assets/images/cardIcon.png";
import cardIcon2 from "/src/assets/images/cardIcon2.png";

const statsData = [
  {
    title: "Carbon Footprint",
    value: 89,
    type: "percentage",
    color: "green",
    icon: (
      <img src={card1} alt="icon" style={{ width: "60px", height: "60px" }} />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginRight: "8px",
          }}
        >
          20%{" "}
        </strong>
        CO₂ Reduction vs. Last Year
      </span>
    ),
    highlight: (
      <img
        src={cardIcon2}
        alt="icon"
        style={{ width: "20px", height: "12px" }}
      />
    ),
  },
  {
    title: "Water Usage",
    value: 65,
    type: "percentage",
    icon: (
      <img src={card2} alt="icon" style={{ width: "60px", height: "60px" }} />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "2px",
          }}
        >
          50,000L{" "}
        </strong>
        Saved per 1000kg Cotton
      </span>
    ),
    highlight: (
      <img
        src={cardIcon}
        alt="icon"
        style={{ width: "20px", height: "12px" }}
      />
    ),
  },
  {
    title: "Fair Trade",
    value: 73,
    type: "percentage",
    icon: (
      <img src={card3} alt="icon" style={{ width: "60px", height: "60px" }} />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "0px",
          }}
        >
          80%{" "}
        </strong>
        Of Cotton Fair Trade Certified
      </span>
    ),
    highlight: (
      <img
        src={cardIcon}
        alt="icon"
        style={{ width: "20px", height: "12px" }}
      />
    ),
  },
  {
    title: "Recycled Cotton",
    value: 96,
    type: "percentage",
    icon: (
      <img src={card4} alt="icon" style={{ width: "60px", height: "60px" }} />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "-2px",
          }}
        >
          30%{" "}
        </strong>
        Cotton from Recycled Sources
      </span>
    ),
    highlight: (
      <img
        src={cardIcon}
        alt="icon"
        style={{ width: "20px", height: "12px" }}
      />
    ),
  },
];

const ImpactCards = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "0px" ,gap:"2" }}>
      {statsData.map((item, index) => (
        <Grid item xs={12} sm={6}  md={3} key={index} sx={{gap:"2"}}>
          <StatCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImpactCards;
