import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ['Present', 'Absent', 'On Leave', 'On Break'],
    datasets: [
      {
        label: '2023-05-01',
        data: [25, 5, 2, 1], // Values for the first date
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      {
        label: '2023-05-02',
        data: [28, 3, 4, 2], // Values for the second date
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      {
        label: '2023-05-03',
        data: [22, 7, 3, 0], // Values for the third date
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for the segments
      },
      // Add datasets for other dates
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
    