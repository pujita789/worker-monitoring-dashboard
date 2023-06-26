import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ['Present', 'Absent', 'On Leave', 'On Break'],
    datasets: [
      {
        label: 'May',
        data: [210, 5, 2, 1], // Values for the first month
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      {
        label: 'June',
        data: [28, 20, 4, 2], // Values for the second month
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      {
        label: 'July',
        data: [22, 17, 3, 0], // Values for the third month
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
    