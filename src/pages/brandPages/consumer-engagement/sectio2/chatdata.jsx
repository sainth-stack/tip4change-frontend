export const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [60, 15, 25], // Adjust percentages
        backgroundColor: ["#847F3B", "#E86F51", "#F4C542"], // Match colors
        hoverBackgroundColor: ["#6A6330", "#C45A42", "#D1A837"],
        borderWidth: 0,
      },
    ],
  };
  
  export const options = {
    cutout: "75%", // Adjust the cutout for a clean look
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }, // Show tooltips
      datalabels: {
        color: "#FFF", // White text for better visibility
        font: { weight: "bold" },
        formatter: (value) => `${value}%`, // Show percentage directly
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  