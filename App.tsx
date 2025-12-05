import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import Services from './views/Services';
import Assistant from './views/Assistant';
import Appointment from './views/Appointment';
import Locator from './views/Locator';
import Wellness from './views/Wellness';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Blog from './views/Blog';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={setCurrentView} />;
      case View.SERVICES:
        return <Services />;
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
        // Contact details are in footer, but we can route to home or locator
        // We'll treat it as home + scroll to footer action usually, or just show home
        return <Home onNavigate={setCurrentView} />;
      case View.ABOUT:
         return <AboutUs onNavigate={setCurrentView} />;
      case View.FAQ:
         return <FAQ />;
      case View.BLOG:
         return <Blog />;
      case View.PRIVACY:
         return <PrivacyPolicy />;
      case View.TERMS:
         return <TermsOfService />;
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
