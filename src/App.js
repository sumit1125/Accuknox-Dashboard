import React from 'react';
import Header from './components/Header';
import CNAPPDashboard from './containers/CNAPPDashboard';
import CSPMDashboard from './containers/CSPMDashboard';
import ImageSecurity from './containers/ImageSecurity';
import { WidgetProvider } from './context/WidgetContext';

const App = () => {
  return (
    <WidgetProvider>
      <div>
        <Header />
        <main>
          <CNAPPDashboard />
          <CSPMDashboard />
          <ImageSecurity />
        </main>
      </div>
    </WidgetProvider>
  );
};

export default App;
