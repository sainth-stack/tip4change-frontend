import { Grid } from "@mui/material";
import StatCard from "../../../../component/Card/StateCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Example icons
import ConsumerEngagemnt from './../ConsumerEngagemnt';

import card1 from "../../../../assets/images/card1.png";
import card3 from "../../../../assets/images/card3.png";
import card2 from "../../../../assets/images/card2.png";
import card4 from "../../../../assets/images/card4.png";



const statsData = [
  {
    title: "Total Comments & Feedback",
    value: 2500,
    type: "",
    icon: (
      <img
        src={card1}
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
          2,500{" "}
        </strong>
        Received
      </span>
    ),
    highlight: (
      <span>
        <img
          src={card4}
          alt="icon"
          style={{ width: "20px", height: "12px", marginLeft: "0px" }}
        />
      </span>
    ),
  },

  {
    title: "Response Rate",
    value: 85,
    type: "percentage",
    icon: <img src={card2} sx={{ color: "" }} />,
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "2px",
          }}
        >
          85%{" "}
        </strong>
        Response
      </span>
    ),
    highlight: (
      <span>
        <img src={card3} alt="icon" style={{ width: "20px", height: "12px" }} />
      </span>
    ),
  },
  {
    title: "Average Response Time",
    value: "24 Hrs",
    type: "none",
    icon: <img src={card3} sx={{ color: "#D8A013" }} />,
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "0px",
          }}
        >
          2Hrs{" "}
        </strong>
        Average response time
      </span>
    ),

    highlight: (
      <span>
        <img src={card4} alt="icon" style={{ width: "20px", height: "12px" }} />
      </span>
    ),
  },
  {
    title: "Sentiment Breakdown",
    value: 90,
    type: "percentage",
    icon: <img src={card4} sx={{ color: "#E1306C" }} />,
    description: (
      <span>
        <strong
          style={{
            color: "var(--green, rgba(132, 127, 59, 1))",
            marginLeft: "0px",
          }}
        >
          100%{" "}
        </strong>
        Positive, Neutral, Negative Feedback
      </span>
    ),

    highlight: (
      <span>
        <img
          src={card4}
          alt="icon"
          style={{ width: "20px", height: "12px" }}
        />
      </span>
    ),
  },
];

const ConsumerEngagemntCards = () => {
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

export default ConsumerEngagemntCards;
