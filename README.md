
# Dashboard V2

## Overview

Dashboard V2 is a dynamic and customizable React-based dashboard application that allows users to add, remove, update, and search widgets across different categories (CNAPP, CSPM, Image Security). Each category displays widgets using various chart types such as Pie Charts, Bar Graphs, and Line Charts. The application leverages React's Context API and Redux for state management.

## Features

Installation
To get started with the Dashboard V2 application, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/sumit1125/dashboard-v2.git
Navigate to the project directory:

bash
Install dependencies:
npm Install

Start the development server:

bash

npm start

The application will run on

 http://localhost:3000.

- **Dynamic Widget Management**: Add, update, and remove widgets dynamically.
- **Search Functionality**: Search through widgets in real-time across all categories.
- **Categorized Dashboard**: Widgets are categorized into CNAPP, CSPM, and Image Security sections, each displaying data with different chart types.
- **Modal for Adding Widgets**: A modal is provided for adding widgets to the dashboard.
- **Context API & Redux**: Used for managing global state and widget data.
- **Responsive Design**: The layout is fully responsive and adapts to different screen sizes.


## Project Structure

```plaintext
/src
  /components
    - Header.js            # Header component with search bar and modal control
    - SearchBar.js         # Search bar component used in Header
    - AddWidget.js         # Modal component for adding widgets
  /containers
    - CNAPPDashboard.js    # CNAPP Dashboard section with widgets and Pie Charts
    - CSPMDashboard.js     # CSPM Dashboard section with widgets and Bar Graphs
    - ImageSecurity.js     # Image Security section with widgets and Line Charts
  /context
    - WidgetContext.js     # Context API for managing widget state globally
  /redux
    - store.js
    - widgetSlice.js       # Redux slice for widget actions and reducers
  - App.js                 # Main application component
  - index.js               # Entry point of the application
  - dashboardData.json     # JSON data file for initial widget data.


## Deployment

To deploy this project run

```bash
  npm install 
  for dependency
```

```bash
  to run
  cd to the project folder
  npm start
```


