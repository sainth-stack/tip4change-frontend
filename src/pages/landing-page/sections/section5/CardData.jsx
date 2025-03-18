import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Example icons

const statsData = [
  {
    title: "Carbon Footprint",
    percentage: 89,
    icon: (
      <img
        src="src/assets/images/card1.png"
        alt="icon"
        sx={{ width: "60px", height: "60px" }}
      />
    ),
    description: "CO₂ Reduction vs. Last year",
    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon2.png"
          alt=""
          style={{ width: "20px", height: "12px" }}
        />
        <strong style={{ color: "red", marginLeft: "8px" }}>20% </strong>
      </span>
    ),
  },
  {
    title: "Water Usage",
    percentage: 65,
    icon: <img src="src/assets/images/card2.png" sx={{ color: "" }} />,
    description: "Saved per 1000kg Cotton",
    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt=" icon"
          style={{ width: "20px", height: "12px" }}
        />
        <strong style={{ marginLeft: "8px" }}>50,000L </strong>
      </span>
    ),
  },
  {
    title: "Fair Trade",
    percentage: 73,
    icon: <img src="src/assets/images/card3.png" sx={{ color: "#D8A013" }} />,
    description: "Of Cotton Fair Trade Certified",
    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
        <strong style={{ marginLeft: "8px" }}>80% </strong>
      </span>
    ),
  },
  {
    title: "Recycled Cotton",
    percentage: 96,
    icon: <img src="src/assets/images/card4.png" sx={{ color: "#E1306C" }} />,
    description: "Cotton from Recycled Sources",
    highlight: (
      <span style={{}}>
        <img
          src="src/assets/images/cardIcon.png"
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
        <strong style={{ marginLeft: "8px" }}>30% </strong>
      </span>
    ),
  },
];

const StatesCard = () => {
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

export default StatesCard;
