import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages, quickActions } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import TestimonialCard from '../components/TestimonialCard';
import { 
  ArrowRight, 
  MapPin, 
  Home as HomeIcon, 
  FileText, 
  Microscope, 
  Users, 
  Clock, 
  Award,
  ChevronRight,
  Activity,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  const handleQuickAction = (link: string) => {
    if (link === '/locator') onNavigate(View.LOCATOR);
    else if (link === '/book-visit') setIsBookingModalOpen(true);
    else if (link === '/reports') setIsReportModalOpen(true);
  };

  const iconMap: Record<string, React.ElementType> = {
    Home: HomeIcon,
    MapPin: MapPin,
    FileText: FileText
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bank More, Dhanbad",
      rating: 5,
      text: "The home collection service was incredibly punctual. The phlebotomist was professional and painless. Got reports on email same day!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Rahul Verma",
      location: "Jharia",
      rating: 5,
      text: "Avishkar is the only place I trust for my parents' diabetes monitoring. Accurate reports and very helpful staff.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Anjali Gupta",
      location: "Hirapur",
      rating: 4,
      text: "Very clean and hygienic lab. The wait time was minimal and the staff guided me well for my MRI scan.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Vikram Singh",
      location: "Govindpur",
      rating: 5,
      text: "Best diagnostic center in Dhanbad. Their full body package covers everything at a very reasonable price.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 pt-12 pb-32 md:pt-24 md:pb-48 overflow-hidden">
        
        {/* Medical Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(#86efac 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
        }}></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-200 text-primary font-bold text-xs rounded-full mb-6 tracking-wide shadow-sm animate-fade-in">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>NABL Accredited & ISO Certified Lab in Dhanbad</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-6 tracking-tight">
                Avishkar Diagnostic <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">A Step Towards Life</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Advanced pathology and radiology services delivered with care at Bank More, Dhanbad. 
                Experience faster turnaround times and 100% accurate reports from our world-class facilities.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full sm:w-auto bg-primary hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 hover:-translate-y-1"
                  aria-label="Book a home visit for sample collection"
                >
                  <HomeIcon className="h-5 w-5" /> Book Home Visit
                </button>
                <button 
                  onClick={() => onNavigate(View.LOCATOR)}
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 hover:border-primary/30"
                  aria-label="Find the nearest lab location"
                >
                  <MapPin className="h-5 w-5 text-secondary" /> Find Our Lab
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div> Bank More, Dhanbad
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div> Smart Reports
                </div>
              </div>
            </div>

            {/* Right Image Layer - Avishkar Style */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
              
              {/* Abstract Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-teal-light rounded-full blur-3xl opacity-60"></div>
              
              {/* Main Image - Busy Modern Reception */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
                  alt="Avishkar Diagnostic Centre Reception Bank More Dhanbad" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient Overlay for Text Visibility if needed, kept subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
              </div>

              {/* Floating Card 1 - Technology */}
              <div className="absolute -left-6 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce-slow hidden sm:flex max-w-[200px]">
                <div className="bg-green-100 p-2.5 rounded-lg text-primary">
                  <Microscope className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Technology</p>
                  <p className="text-primary font-bold text-sm leading-tight">Advanced Lab</p>
                </div>
              </div>

              {/* Floating Card 2 - Accreditation */}
              <div className="absolute -right-4 bottom-10 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce-delayed hidden sm:flex">
                <div className="bg-red-100 p-2.5 rounded-lg text-secondary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Quality</p>
                  <p className="text-primary font-bold text-sm leading-tight">ISO Certified</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Quick Actions Bar (Floating) */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 md:-mt-28">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 backdrop-blur-xl bg-white/95">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {quickActions.map((action, index) => {
              const Icon = iconMap[action.iconName] || FileText;
              return (
                <div 
                  key={index} 
                  onClick={() => handleQuickAction(action.link)}
                  className="group flex items-center gap-4 p-4 cursor-pointer hover:bg-green-50 rounded-xl transition-colors"
                  role="button"
                  tabIndex={0}
                  aria-label={action.title}
                >
                  <div className="w-14 h-14 bg-green-50 group-hover:bg-primary group-hover:text-white text-primary rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">{action.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-secondary font-medium mt-1">
                      <span>Proceed</span>
                      <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* NEW: Health Concerns Grid Section */}
      <HealthConcerns onNavigate={onNavigate} />

      {/* 3. Popular Packages */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="packages-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">Best Selling Packages</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive health checkups tailored for every age and lifestyle in Dhanbad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularPackages.slice(0, 4).map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onBook={(id) => onNavigate(View.APPOINTMENT)} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary hover:text-secondary transition-colors pb-1 text-lg"
            >
              View All Health Packages <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section (Feature 1) */}
      <section className="py-20 bg-soft-blue">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is what our patients from Dhanbad have to say about their experience with Avishkar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Stats) - IMPROVED WITH DOCTOR IMAGE */}
      <section className="py-20 bg-green-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">Avishkar?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine technological excellence with a human touch right here in Dhanbad. Our rigorous quality control ensures that every report is accurate, giving you the clarity you need for your health journey.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                    "NABL & CAP Accredited Laboratories",
                    "Home Sample Collection Available",
                    "Smart Reports with Historical Trends",
                    "Affordable & Transparent Pricing"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-green-200 flex items-center justify-center text-secondary flex-shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                            <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                    </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate(View.SERVICES)}
                className="bg-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20"
              >
                Learn More About Us
              </button>
            </div>

            {/* Doctor Image & Stats - Right Side */}
            <div className="order-1 lg:order-2 relative">
                
                {/* Main Image Container - Indian Doctor */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto bg-gray-200">
                    <img 
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                        alt="Dr. Rajesh Kumar at Avishkar Diagnostic Dhanbad" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    
                    {/* Bottom Text in Image */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-lg">Dr. Rajesh Kumar</p>
                        <p className="text-sm opacity-90">Senior Pathologist, Avishkar Diagnostic</p>
                    </div>
                </div>

                {/* Floating Stat 1 - Top Left */}
                <div className="absolute top-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[160px] animate-bounce-slow">
                    <div className="flex items-center gap-3 mb-1">
                        <Users className="h-5 w-5 text-secondary" />
                        <span className="font-bold text-2xl text-primary">10L+</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Happy Patients</p>
                </div>

                {/* Floating Stat 2 - Bottom Right */}
                <div className="absolute bottom-20 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-[180px] animate-bounce-delayed">
                    <div className="flex items-center gap-3 mb-1">
                        <Activity className="h-5 w-5 text-primary" />
                        <span className="font-bold text-2xl text-primary">24hrs</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Report Turnaround</p>
                </div>

            </div>

          </div>
        </div>
      </section>

      {/* AI Promo Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                24/7 AI Health Support
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Chat with AvishkarBot
              </h2>
              <p className="text-green-50 text-lg mb-8 leading-relaxed">
                Unsure about test preparations? Need to understand a medical term? Our AI assistant is here to help you anytime, anywhere.
              </p>
              <button 
                onClick={() => onNavigate(View.ASSISTANT)}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 mx-auto md:mx-0"
              >
                <Activity className="h-5 w-5" /> Start Chatting
              </button>
            </div>
            
             <div className="relative z-10 hidden lg:block">
               <div className="w-72 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                  <div className="flex gap-3 mb-4">
                     <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">AB</div>
                     <div className="bg-white/20 rounded-xl rounded-tl-none p-3 text-sm text-white flex-1">
                        How do I prepare for a Lipid Profile?
                     </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                     <div className="bg-white rounded-xl rounded-tr-none p-3 text-sm text-primary shadow-sm flex-1">
                        Fasting of 10-12 hours is required. Water is allowed.
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
