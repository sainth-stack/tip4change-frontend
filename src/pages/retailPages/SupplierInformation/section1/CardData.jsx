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
    value: 79,
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
          2.5Kg{" "}
        </strong>
        CO₂  per shirt
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
    title: "Water Usage",
    value: 88,
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
          1500L{" "}
        </strong>
       Liters Saved
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
    title: "Fair Trade Cotton",
    value: 85,
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
          85%{" "}
        </strong>
         Certified
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
    title: "Material Composition",
    value: 67,
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
          100%{" "}
        </strong>
        Organic Cotton 
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

const SupplyInfoCards = () => {
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

export default SupplyInfoCards;
