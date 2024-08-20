// src/context/WidgetContext.js
import React, { createContext, useState } from 'react';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState({
    cnapp: [],
    cspm: [],
    imageSecurity: [],
  });
  const [searchQuery, setSearchQuery] = useState('');

  const addWidget = (category, widget) => {
    setWidgets(prev => ({
      ...prev,
      [category]: [...prev[category], widget]
    }));
  };

  const removeWidget = (category, id) => {
    setWidgets(prev => ({
      ...prev,
      [category]: prev[category].filter(widget => widget.id !== id)
    }));
  };

  const updateWidgetName = (category, id, newName) => {
    setWidgets(prev => ({
      ...prev,
      [category]: prev[category].map(widget =>
        widget.id === id ? { ...widget, name: newName } : widget
      )
    }));
  };

  // Filter widgets based on the search query
  const filteredWidgets = {
    cnapp: widgets.cnapp.filter(widget => widget.name.toLowerCase().includes(searchQuery.toLowerCase())),
    cspm: widgets.cspm.filter(widget => widget.name.toLowerCase().includes(searchQuery.toLowerCase())),
    imageSecurity: widgets.imageSecurity.filter(widget => widget.name.toLowerCase().includes(searchQuery.toLowerCase())),
  };

  return (
    <WidgetContext.Provider value={{
      widgets: filteredWidgets,
      addWidget,
      removeWidget,
      updateWidgetName,
      setSearchQuery, // Provide setSearchQuery to allow updates
    }}>
      {children}
    </WidgetContext.Provider>
  );
};
