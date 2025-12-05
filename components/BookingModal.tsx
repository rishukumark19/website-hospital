import React, { useState } from 'react';
import { X, CheckCircle, Loader2, MapPin, Calendar, Phone, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'New York',
    date: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Simple 10-digit validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.date) newErrors.date = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', phone: '', city: 'New York', date: '' });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h3>
            <p className="text-gray-500 mb-8">
              Thank you! Our agent will call you shortly to confirm your home visit.
            </p>
            <button 
              onClick={handleClose}
              className="w-full bg-primary hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary">Book Home Visit</h2>
              <p className="text-sm text-gray-500">Enter your details and we'll reach out to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="(555) 000-0000"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                <div className="relative group">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <select 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                  >
                    <option>New York</option>
                    <option>Brooklyn</option>
                    <option>Queens</option>
                    <option>Staten Island</option>
                    <option>Manhattan</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                  />
                </div>
                {errors.date && <p className="text-red-500 text-xs mt-1 ml-1">{errors.date}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-secondary hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] mt-2 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;