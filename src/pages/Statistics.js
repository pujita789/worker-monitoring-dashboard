import React from "react";
import ChartFour from "../components/charts/ChartFour";

const Statistics = () => {
  // Dummy statistic data
  const statistics = [
    {
      label: "Total Workers",
      value: 25,
    },
    {
      label: "Total Tasks",
      value: 150,
    },
    {
      label: "Completed Tasks",
      value: 120,
    },
    {
      label: "Pending Tasks",
      value: 30,
    },
    {
      label: "Average Tasks per Worker",
      value: 6,
    },
    {
      label: "Tasks Overdue",
      value: 5,
    },
    {
      label: "Tasks Completed on Time",
      value: 115,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Statistics</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {statistics.map((statistic, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{statistic.label}</h2>
            <p className="text-gray-800">{statistic.value}</p>
          </div>
        ))}
      </div>
      <ChartFour />
    </div>
  );
};

export default Statistics;
