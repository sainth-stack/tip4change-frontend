import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Example icons

const statsData = [
  {
    title: "Total Cotton Based PRoduct ",
    percentage: "1.2M",
    icon: (
      <img
        src="src/assets/images/card1.png"
        alt="icon"
        style={{ width: "60px", height: "60px" }} // Fixed style syntax
      />
    ),
    description: (
      <span>
        <strong style={{ color: "red", marginRight: "8px" }}>1.2M</strong>
        Units Sold
      </span>
    ),
    highlight: (
      <span>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px", marginLeft: "0px" }}
        />
      </span>
    ),
  },

  {
    title: "Average Consumer Rating ",
    percentage: "4.6 Stars",
    icon: <img src="src/assets/images/card2.png" sx={{ color: "" }} />,
    description: (
      <span>
        <strong style={{ marginLeft: "2px" }}>78% </strong>
        Of Consumer Prefer Organic Cotton
      </span>
    ),
    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
      </span>
    ),
  },
  {
    title: "Consumer Return Rate",
    percentage: 5.2,
    icon: <img src="src/assets/images/card3.png" sx={{ color: "#D8A013" }} />,
    description: (
      <span>
        <strong style={{ marginLeft: "0px" }}> 5.2% </strong>
        (Industry Avg:6%)
      </span>
    ),

    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
      </span>
    ),
  },
  {
    title: "Carbon Footprintn of Cotton Sourcing",
    percentage: 91,
    icon: <img src="src/assets/images/card4.png" sx={{ color: "#E1306C" }} />,
    description: (
      <span>
        <strong style={{ marginLeft: "-2px" }}>18% </strong>
        Vs. Last Year
      </span>
    ),

    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
      </span>
    ),
  },
];

const StatesCard4 = () => {
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

export default StatesCard4;
