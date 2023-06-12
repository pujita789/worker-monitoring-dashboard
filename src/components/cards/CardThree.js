import React from 'react';

const CardThree = () => {
  return (
    <div className="rounded-xl border border-stroke bg-gradient-to-r from-blue-500 to-blue-700 p-8 shadow-md">
    <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
      <h1 className="text-white text-lg font-bold">New Notifications</h1>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-white">25</h4>
          <span className="text-sm font-medium text-white">New Notifications</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-white">
          10%
          <svg
            className="fill-current"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardThree;
