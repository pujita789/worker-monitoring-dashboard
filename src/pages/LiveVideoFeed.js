import React, { useState } from "react";
import camera1 from "../assets/1.jpg";
import camera2 from "../assets/2.jpg";
import camera3 from "../assets/3.jpg";
import camera4 from "../assets/4.jpeg";
import camera5 from "../assets/5.gif";

const LiveVideoFeed = () => {
  const [selectedCamera, setSelectedCamera] = useState(null);

  const handleCameraClick = (camera) => {
    setSelectedCamera(camera);
  };

  const handleCloseModal = () => {
    setSelectedCamera(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Live Video Feed</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCameraClick(camera1)}
        >
          <img src={camera1} alt="Camera 1" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"></div>
        </div>
        <div
          className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCameraClick(camera2)}
        >
          <img src={camera2} alt="Camera 2" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"></div>
        </div>
        {/* Repeat the above code for additional cameras */}
      </div>

      {selectedCamera && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-75"
            onClick={handleCloseModal}
          ></div>
          <div className="relative z-10 max-w-3xl max-h-3xl">
            <img
              src={selectedCamera}
              alt="Selected Camera"
              className="w-full h-auto"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke="currentColor"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-semibold mb-4 mt-4">Safety Gear Detection</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCameraClick(camera3)}
        >
          <img src={camera3} alt="Camera 3" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"></div>
        </div>
        <div
          className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCameraClick(camera4)}
        >
          <img src={camera4} alt="Camera 4" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"></div>
        </div>
        {/* Repeat the above code for additional cameras */}
      </div>

      {selectedCamera && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-75"
            onClick={handleCloseModal}
          ></div>
          <div className="relative z-10 max-w-3xl max-h-3xl">
            <img
              src={selectedCamera}
              alt="Selected Camera"
              className="w-full h-auto"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke="currentColor"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-semibold mb-4 mt-4">Face Recognition</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCameraClick(camera5)}
        >
          <img src={camera5} alt="Camera 5" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"></div>
        </div>
        {/* Repeat the above code for additional cameras */}
      </div>

      {selectedCamera && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-75"
            onClick={handleCloseModal}
          ></div>
          <div className="relative z-10 max-w-3xl max-h-3xl">
            <img
              src={selectedCamera}
              alt="Selected Camera"
              className="w-full h-auto"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke="currentColor"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveVideoFeed;
