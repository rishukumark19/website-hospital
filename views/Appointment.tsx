import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-green-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-8">
            Thank you for choosing NeuroDiag. We have sent a confirmation email with your appointment details.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-primary font-semibold hover:underline"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg h-full">
               <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
               <div className="space-y-6">
                  <div>
                    <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-1">Address</p>
                    <p>123 Medical Plaza, Suite 100<br/>New York, NY 10010</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                    <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-1">Email</p>
                    <p>appointments@neurodiag.com</p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6 mt-6">
                    <p className="text-sm text-blue-100 italic">
                      "Dedicated to providing precise diagnostics for your peace of mind."
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Book an Appointment</h1>
              <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input required type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="John" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input required type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="Doe" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input required type="tel" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input required type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input required type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all">
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit / Test Required</label>
                   <div className="relative">
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all h-32 resize-none" placeholder="e.g., MRI Scan, Routine Checkup..."></textarea>
                   </div>
                </div>

                <button type="submit" className="w-full bg-secondary hover:bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-[1.01]">
                  Confirm Appointment
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;