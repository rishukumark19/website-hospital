import React from 'react';
import { View } from '../types';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primary font-sans relative">
      
      {/* New Responsive Navbar */}
      <Navbar currentView={currentView} onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* New Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Scroll to Top Utility */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;