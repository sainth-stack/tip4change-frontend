import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Example icons

const statsData = [
  {
    title: "Carbon Footprint",
    percentage: 89,
    color: "green",
    icon: (
      <img
        src="src/assets/images/card1.png"
        alt="icon"
        style={{ width: "60px", height: "60px" }} // Fixed style syntax
      />
    ),
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginRight: "8px",
          }}
        >
          20%
        </strong>
        CO₂ Reduction vs. Last year
      </span>
    ),
    highlight: (
      <span>
        <img
          src="src/assets/images/cardIcon2.png"
          alt="icon"
          style={{ width: "20px", height: "12px", marginLeft: "0px" }}
        />
      </span>
    ),
  },

  {
    title: "Water Usage",
    percentage: 65,
    icon: <img src="src/assets/images/card2.png" sx={{ color: "" }} />,
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
    title: "Fair Trade",
    percentage: 73,
    icon: <img src="src/assets/images/card3.png" sx={{ color: "#D8A013" }} />,
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
    title: "Recycled Cotton",
    percentage: 96,
    icon: <img src="src/assets/images/card4.png" sx={{ color: "#E1306C" }} />,
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
