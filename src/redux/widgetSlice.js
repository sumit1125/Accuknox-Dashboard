import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  CNAPP: [],
  CSPM: [],
  ImageSecurity: [],
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      state[category].push(widget);
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      state[category] = state[category].filter(widget => widget.id !== widgetId);
    },
    updateWidget: (state, action) => {
      const { category, widget } = action.payload;
      const index = state[category].findIndex(w => w.id === widget.id);
      if (index !== -1) {
        state[category][index] = widget;
      }
    },
  },
});

export const { addWidget, removeWidget, updateWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
