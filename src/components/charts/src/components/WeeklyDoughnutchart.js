import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ['Present', 'Absent', 'On Leave', 'On Break'],
    datasets: [
      {
        label: 'Week 1',
        data: [120, 30, 10, 5], // Values for the first week
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      {
        label: 'Week 2',
        data: [115, 25, 15, 8], // Values for the second week
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        ticks: {
          display: true,
        },
      },
    },
  };
  const DoughnutChart = () => {
    return (
      <div>
        <Doughnut data={data} options={options} />
      </div>
    );
  };
  export default DoughnutChart;    