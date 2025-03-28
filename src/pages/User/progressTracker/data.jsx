export const chartData = {
    labels: ["Completed", "Incompleted"],
    datasets: [
      {
        data: [54, 46],
        backgroundColor: ["#847F3B", "#E0DEC9"],
        hoverBackgroundColor: ["#6A6330", "#D1CDB8"],
        borderWidth: 0,
      },
    ],
  };

  export const options = {
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
  };
