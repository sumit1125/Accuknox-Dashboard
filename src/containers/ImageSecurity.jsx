// src/containers/ImageSecurity.js
import React, { useContext } from 'react';
import WidgetCard from '../components/WidgetCard';
import { WidgetContext } from '../context/WidgetContext';
import dashboardData from '../data/dashboardData.json';

const ImageSecurity = () => {
  const { widgets, addWidget, removeWidget } = useContext(WidgetContext);
  const imageSecurityWidgets = widgets.imageSecurity;

  const handleAddWidget = () => {
    const newWidgetIndex = imageSecurityWidgets.length;
    if (newWidgetIndex < dashboardData.imageSecurity.length) {
      const newWidget = { ...dashboardData.imageSecurity[newWidgetIndex] };
      newWidget.id = Date.now();
      addWidget('imageSecurity', newWidget);
    } else {
      alert("No more widgets available in the JSON data.");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 ml-10">Registary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-20">
        {imageSecurityWidgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget('imageSecurity', widget.id)}
          />
        ))}
        <div
          className="p-4 rounded-lg shadow bg-white flex justify-center items-center cursor-pointer h-32"
          onClick={handleAddWidget}
        >
          <i className="fas fa-plus text-gray-500 text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageSecurity;
