import React, { useState } from 'react';
import './Dashboard.css'; // You can define your CSS styles for the dashboard component
import BookTable from '../BookTable/BookTable';
import AddBook from '../AddBook/AddBook';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('view');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="dashboard-container">
      {/* Side Panel */}
      <div className="side-panel">
        <div
          className={`panel-option ${currentPage === 'view' ? 'active' : ''}`}
          onClick={() => navigateToPage('view')}
        >
          View
        </div>
        <div
          className={`panel-option ${currentPage === 'add' ? 'active' : ''}`}
          onClick={() => navigateToPage('add')}
        >
          Add
        </div>
      </div>

      {/* Outlet for Pages */}
      <div className="page-outlet">
        {currentPage === 'view' && <ViewPage />}
        {currentPage === 'add' && <AddPage />}
      </div>
    </div>
  );
};

const ViewPage = () => {
  return (
    <div className="page">
      <BookTable />  
    </div>
  );
};

const AddPage = () => {
  return (
    <AddBook />
  );
};

export default Dashboard;