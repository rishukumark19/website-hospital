
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import Services from './views/Services';
import Assistant from './views/Assistant';
import Appointment from './views/Appointment';
import Locator from './views/Locator';
import Wellness from './views/Wellness';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={setCurrentView} />;
      case View.SERVICES:
        return <Services />;
      case View.WELLNESS:
        return <Wellness />;
      case View.ASSISTANT:
        return <Assistant />;
      case View.APPOINTMENT:
        return <Appointment />;
      case View.LOCATOR:
        return <Locator />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
