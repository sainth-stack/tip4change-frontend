export const chartConfigs = {
    certified: {
      chartData: {
        labels: ["Certified", "Uncertified"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#847F3B", "#E0E0E0"],
            hoverBackgroundColor: ["#6A6330", "#D1D1D1"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "75%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: { display: false },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  
    sentiment: {
    chartData: {
      labels: ["Positive", "Negative", "Neutral"], // Legend labels
      datasets: [
        {
          data: [60, 15, 25], // Values
          backgroundColor: ["#847F3B", "#E86F51", "#F4C542"],
          hoverBackgroundColor: ["#6A6330", "#C45A42", "#D1A837"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "75%",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: "#FFF",
          font: { weight: "bold" },
          formatter: (value) => `${value}%`, // Shows only percentage
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },

  
    completed: {
      chartData: {
        labels: ["Completed", "Incompleted"],
        datasets: [
          {
            data: [54, 46],
            backgroundColor: ["#7A713B", "#E0DEC9"],
            hoverBackgroundColor: ["#6A6330", "#D1CDB8"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "75%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: {
            display: true,
            color: "#7A713B",
            font: { size: 16, weight: "bold" },
            formatter: (value, context) => {
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(0);
              return percentage === "54" ? ["Completed", `${percentage}%`] : "";
            },
            anchor: "start",
            align: "start",
            offset: 60,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  };
  