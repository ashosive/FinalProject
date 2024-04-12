import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen w-64 flex flex-col justify-between">
      <div className="p-4 text-white text-2xl font-semibold">FarmChain Dashboard</div>
      <section className="flex-grow">
        <ul>
          <li className="py-2">
            <Link to="/new-order" className="px-4 py-3 text-gray-300 hover:bg-gray-800 block">
              <svg
                className="w-6 h-6 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              New Order
            </Link>
          </li>
          <li className="py-2">
            <Link to="/order-history" className="px-4 py-3 text-gray-300 hover:bg-gray-800 block">
              <svg
                className="w-6 h-6 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Order History
            </Link>
          </li>
          <li className="py-2">
            <span className="px-4 py-3 text-gray-300 hover:bg-gray-800 cursor-pointer block">
              <svg
                className="w-6 h-6 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Pending Order
            </span>
          </li>
          <li className="py-2">
            <span className="px-4 py-3 text-gray-300 hover:bg-gray-800 cursor-pointer block">
              <svg
                className="w-6 h-6 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Logout
            </span>
          </li>
        </ul>
      </section>
      <div className="p-4 text-gray-300 text-sm">&copy; 2024 FarmChain Dashboard</div>
    </div>
  );
};

export default Sidebar;
