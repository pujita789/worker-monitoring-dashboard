import React, { useEffect, useRef } from "react";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaVideo,
  FaCog,
  FaBell,
} from "react-icons/fa";
import Logo from "../assets/logo.png"; // Import your logo image

const Sidebar = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const windowHeight = window.innerHeight;
        const sidebarTopOffset = sidebar.getBoundingClientRect().top;
        sidebar.style.height = `${windowHeight - sidebarTopOffset}px`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      className="bg-customColor text-gray-100 fixed top-0 left-0 w-60 overflow-y-auto"
      ref={sidebarRef}
    >
      <div className="p-8">
      <div className="flex items-center mb-6">
  <img src={Logo} alt="Logo" className="w-16 h-16 mx-14 border border-white" />
</div>

        <ul>
          <li className="mb-2 mt-20">
            <a
              href="/"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaHome className="mr-2" />
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/employees"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaUsers className="mr-2" />
              Employees
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/live-video-feed"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaVideo className="mr-2" />
              Live Video Feed
            </a>
          </li>

          <li className="mb-2">
            <a
              href="notification-page"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaBell className="mr-2" />
              Notifications
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/statistics"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaChartLine className="mr-2" />
              Statistics
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/settings"
              className="flex items-center text-gray-100 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              <FaCog className="mr-2" />
              Settings
            </a>
          </li>
          {/* Add more sidebar options as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
