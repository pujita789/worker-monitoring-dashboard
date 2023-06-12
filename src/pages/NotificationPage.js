import React, { useState } from "react";

const NotificationPage = () => {
  // Dummy notification data
  const initialNotifications = [
    {
        id: 1,
        title: "New Task Assigned",
        description: "You have been assigned a new task.",
      },
      {
        id: 2,
        title: "Task Deadline Approaching",
        description: "Task #123 is due in 2 days. Please make sure to complete it on time.",
      },
      {
        id: 3,
        title: "Task Completed",
        description: "Task #456 has been completed successfully.",
      },
      {
        id: 4,
        title: "Laundry Pickup Scheduled",
        description: "Your laundry pickup is scheduled for tomorrow.",
      },
      {
        id: 5,
        title: "Laundry Delivery Delayed",
        description: "There is a delay in the delivery of your laundry. Sorry for the inconvenience.",
      },
      {
        id: 6,
        title: "Laundry Ready for Pickup",
        description: "Your laundry is ready for pickup. Please collect it within 48 hours.",
      },
      {
        id: 7,
        title: "New Task Assigned",
        description: "You have been assigned a new laundry sorting task.",
      },
      {
        id: 8,
        title: "Laundry Delivery Scheduled",
        description: "Your laundry delivery is scheduled for next week.",
      },
      {
        id: 9,
        title: "Laundry Processing Complete",
        description: "The laundry processing for your items is complete.",
      },
      {
        id: 10,
        title: "Laundry Sorting Completed",
        description: "The sorting of laundry items has been completed.",
      },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle filter select change
  const handleFilterSelectChange = (event) => {
    setFilter(event.target.value);
  };

  // Handle sort order select change
  const handleSortOrderSelectChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Apply search, filter, and sort to notifications
  const filteredNotifications = notifications.filter((notification) =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNotifications = filteredNotifications.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 px-3 py-2 rounded-md mr-2"
        />
        <select
          value={filter}
          onChange={handleFilterSelectChange}
          className="border border-gray-300 px-3 py-2 rounded-md mr-2"
        >
          <option value="">All</option>
          <option value="assigned">Assigned</option>
          <option value="deadline">Deadline Approaching</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={sortOrder}
          onChange={handleSortOrderSelectChange}
          className="border border-gray-300 px-3 py-2 rounded-md"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {sortedNotifications.map((notification) => (
          <div key={notification.id} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{notification.title}</h2>
            <p className="text-gray-800">{notification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
