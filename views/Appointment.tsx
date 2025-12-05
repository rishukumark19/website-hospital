import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, MapPin, TestTube, Info } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    testType: 'Routine Blood Test',
    collectionType: 'Home Visit',
    date: '',
    time: 'Morning (9AM - 12PM)',
    notes: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-green-500 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-8">
            Thank you for choosing Avishkar Diagnostic. Our team will contact you within 2 hours to confirm your appointment.
          </p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({...formData, agreed: false}); }}
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
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg h-full relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                 <div className="space-y-6">
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Address</p>
                      <p className="flex items-start gap-2"><MapPin className="h-5 w-5 opacity-80" /> Bank More, Dhanbad,<br/>Jharkhand 826001</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                      <p className="text-lg font-semibold flex items-center gap-2"><Phone className="h-5 w-5 opacity-80" /> +91 326 230 XXXX</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Email</p>
                      <p className="flex items-center gap-2"><Mail className="h-5 w-5 opacity-80" /> info@avishkardiagnostic.com</p>
                    </div>
                    
                    <div className="border-t border-white/20 pt-6 mt-6">
                      <p className="text-sm text-green-100 italic">
                        "Dedicated to providing precise diagnostics for your peace of mind."
                      </p>
                    </div>
                 </div>
               </div>
               {/* Decorative Circle */}
               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-2xl"></div>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        required 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                        placeholder="John" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                        placeholder="9876543210" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Service <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <TestTube className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        required
                        name="testType"
                        value={formData.testType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                      >
                        <option>Routine Blood Test</option>
                        <option>Full Body Checkup</option>
                        <option>MRI Scan</option>
                        <option>CT Scan</option>
                        <option>Ultrasound</option>
                        <option>Diabetes Profile</option>
                        <option>Thyroid Profile</option>
                        <option>Other (Specify in notes)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Collection Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        required
                        name="collectionType"
                        value={formData.collectionType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                      >
                        <option>Home Visit</option>
                        <option>Lab Visit (Walk-in)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        required 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        required
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                      >
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements / Symptoms</label>
                   <div className="relative">
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all h-32 resize-none" 
                        placeholder="e.g., Fasting since last night, need wheelchair access..."
                      ></textarea>
                   </div>
                </div>

                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        id="agree" 
                        required 
                        checked={formData.agreed}
                        onChange={(e) => setFormData(prev => ({...prev, agreed: e.target.checked}))}
                        className="w-4 h-4 text-secondary rounded focus:ring-secondary border-gray-300" 
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">I agree to the <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span> and consent to be contacted.</label>
                </div>

                <button type="submit" className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
                  Confirm Appointment <CheckCircle className="h-5 w-5" />
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
