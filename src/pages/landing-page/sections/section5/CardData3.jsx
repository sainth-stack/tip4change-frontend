import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Example icons

const statsData = [
  {
    title: "Total Cotton Sourced",
    percentage: 2500,
    icon: (
      <img
        src="src/assets/images/card1.png"
        alt="icon"
        style={{ width: "60px", height: "60px" }} // Fixed style syntax
      />
    ),
    description: (
      <span>
        <strong style={{ color: "red", marginRight: "8px" }}>2,500</strong>
        Tons
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
    title: "Organic Cotton Percentage",
    percentage: 62,
    icon: <img src="src/assets/images/card2.png" sx={{ color: "" }} />,
    description: (
      <span>
        <strong style={{ marginLeft: "2px" }}>65% </strong>
        Vs. Conventional Cotton
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
    title: "Recycled Cotton Usage",
    percentage: 73,
    icon: <img src="src/assets/images/card3.png" sx={{ color: "#D8A013" }} />,
    description: (
      <span>
        <strong style={{ marginLeft: "0px" }}> 30% </strong>
        Of Total Materail
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

const StatesCard3 = () => {
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

export default StatesCard3;
