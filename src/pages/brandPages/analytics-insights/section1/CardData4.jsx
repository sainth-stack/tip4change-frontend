import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";

import card1 from "/src/assets/images/card1.png";
import card2 from "/src/assets/images/card2.png";
import card3 from "/src/assets/images/card3.png";
import card4 from "/src/assets/images/card4.png";
import cardIcon from "/src/assets/images/cardIcon.png";

const statsData = [
  {
    title: (
      <>
        Total Cotton <br /> Based Product
      </>
    ),
    value: "1.2M",
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
          1.2M{" "}
        </strong>
        Units Sold
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
    title: (
      <>
        Average <br />
        Consumer Rating
      </>
    ),
    value: "4.6 Stars",
    type: "",
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
          4.6 /{" "}
        </strong>
        5 Stars
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
    title: "Sustainability Preferences Score",
    value: "78%",
    icon: (
      <img src={card3} alt="icon" style={{ width: "60px", height: "60px" }} />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginRight: "0px",
          }}
        >
          78%{" "}
        </strong>
        Of Consumer Prefer Organic Cotton
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
    title: "Consumer Return Rate",
    value: "5.2%",
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
          5.2%{" "}
        </strong>
        (Industry Avg: 6%)
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

const AnalyticCards = () => {
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

export default AnalyticCards;
