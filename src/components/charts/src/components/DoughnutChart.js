import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import WeeklyDoughnutChart from './WeeklyDoughnutchart';
import DailyDoughnutChart from './DailyDoughnutchart';
import MonthlyDoughnutChart from './MonthlyDoughnutchart';
import './DoughnutChart.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

const DoughnutChart = () => {
  const [chartType, setChartType] = useState('');

  const changeChart = (event) => {
    setChartType(event.target.value);
  };

  const renderChart = () => {
    switch (chartType) {
      case 'daily':
        return <DailyDoughnutChart />;
      case 'weekly':
        return <WeeklyDoughnutChart />;
      case 'monthly':
        return <MonthlyDoughnutChart />;
      default:
        return null;
    }
  };

  useEffect(() => {
    Chart.register(...registerables); // Register necessary scales
  }, []);

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#attendance">
            Attendance
            <p>Weekly Attendance</p>
          </a>
          <div className="collapse navbar-collapse d-flex flex-row justify-content-end p-1" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <button type="button" className="btn btn-primary float-right p-6">
                Report
              </button>
              <li className="nav-item dropdown">
                <label htmlFor="chartType">Select Chart Type:</label>
                <select id="chartType" onChange={changeChart}>
                  <option value="">Select...</option>
                  <option value="daily">Daily Doughnut Chart</option>
                  <option value="weekly">Weekly Doughnut Chart</option>
                  <option value="monthly">Monthly Doughnut Chart</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="chartContainer">{renderChart()}</div>
    </div>
  );
};

export default DoughnutChart;
