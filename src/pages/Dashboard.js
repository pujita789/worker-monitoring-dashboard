import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardOne from "../components/cards/CardOne";
import CardTwo from "../components/cards/CardTwo";
import CardThree from "../components/cards/CardThree";
import CardFour from "../components/cards/CardFour";
import ChartOne from "../components/charts/ChartOne";
import ChartTwo from "../components/charts/ChartTwo";
import ChartThree from "../components/charts/ChartThree";

const Dashboard = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/";

  return (
    <div className=" min-h-screen ml-60 mt-14">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ">
          {/* Content Area */}
          {isDashboardPage && (
            <div className="bg-gray-200 rounded-lg  p-6">
              <h1 className="text-2xl font-semibold mb-4">
                Dashboard
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-4">
                  <CardOne />
                  <CardTwo />
                  <CardThree />
                  <CardFour />
                </div>
              {/* Render the chart component */}
              <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 mb-6">
                <ChartOne />
                <ChartTwo />
                <ChartThree />

              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
