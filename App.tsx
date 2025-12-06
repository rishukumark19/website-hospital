
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
import ServiceDetailCT from './views/ServiceDetailCT';
import ServiceDetailMRI from './views/ServiceDetailMRI';
import ServiceDetailFullBody from './views/ServiceDetailFullBody';
import ServiceDetailDiabetes from './views/ServiceDetailDiabetes';
import ServiceDetailCardiac from './views/ServiceDetailCardiac';
import TestDirectory from './views/TestDirectory';
import HomeCollection from './views/HomeCollection';
import ReportDownload from './views/ReportDownload';
import Contact from './views/Contact';
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
        // Unified Contact & Locator view
        return <Contact />;
      case View.CONTACT:
        return <Contact />;
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
      case View.SERVICEDETAIL_CT:
         return <ServiceDetailCT onNavigate={setCurrentView} />;
      case View.SERVICEDETAIL_MRI:
         return <ServiceDetailMRI onNavigate={setCurrentView} />;
      case View.SERVICEDETAIL_FULL_BODY:
         return <ServiceDetailFullBody onNavigate={setCurrentView} />;
      case View.SERVICEDETAIL_DIABETES:
         return <ServiceDetailDiabetes onNavigate={setCurrentView} />;
      case View.SERVICEDETAIL_CARDIAC:
         return <ServiceDetailCardiac onNavigate={setCurrentView} />;
      case View.TEST_DIRECTORY:
         return <TestDirectory onNavigate={setCurrentView} />;
      case View.HOME_COLLECTION:
         return <HomeCollection onNavigate={setCurrentView} />;
      case View.REPORT_DOWNLOAD:
         return <ReportDownload onNavigate={setCurrentView} />;
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
