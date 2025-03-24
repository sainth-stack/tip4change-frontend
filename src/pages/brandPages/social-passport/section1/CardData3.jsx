import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";

import card1 from "/src/assets/images/card1.png";
import card2 from "/src/assets/images/card2.png";
import card3 from "/src/assets/images/card3.png";
import card4 from "/src/assets/images/card4.png";
import cardIcon from "/src/assets/images/cardIcon.png";

const statsData = [
  {
    title: "Total Cotton Sourced",
    value: 2500, // Example value in millions
    type: "none", // Define type (percentage, stars, millions)
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
          2,500{" "}
        </strong>
        Tons
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
    title: "Organic Cotton Percentage",
    value: 62, // Example percentage
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
          65%{" "}
        </strong>
        Vs. Conventional Cotton
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
    title: "Recycled Cotton Usage",
    value: 73, // Example stars
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
          30%{" "}
        </strong>
        Of Total Material
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
    title: "Carbon Footprint of Cotton Sourcing",
    value: 91,
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
          18%{" "}
        </strong>
        Vs. Last Year
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

const SocialCards = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "0px" }}>
      {statsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialCards;
