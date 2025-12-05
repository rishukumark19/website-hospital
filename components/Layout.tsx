
import React from 'react';
import { View } from '../types';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import EmergencyHotline from './EmergencyHotline';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-text-dark font-sans relative">
      
      {/* New Responsive Navbar */}
      <Navbar currentView={currentView} onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="flex-grow animate-fade-in">
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* New Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Utilities */}
      <ScrollToTop />
      <EmergencyHotline />
    </div>
  );
};

export default Layout;
