
import React from 'react';
import { View } from '../types';
import { popularPackages } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import { ShieldCheck, HeartPulse, Activity, UserCheck, Star } from 'lucide-react';

const Wellness: React.FC = () => {
  
  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'full', label: 'Full Body' },
    { id: 'women', label: 'Women Health' },
    { id: 'senior', label: 'Senior Citizens' },
    { id: 'chronic', label: 'Chronic Care' },
  ];

  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredPackages = popularPackages.filter(pkg => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'full' && pkg.category === 'Full Body') return true;
    if (activeFilter === 'women' && pkg.category === 'Women') return true;
    if (activeFilter === 'senior' && pkg.category === 'Senior') return true;
    if (activeFilter === 'chronic' && pkg.category === 'Chronic') return true;
    return false;
  });

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="h-4 w-4 text-secondary" /> Preventive Care
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wellness & Health Packages</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Prevention is better than cure. Choose from our range of scientifically designed health checkup packages to stay ahead of your health.
            </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Benefits Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
                { icon: UserCheck, label: 'Expert Consultation' },
                { icon: Activity, label: 'Smart Reports' },
                { icon: HeartPulse, label: 'Cardiac Profiling' },
                { icon: Star, label: 'NABL Accredited' },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 text-sm font-bold text-gray-700">
                    <item.icon className="h-5 w-5 text-secondary" /> {item.label}
                </div>
            ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                        activeFilter === cat.id 
                        ? 'bg-primary text-white shadow-lg shadow-blue-900/20' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-secondary hover:text-secondary'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
            ))}
        </div>

        {filteredPackages.length === 0 && (
             <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-500">No packages found for this category.</p>
                <button onClick={() => setActiveFilter('all')} className="mt-2 text-secondary font-bold hover:underline">View All Packages</button>
             </div>
        )}

        {/* Info Section */}
        <div className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
             <div className="flex-1">
                 <h2 className="text-3xl font-bold text-primary mb-4">Why regular checkups matter?</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                     Lifestyle diseases like Diabetes, Hypertension, and Heart issues are silent killers. Regular screening helps detect these conditions early when they are most treatable.
                 </p>
                 <ul className="space-y-3 mb-6">
                     <li className="flex items-center gap-3 text-gray-700 font-medium">
                         <div className="w-2 h-2 rounded-full bg-secondary"></div> Early Detection of Risk Factors
                     </li>
                     <li className="flex items-center gap-3 text-gray-700 font-medium">
                         <div className="w-2 h-2 rounded-full bg-secondary"></div> Monitor Existing Conditions
                     </li>
                     <li className="flex items-center gap-3 text-gray-700 font-medium">
                         <div className="w-2 h-2 rounded-full bg-secondary"></div> Peace of Mind
                     </li>
                 </ul>
             </div>
             <div className="flex-1 w-full max-w-md">
                 <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" alt="Wellness" className="rounded-2xl shadow-xl w-full" />
             </div>
        </div>

      </div>
    </div>
  );
};

export default Wellness;
