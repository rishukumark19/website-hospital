
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { navLinks } from '../data/mockData';
import { 
  Activity,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Search,
  User,
  ShoppingCart,
  Check,
  Home,
  FileText,
  TestTube,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Plus,
  Phone,
  LayoutDashboard
} from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isLoggedIn, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bank More');
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const locations = ['Bank More', 'Hirapur', 'Saraidhela', 'Jharia', 'Govindpur', 'City Center'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconForView = (view: View) => {
    switch (view) {
        case View.HOME: return Home;
        case View.ABOUT: return ShieldCheck;
        case View.SERVICES: return Activity;
        case View.TEST_DIRECTORY: return TestTube;
        case View.HOME_COLLECTION: return Plus;
        case View.CONTACT: return Phone;
        default: return ChevronRight;
    }
  };

  return (
    <>
      {/* ==============================================
          DESKTOP: NAVBAR
      ============================================== */}
      <nav className={`hidden md:block sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate(View.HOME)}>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:bg-green-700 transition-colors">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold text-gray-900 tracking-tight leading-none">Avishkar</span>
                  <span className="text-[11px] font-semibold tracking-wider text-primary uppercase mt-0.5">Diagnostics</span>
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-1">
               {navLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => onNavigate(item.view)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentView === item.view ? 'text-primary bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    {item.name}
                  </button>
               ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
               {/* Location (Desktop) */}
               <div className="relative">
                   <button 
                      onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                   >
                       <MapPin className="h-4 w-4 text-primary" />
                       <span>{selectedLocation}</span>
                       <ChevronDown className="h-3 w-3 opacity-50" />
                   </button>
                    {isLocationMenuOpen && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsLocationMenuOpen(false)}></div>
                        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-40 animate-in fade-in zoom-in-95">
                           {locations.map((loc) => (
                              <button
                                 key={loc}
                                 className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                                    selectedLocation === loc ? 'bg-green-50 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'
                                 }`}
                                 onClick={() => {
                                    setSelectedLocation(loc);
                                    setIsLocationMenuOpen(false);
                                 }}
                              >
                                 {loc}
                                 {selectedLocation === loc && <Check className="h-4 w-4" />}
                              </button>
                           ))}
                        </div>
                      </>
                   )}
               </div>

               <div className="h-6 w-px bg-gray-200"></div>

               {isLoggedIn ? (
                  <div className="relative">
                      <button 
                         onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                         className="flex items-center gap-2 bg-green-50 text-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-100 transition-colors"
                      >
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">RJ</div>
                          <span>My Account</span>
                          <ChevronDown className="h-4 w-4" />
                      </button>

                      {isUserMenuOpen && (
                          <>
                           <div className="fixed inset-0 z-30" onClick={() => setIsUserMenuOpen(false)}></div>
                           <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-40 animate-in fade-in zoom-in-95 overflow-hidden">
                              <button 
                                 onClick={() => { onNavigate(View.DASHBOARD); setIsUserMenuOpen(false); }}
                                 className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 font-medium"
                              >
                                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                              </button>
                              <button 
                                 onClick={() => { onLogout(); setIsUserMenuOpen(false); }}
                                 className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"
                              >
                                  <LogOut className="h-4 w-4" /> Logout
                              </button>
                           </div>
                          </>
                      )}
                  </div>
               ) : (
                  <button 
                    onClick={() => onNavigate(View.LOGIN)}
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-gray-800 transition-all hover:scale-[1.02]"
                  >
                     <User className="h-4 w-4" /> Login
                  </button>
               )}
            </div>
          </div>
        </div>
      </nav>


      {/* ==============================================
          MOBILE: TOP NAVBAR
      ============================================== */}
      <div className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-4">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2" onClick={() => onNavigate(View.HOME)}>
              <div className="bg-primary p-1.5 rounded-lg shadow-sm">
                  <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-gray-900">Avishkar</span>
          </div>

          {/* Center: Location Pill (Compact Premium) */}
          <button 
             onClick={() => setIsMobileMenuOpen(true)}
             className="flex items-center gap-1.5 bg-teal-light px-3 py-1.5 rounded-full border border-green-100 active:scale-95 transition-transform"
          >
              <MapPin className="h-3.5 w-3.5 text-primary fill-current" />
              <span className="text-xs font-bold text-primary truncate max-w-[100px]">{selectedLocation}</span>
              <ChevronDown className="h-3 w-3 text-primary opacity-50" />
          </button>

          {/* Right: Burger */}
          <button 
             onClick={() => setIsMobileMenuOpen(true)}
             className="p-2 -mr-2 text-gray-700 active:bg-gray-100 rounded-full"
          >
              <Menu className="h-6 w-6 stroke-[1.5]" />
          </button>
      </div>


      {/* ==============================================
          MOBILE: SLIDE-OUT MENU
      ============================================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
             className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
             onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Container */}
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl animate-slide-in-right flex flex-col">
             
             {/* Header */}
             <div className="px-6 pt-12 pb-6 flex justify-between items-start">
                 <div>
                     <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                     <p className="text-sm text-gray-400">Navigate comfortably</p>
                 </div>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                     <X className="h-5 w-5 text-gray-500" />
                 </button>
             </div>

             {/* Links */}
             <div className="flex-1 overflow-y-auto px-6 space-y-1">
                {navLinks.map((item) => {
                   const Icon = getIconForView(item.view);
                   return (
                      <button
                        key={item.name}
                        onClick={() => {
                           onNavigate(item.view);
                           setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-4 transition-all ${
                            currentView === item.view 
                            ? 'bg-primary text-white shadow-md shadow-green-500/20' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                         <Icon className={`h-5 w-5 ${currentView === item.view ? 'text-white' : 'text-gray-400'}`} />
                         <span className={`text-sm font-medium ${currentView === item.view ? 'font-bold' : ''}`}>
                             {item.name}
                         </span>
                         {currentView !== item.view && <ChevronRight className="h-4 w-4 ml-auto text-gray-300" />}
                      </button>
                   );
                })}
             </div>

             {/* Bottom Profile Section */}
             <div className="p-6 mt-auto border-t border-gray-100 bg-gray-50">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold">
                         {isLoggedIn ? 'RJ' : <User className="h-5 w-5" />}
                     </div>
                     <div>
                         <p className="text-sm font-bold text-gray-900">{isLoggedIn ? 'Rahul Jain' : 'Guest User'}</p>
                         <p className="text-xs text-primary font-medium">{isLoggedIn ? '+91 98765 43210' : 'Login to view reports'}</p>
                     </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3">
                     <button 
                        className="flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl text-sm font-bold text-gray-700 shadow-sm"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                     >
                         <ShoppingCart className="h-4 w-4" /> Cart
                     </button>
                     
                     {isLoggedIn ? (
                        <button 
                           onClick={() => { onLogout(); setIsMobileMenuOpen(false); }}
                           className="flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl text-sm font-bold shadow-sm"
                        >
                            <LogOut className="h-4 w-4" /> Logout
                        </button>
                     ) : (
                        <button 
                           onClick={() => { onNavigate(View.LOGIN); setIsMobileMenuOpen(false); }}
                           className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold shadow-md"
                        >
                            <LogOut className="h-4 w-4" /> Login
                        </button>
                     )}
                 </div>
             </div>
          </div>
        </div>
      )}

      {/* ==============================================
          MOBILE: BOTTOM NAVIGATION
      ============================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-[50] pb-safe">
          <div className="grid grid-cols-5 items-end h-[60px] pb-1.5 relative">
             
             <button onClick={() => onNavigate(View.HOME)} className={`flex flex-col items-center gap-1 h-full justify-center ${currentView === View.HOME ? 'text-primary' : 'text-gray-400'}`}>
                 <Home className="h-6 w-6" strokeWidth={currentView === View.HOME ? 2.5 : 2} />
                 <span className="text-[10px] font-medium">Home</span>
             </button>
             
             <button onClick={() => onNavigate(View.SERVICES)} className={`flex flex-col items-center gap-1 h-full justify-center ${currentView === View.SERVICES ? 'text-primary' : 'text-gray-400'}`}>
                 <TestTube className="h-6 w-6" strokeWidth={currentView === View.SERVICES ? 2.5 : 2} />
                 <span className="text-[10px] font-medium">Tests</span>
             </button>

             {/* Center FAB */}
             <div className="relative -top-6 flex justify-center">
                 <button 
                    onClick={() => onNavigate(View.APPOINTMENT)}
                    className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center text-white border-[3px] border-white active:scale-95 transition-transform"
                 >
                     <Plus className="h-7 w-7" />
                 </button>
             </div>

             <button onClick={() => onNavigate(View.REPORT_DOWNLOAD)} className={`flex flex-col items-center gap-1 h-full justify-center ${currentView === View.REPORT_DOWNLOAD ? 'text-primary' : 'text-gray-400'}`}>
                 <FileText className="h-6 w-6" strokeWidth={currentView === View.REPORT_DOWNLOAD ? 2.5 : 2} />
                 <span className="text-[10px] font-medium">Reports</span>
             </button>

             <button onClick={() => onNavigate(isLoggedIn ? View.DASHBOARD : View.LOGIN)} className={`flex flex-col items-center gap-1 h-full justify-center ${currentView === View.DASHBOARD || currentView === View.LOGIN ? 'text-primary' : 'text-gray-400'}`}>
                 <User className="h-6 w-6" strokeWidth={currentView === View.DASHBOARD || currentView === View.LOGIN ? 2.5 : 2} />
                 <span className="text-[10px] font-medium">{isLoggedIn ? 'Account' : 'Login'}</span>
             </button>

          </div>
      </div>
    </>
  );
};

export default Navbar;
