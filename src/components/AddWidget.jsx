import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/widgetSlice';

const AddWidget = ({ category }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ category, widget: newWidget }));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div>
      <h3>Add Widget to {category}</h3>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
      />
      <input
        type="text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        placeholder="Widget Text"
      />
      <button onClick={handleAddWidget}>+ Add Widget</button>
    </div>
  );
};

export default AddWidget;
