import React, { useState } from 'react';
import avatar from '../assets/avatar.png';

const Employees = () => {
  // Dummy employee data
  const employeesData = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Laundry Operator',
      department: 'Operations',
      avatar: avatar,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Laundry Technician',
      department: 'Maintenance',
      avatar: avatar,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Laundry Supervisor',
      department: 'Management',
      avatar: avatar,
    },
    {
      id: 4,
      name: 'Emily Brown',
      position: 'Laundry Attendant',
      department: 'Operations',
      avatar: avatar,
    },
    {
      id: 5,
      name: 'Daniel Wilson',
      position: 'Laundry Technician',
      department: 'Maintenance',
      avatar: avatar,
    },
    {
      id: 6,
      name: 'Olivia Taylor',
      position: 'Laundry Supervisor',
      department: 'Management',
      avatar: avatar,
    },
    {
      id: 7,
      name: 'Sophia Davis',
      position: 'Laundry Attendant',
      department: 'Operations',
      avatar: avatar,
    },
    {
      id: 8,
      name: 'William Clark',
      position: 'Laundry Technician',
      department: 'Maintenance',
      avatar: avatar,
    },
    {
      id: 9,
      name: 'Ava Martinez',
      position: 'Laundry Operator',
      department: 'Operations',
      avatar: avatar,
    },
    {
      id: 10,
      name: 'James Garcia',
      position: 'Laundry Supervisor',
      department: 'Management',
      avatar: avatar,
    },
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleEditEmployee = (employeeId) => {
    // Handle the edit functionality here
    console.log(`Edit employee with ID: ${employeeId}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    if (filter === 'all') {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        employee.department.toLowerCase() === filter.toLowerCase() &&
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'position') {
      return a.position.localeCompare(b.position);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Employees</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-4">
          <div>
            <input
              type="text"
              placeholder="Search employees"
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="filter" className="font-medium">
                Filter by Department:
              </label>
              <select
                id="filter"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                {/* Add more departments here */}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="name">Name</option>
                <option value="position">Position</option>
                {/* Add more sorting options here */}
              </select>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {sortedEmployees.map((employee) => (
            <li key={employee.id} className="py-4 flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={employee.avatar}
                alt={employee.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-500">
                  {employee.position} - {employee.department}
                </p>
              </div>
              <button
                className="ml-auto px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                onClick={() => handleEditEmployee(employee.id)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employees;
