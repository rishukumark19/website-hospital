
import React, { useState } from 'react';
import { View } from '../types';
import { Home, Clock, ShieldCheck, MapPin, User, Phone, CheckCircle, Loader2 } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const HomeCollection: React.FC<Props> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    timeSlot: 'Morning (7AM - 11AM)',
    tests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.phone || !formData.address) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo(0,0);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border-t-4 border-green-500 animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Request Received!</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Our phlebotomist will contact you shortly at <strong>{formData.phone}</strong> to confirm the visit time.
          </p>
          <button 
            onClick={() => onNavigate(View.HOME)}
            className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Home Sample Collection</h1>
                <p className="text-green-100 text-lg max-w-xl">
                    Get your blood tests done from the comfort of your home. Safe, hygienic, and convenient.
                </p>
            </div>
            <div className="hidden md:block">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                     <div className="flex items-center gap-4 mb-3">
                         <ShieldCheck className="h-8 w-8 text-secondary" />
                         <div>
                             <p className="font-bold text-lg">100% Safe</p>
                             <p className="text-xs text-green-100">Vaccinated Staff</p>
                         </div>
                     </div>
                     <div className="flex items-center gap-4">
                         <Clock className="h-8 w-8 text-secondary" />
                         <div>
                             <p className="font-bold text-lg">On Time</p>
                             <p className="text-xs text-green-100">6 AM - 8 PM</p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Form Section */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-20 -mt-20 lg:mt-0">
                <h2 className="text-2xl font-bold text-primary mb-6">Book a Visit</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Patient Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <input 
                                type="tel" 
                                required
                                pattern="[0-9]{10}"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                placeholder="10-digit mobile"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Address / Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <input 
                                type="text" 
                                required
                                value={formData.address}
                                onChange={e => setFormData({...formData, address: e.target.value})}
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                placeholder="House No, Colony, City"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
                        <div className="relative">
                            <Clock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <select 
                                value={formData.timeSlot}
                                onChange={e => setFormData({...formData, timeSlot: e.target.value})}
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none"
                            >
                                <option>Morning (7AM - 11AM)</option>
                                <option>Afternoon (11AM - 3PM)</option>
                                <option>Evening (3PM - 7PM)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tests Required (Optional)</label>
                        <textarea 
                            value={formData.tests}
                            onChange={e => setFormData({...formData, tests: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 h-24 resize-none"
                            placeholder="e.g. CBC, Thyroid, Sugar..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Request Home Collection'}
                    </button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                        *Standard visiting charges may apply based on location.
                    </p>
                </form>
            </div>

            {/* Info Section */}
            <div className="lg:pl-10 space-y-10">
                 <div>
                    <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Home Collection?</h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Zero Hassle', desc: 'Skip the traffic and waiting queues. We come to you.' },
                            { title: 'Safety First', desc: 'Our phlebotomists follow strict hygiene and safety protocols.' },
                            { title: 'Flexible Timing', desc: 'Choose a time slot that fits your schedule, from 6 AM to 8 PM.' },
                            { title: 'Quick Reports', desc: 'Get reports delivered to your email/WhatsApp within 24 hours.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-secondary flex items-center justify-center font-bold flex-shrink-0 border border-green-100">
                                    <CheckCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                     <h3 className="font-bold text-primary text-lg mb-2">Areas We Serve</h3>
                     <p className="text-gray-600 leading-relaxed">
                         We currently serve Bank More, Hirapur, Saraidhela, Jharia, Govindpur, Dhansar, and surrounding areas of Dhanbad within a 15km radius.
                     </p>
                 </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
