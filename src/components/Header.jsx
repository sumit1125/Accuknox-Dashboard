import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import { WidgetContext } from '../context/WidgetContext';

const Header = () => {
  const { setSearchQuery } = useContext(WidgetContext);

  const handleSearch = (term) => {
    setSearchQuery(term); // Update search query in context
  };

  return (
    <div className="p-6 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-gray-500">
        <i className="fas fa-home"></i>
        <span>&gt;</span>
        <span className="font-semibold text-gray-700">Dashboard V2</span>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex space-x-4  items-center">
        <button className="flex items-center bg-white border border-gray-300 px-3 py-2 rounded">
          <i className="fas fa-plus"></i>
          <span className="ml-2">Add Widget</span>
        </button>
        <button className="flex items-center bg-white border border-gray-300 p-3 rounded">
          <i className="fas fa-ellipsis-h"></i>
        </button>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded">
          <i className="fas fa-clock"></i>
          <span className="ml-2">Last 2 days</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
