// src/containers/CNAPPDashboard.js
import React, { useContext } from 'react';
import WidgetCard from '../components/WidgetCard';
import { WidgetContext } from '../context/WidgetContext';
import dashboardData from '../data/dashboardData.json';

const CNAPPDashboard = () => {
  const { widgets, addWidget, removeWidget, setSearchQuery } = useContext(WidgetContext);
  const cnappWidgets = widgets.cnapp;

  const handleAddWidget = () => {
    const newWidgetIndex = cnappWidgets.length;
    if (newWidgetIndex < dashboardData.cnapp.length) {
      const newWidget = dashboardData.cnapp[newWidgetIndex];
      newWidget.id = Date.now();
      addWidget('cnapp', newWidget);
    } else {
      alert("No more widgets available in the JSON data.");
    }
  };

  return (
    <div className="mt-6 p-6">
      <h2 className="text-2xl font-semibold text-gray-800">CNAPP Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-20">
        {cnappWidgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget('cnapp', widget.id)}
          />
        ))}
        <div
          className="p-4 rounded-lg shadow bg-white flex justify-center items-center cursor-pointer h-32"
          onClick={handleAddWidget}
        >
          <i className=" fas fa-plus text-gray-500 text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default CNAPPDashboard;
