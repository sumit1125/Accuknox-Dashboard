import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';

const WidgetCard = ({ widget, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(widget.name);

  const handleSave = () => {
    setIsEditing(false);
    if (onUpdate) {
      onUpdate({ ...widget, name });
    }
  };

  const renderChart = () => {
    switch (widget.type) {
      case 'pie':
        return <PieChart data={widget.data} />;
      case 'bar':
        return <BarChart data={widget.data} />;
      case 'line':
        return <LineChart data={widget.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-12  bg-white shadow rounded-lg">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          <button onClick={handleSave} className="text-blue-500 mt-2">Save</button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <button onClick={() => setIsEditing(true)} className="text-blue-500 mt-2">Edit</button>
        </div>
      )}
      {renderChart()}
      <button onClick={onRemove} className="text-red-500 mt-2">Remove</button>
    </div>
  );
};

WidgetCard.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['pie', 'bar', 'line']).isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func,
};

export default WidgetCard;
