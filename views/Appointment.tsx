
import React, { useState } from 'react';
import { View } from '../types';
import { Calendar, Clock, User, Phone, MapPin, TestTube, AlertCircle, Loader2, CheckCircle, ArrowRight, ArrowLeft, Home, Building2, Search, X } from 'lucide-react';
import { testDirectory } from '../data/mockData';

const Appointment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceType: 'home', // 'home' or 'center'
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    selectedTests: [] as string[],
    agreed: false
  });

  const [testSearch, setTestSearch] = useState('');

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Helper to toggle test selection
  const toggleTest = (testId: string) => {
    setFormData(prev => {
        const tests = prev.selectedTests.includes(testId)
            ? prev.selectedTests.filter(id => id !== testId)
            : [...prev.selectedTests, testId];
        return { ...prev, selectedTests: tests };
    });
  };

  const calculateTotal = () => {
      return formData.selectedTests.reduce((total, testId) => {
          const test = testDirectory.find(t => t.id === testId);
          return total + (test?.price || 0);
      }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        window.scrollTo(0,0);
    }, 2000);
  };

  if (isSuccess) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border-t-4 border-green-500 animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-6">
                Your appointment ID is <strong>#AV8839</strong>. We have sent a confirmation SMS to {formData.phone}.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-left text-sm text-gray-600 mb-8 space-y-2">
                <div className="flex justify-between"><span>Date:</span> <span className="font-bold text-gray-800">{formData.date}</span></div>
                <div className="flex justify-between"><span>Time:</span> <span className="font-bold text-gray-800">{formData.timeSlot}</span></div>
                <div className="flex justify-between"><span>Type:</span> <span className="font-bold text-gray-800 uppercase">{formData.serviceType}</span></div>
            </div>
            <button 
                onClick={() => window.location.reload()}
                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all"
            >
                Book Another
            </button>
            </div>
        </div>
      )
  }

  // --- STEPS COMPONENTS ---

  const Step1ServiceType = () => (
      <div className="animate-in slide-in-from-right duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How would you like to get tested?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                onClick={() => setFormData({...formData, serviceType: 'home'})}
                className={`cursor-pointer p-8 rounded-2xl border-2 transition-all hover:shadow-lg flex flex-col items-center text-center gap-4 ${formData.serviceType === 'home' ? 'border-primary bg-green-50' : 'border-gray-100 bg-white'}`}
              >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${formData.serviceType === 'home' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Home className="h-8 w-8" />
                  </div>
                  <div>
                      <h3 className="font-bold text-lg text-gray-800">Home Collection</h3>
                      <p className="text-sm text-gray-500 mt-1">Our phlebotomist visits your home.</p>
                  </div>
              </div>

              <div 
                onClick={() => setFormData({...formData, serviceType: 'center'})}
                className={`cursor-pointer p-8 rounded-2xl border-2 transition-all hover:shadow-lg flex flex-col items-center text-center gap-4 ${formData.serviceType === 'center' ? 'border-primary bg-green-50' : 'border-gray-100 bg-white'}`}
              >
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center ${formData.serviceType === 'center' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Building2 className="h-8 w-8" />
                  </div>
                  <div>
                      <h3 className="font-bold text-lg text-gray-800">Visit Center</h3>
                      <p className="text-sm text-gray-500 mt-1">Visit our lab at Bank More.</p>
                  </div>
              </div>
          </div>
      </div>
  );

  const Step2DateTime = () => (
      <div className="animate-in slide-in-from-right duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Date & Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
                  />
              </div>
              <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Time Slot</label>
                  <div className="grid grid-cols-2 gap-3">
                      {['07:00 - 09:00', '09:00 - 11:00', '11:00 - 13:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map(slot => (
                          <button
                            key={slot}
                            onClick={() => setFormData({...formData, timeSlot: slot})}
                            className={`py-3 px-2 rounded-lg text-sm font-medium border transition-all ${formData.timeSlot === slot ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
                          >
                              {slot}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );

  const Step3Details = () => (
      <div className="animate-in slide-in-from-right duration-300 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                      <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Patient Name"
                      />
                  </div>
              </div>
              <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                      <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="10-digit Mobile"
                      />
                  </div>
              </div>
          </div>
          
          {formData.serviceType === 'home' && (
              <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Collection Address</label>
                  <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                      <textarea 
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 h-24 resize-none"
                        placeholder="Full Address with Landmark"
                      />
                  </div>
              </div>
          )}
      </div>
  );

  const Step4Tests = () => {
      const filtered = testDirectory.filter(t => t.name.toLowerCase().includes(testSearch.toLowerCase()));
      
      return (
        <div className="animate-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Tests</h2>
            <p className="text-gray-500 mb-6 text-sm">Search and add tests to your booking.</p>
            
            <div className="relative mb-6">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input 
                    type="text" 
                    value={testSearch}
                    onChange={e => setTestSearch(e.target.value)}
                    placeholder="Search tests (e.g. CBC, Thyroid)..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
                />
            </div>

            <div className="h-64 overflow-y-auto border border-gray-100 rounded-xl mb-6 bg-gray-50 p-2 space-y-2">
                {filtered.map(test => {
                    const isSelected = formData.selectedTests.includes(test.id);
                    return (
                        <div 
                            key={test.id} 
                            onClick={() => toggleTest(test.id)}
                            className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${isSelected ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                        >
                            <div className="flex-1">
                                <p className="font-bold text-sm">{test.name}</p>
                                <p className={`text-xs ${isSelected ? 'text-green-100' : 'text-gray-500'}`}>₹{test.price}</p>
                            </div>
                            {isSelected && <CheckCircle className="h-5 w-5" />}
                        </div>
                    )
                })}
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                 <h3 className="font-bold text-gray-800 mb-2">Selected Tests ({formData.selectedTests.length})</h3>
                 <div className="flex flex-wrap gap-2 mb-4">
                     {formData.selectedTests.length === 0 && <p className="text-sm text-gray-400 italic">No tests selected yet.</p>}
                     {formData.selectedTests.map(id => {
                         const t = testDirectory.find(x => x.id === id);
                         return (
                             <span key={id} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold">
                                 {t?.name} <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={(e) => {e.stopPropagation(); toggleTest(id);}} />
                             </span>
                         )
                     })}
                 </div>
                 <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                     <span className="text-gray-500 font-medium">Estimated Total</span>
                     <span className="text-xl font-bold text-primary">₹{calculateTotal()}</span>
                 </div>
            </div>
        </div>
      )
  };

  const Step5Review = () => (
      <div className="animate-in slide-in-from-right duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Confirm</h2>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4 border border-gray-100 mb-6">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Service Type</span>
                  <span className="font-bold text-gray-800 uppercase">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Date & Time</span>
                  <span className="font-bold text-gray-800 text-right">{formData.date} <br/> {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Patient</span>
                  <span className="font-bold text-gray-800 text-right">{formData.name} <br/> {formData.phone}</span>
              </div>
              <div className="flex justify-between pb-2">
                  <span className="text-gray-500">Tests ({formData.selectedTests.length})</span>
                  <span className="font-bold text-primary text-xl">₹{calculateTotal()}</span>
              </div>
          </div>
          
          <label className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.agreed}
                onChange={e => setFormData({...formData, agreed: e.target.checked})}
                className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300"
              />
              <span className="text-sm text-gray-700">I agree to the Terms & Privacy Policy and consent to be contacted.</span>
          </label>
      </div>
  );

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-10">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                <span className={step >= 1 ? 'text-primary' : ''}>Service</span>
                <span className={step >= 2 ? 'text-primary' : ''}>Time</span>
                <span className={step >= 3 ? 'text-primary' : ''}>Details</span>
                <span className={step >= 4 ? 'text-primary' : ''}>Tests</span>
                <span className={step >= 5 ? 'text-primary' : ''}>Confirm</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{width: `${(step/5)*100}%`}}
                ></div>
            </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit}>
                    {step === 1 && <Step1ServiceType />}
                    {step === 2 && <Step2DateTime />}
                    {step === 3 && <Step3Details />}
                    {step === 4 && <Step4Tests />}
                    {step === 5 && <Step5Review />}

                    <div className="mt-10 flex justify-between gap-4">
                        {step > 1 && (
                            <button 
                                type="button" 
                                onClick={prevStep}
                                className="px-6 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft className="h-5 w-5" /> Back
                            </button>
                        )}
                        
                        {step < 5 ? (
                            <button 
                                type="button" 
                                onClick={nextStep}
                                className="ml-auto px-8 py-3 rounded-xl font-bold text-white bg-primary hover:bg-green-700 transition-colors shadow-lg shadow-green-900/10 flex items-center gap-2"
                            >
                                Next Step <ArrowRight className="h-5 w-5" />
                            </button>
                        ) : (
                            <button 
                                type="submit" 
                                disabled={isLoading || !formData.agreed}
                                className="ml-auto w-full md:w-auto px-10 py-3 rounded-xl font-bold text-white bg-primary hover:bg-green-700 transition-colors shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Booking'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Appointment;
