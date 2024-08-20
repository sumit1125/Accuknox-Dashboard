import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (onSearch) onSearch(value); // Call onSearch prop if provided
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
