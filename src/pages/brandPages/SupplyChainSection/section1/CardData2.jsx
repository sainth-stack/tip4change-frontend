import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";

import card1 from "/src/assets/images/card1.png";
import card2 from "/src/assets/images/card2.png";
import card3 from "/src/assets/images/card3.png";
import card4 from "/src/assets/images/card4.png";
import cardIcon from "/src/assets/images/cardIcon.png";

const statsData = [
  {
    title: "Average Supply Chain Efficiency",
    value: 79,
    type: "percentage",
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
          80{" "}
        </strong>
        Average Supply
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
    title: "CO₂ Emissions from Transport",
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
          500{" "}
        </strong>
        Metric tons CO₂
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
    title: "Total Cotton Volume Tracked",
    value: 80,
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
          100,000 kg{" "}
        </strong>
        Of Cotton
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
    title: "Pending Compliance Check",
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
          3{" "}
        </strong>
        Suppliers Need Review
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

const SupplyCards = () => {
  return (
    <Grid className="main-container2" spacing={2} sx={{ padding: "0px" }}>
      {statsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SupplyCards;
