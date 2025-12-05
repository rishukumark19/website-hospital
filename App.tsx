
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import Services from './views/Services';
import Assistant from './views/Assistant';
import Appointment from './views/Appointment';
import Locator from './views/Locator';
import Wellness from './views/Wellness';
import AboutUs from './views/AboutUs';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={setCurrentView} />;
      case View.SERVICES:
        return <Services />;
      // Mapping Departments to Services view for now as they share similar content, 
      // but passing a prop or filter could differ them in Step 3.
      case View.DEPARTMENTS:
        return <Services />;
      case View.WELLNESS:
        return <Wellness />;
      case View.ASSISTANT:
        return <Assistant />;
      case View.APPOINTMENT:
        return <Appointment />;
      case View.LOCATOR:
        return <Locator />;
      case View.CONTACT:
        // Contact is usually a section or page, mapping to Locator for now or Home footer
        // But let's show Home and scroll to footer is handled in Navbar
        return <Home onNavigate={setCurrentView} />;
      case View.ABOUT:
         return <AboutUs onNavigate={setCurrentView} />;
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
