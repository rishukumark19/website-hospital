
import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import TestimonialCard from '../components/TestimonialCard';
import { 
  MapPin, 
  Search, 
  Upload,
  ChevronDown,
  ShieldCheck,
  Star,
  CheckCircle2,
  Users,
  Activity,
  ArrowRight
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState('');
  
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

      {/* 
        HERO SECTION
      */}
      <section className="relative bg-gradient-to-r from-purple-50 via-white to-green-50 overflow-visible pt-12 pb-20 md:pb-32">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
             <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
                
                {/* 1. Doctor Image - Positioned Left */}
                <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-start order-2 lg:order-1">
                     {/* Desktop Image - Standing Tall */}
                     <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" 
                        alt="Avishkar Doctor" 
                        className="relative z-10 max-h-[350px] md:max-h-[500px] object-contain drop-shadow-2xl filter brightness-105" 
                        loading="eager"
                     />
                     {/* Circle BG behind doctor */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-t from-primary/10 to-transparent rounded-full -z-10"></div>
                     
                     {/* Floating Badge */}
                     <div className="absolute top-20 right-0 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 animate-bounce-slow hidden md:block">
                        <div className="flex items-center gap-2">
                           <div className="p-2 bg-green-100 rounded-lg text-primary">
                             <ShieldCheck className="h-5 w-5" />
                           </div>
                           <div>
                             <p className="text-xs font-bold text-gray-500">NABL Accredited</p>
                             <p className="text-sm font-bold text-gray-800">ISO 9001:2015</p>
                           </div>
                        </div>
                     </div>
                </div>

                {/* 2. Content & Action Strip */}
                <div className="w-full lg:w-7/12 order-1 lg:order-2">
                    
                    {/* Headline - Clean & Professional */}
                    <div className="text-center lg:text-left mb-10">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary mb-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Trusted by 10 Lakh+ Patients
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 tracking-tight">
                           Precision Diagnostics<br/>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">You Can Trust</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-light">
                           Experience world-class pathology and radiology services with Dhanbad's most advanced laboratory. Accurate reports, timely delivery.
                        </p>
                    </div>

                    {/* 
                       THE AESTHETIC ACTION STRIP 
                    */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 flex flex-col md:flex-row items-stretch gap-2 max-w-4xl mx-auto lg:mx-0 relative z-20">
                        
                        {/* Segment 1: Location Dropdown */}
                        <div className="flex items-center gap-4 px-4 py-3 bg-gray-50/80 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors md:min-w-[220px] group border border-transparent hover:border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-amber-500 group-hover:scale-110 transition-transform">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</span>
                                <span className="font-bold text-gray-800 text-sm flex items-center gap-1 group-hover:text-primary transition-colors">
                                    Bank More <ChevronDown className="h-3 w-3 text-gray-400" />
                                </span>
                            </div>
                        </div>

                        {/* Segment 2: Search Input */}
                        <div className="flex-grow flex items-center gap-4 px-4 py-3 bg-white border border-gray-100 rounded-2xl focus-within:ring-2 focus-within:ring-primary/10 transition-all shadow-inner">
                             <Search className="h-5 w-5 text-gray-400" />
                             <input 
                                type="text"
                                value={heroSearch}
                                onChange={(e) => setHeroSearch(e.target.value)}
                                placeholder="Search for Tests (e.g. CBC, Lipid)..."
                                className="w-full bg-transparent border-none outline-none text-gray-700 font-medium placeholder-gray-400"
                             />
                        </div>

                        {/* Segment 3: Upload Rx Button */}
                        <button 
                             onClick={() => setIsReportModalOpen(true)}
                             className="bg-gradient-to-r from-secondary to-red-600 text-white hover:from-red-600 hover:to-red-700 px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 group whitespace-nowrap transform active:scale-95"
                        >
                            <Upload className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                            <span>Upload Rx</span>
                        </button>
                    </div>

                    {/* Quick Tags under Search */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                        {['Full Body Checkup', 'Diabetes', 'Thyroid', 'Fever Panel'].map(tag => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-white/60 px-3 py-1 rounded-full border border-gray-100 cursor-pointer hover:border-primary/30 hover:text-primary transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </div>
      </section>

      {/* Stats Section - Clean Strip */}
      <div className="bg-white border-b border-gray-100 relative z-20 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 py-6">
                <div className="text-center px-4">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">10L+</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Patients</p>
                </div>
                <div className="text-center px-4">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">24/7</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Support</p>
                </div>
                <div className="text-center px-4">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">500+</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Tests</p>
                </div>
                <div className="text-center px-4 hidden md:block">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">15+</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Years Exp.</p>
                </div>
            </div>
        </div>
      </div>

      <HealthConcerns onNavigate={onNavigate} />

      {/* Popular Packages */}
      <section className="py-20 bg-soft-blue" aria-labelledby="packages-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">Best Selling Packages</h2>
                <p className="text-gray-600 text-lg">
                Comprehensive health checkups tailored for every age and lifestyle in Dhanbad.
                </p>
            </div>
            <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Packages <ArrowRight className="h-5 w-5" />
            </button>
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

          <div className="mt-8 md:hidden text-center">
             <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="text-primary font-bold flex items-center justify-center gap-2 mx-auto"
            >
              View All Packages <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                 Testimonials
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is what our patients from Dhanbad have to say.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm font-bold text-gray-500">
               <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</span>
               <span>•</span>
               <span>2000+ Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">Avishkar?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine technological excellence with a human touch right here in Dhanbad. Our rigorous quality control ensures that every report is accurate.
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
                onClick={() => onNavigate(View.ABOUT)}
                className="bg-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20"
              >
                Learn More About Us
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto bg-gray-200 group">
                    <img 
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                        alt="Dr. Rajesh Kumar at Avishkar Diagnostic Dhanbad" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-xl">Dr. Rajesh Kumar</p>
                        <p className="text-sm opacity-90 font-medium">Senior Pathologist, Avishkar Diagnostic</p>
                    </div>
                </div>

                <div className="absolute top-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[160px] animate-bounce-slow">
                    <div className="flex items-center gap-3 mb-1">
                        <Users className="h-5 w-5 text-secondary" />
                        <span className="font-bold text-2xl text-primary">10L+</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Happy Patients</p>
                </div>

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

    </div>
  );
};

export default Home;
