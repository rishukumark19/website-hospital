
import React, { useState } from 'react';
import { View } from '../types';
import { Smartphone, Lock, ArrowRight, Loader2, MessageCircle, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onNavigate: (view: View) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  const [method, setMethod] = useState<'otp' | 'whatsapp'>('otp');
  const [step, setStep] = useState<'input' | 'verify'>('input');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsLoading(true);
    // Simulate API
    setTimeout(() => {
      setIsLoading(false);
      setStep('verify');
    }, 1500);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setIsLoading(true);
    // Simulate API
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  const handleWhatsAppLogin = () => {
    setIsLoading(true);
    // Simulate WhatsApp Redirect / Auth
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Left Banner */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12 text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-lg">
             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <ShieldCheck className="h-8 w-8 text-white" />
             </div>
             <h1 className="text-4xl font-bold mb-6">Your Health, Secured.</h1>
             <p className="text-lg text-green-100 leading-relaxed mb-8">
                Access your reports, book appointments, and manage family health records in one secure place.
             </p>
             <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Check className="h-4 w-4" /></div>
                     <span>NABL Accredited Reports</span>
                 </li>
                 <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Check className="h-4 w-4" /></div>
                     <span>Data Encryption Standard</span>
                 </li>
                 <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Check className="h-4 w-4" /></div>
                     <span>24/7 Access</span>
                 </li>
             </ul>
          </div>
      </div>

      {/* Right Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-md w-full">
              
              <div className="text-center mb-8 md:hidden">
                 <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                 <p className="text-gray-500 text-sm">Sign in to access your dashboard</p>
              </div>

              {/* Method Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-200 rounded-xl mb-8">
                  <button 
                    onClick={() => setMethod('otp')}
                    className={`py-2.5 rounded-lg text-sm font-bold transition-all ${method === 'otp' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                      Mobile OTP
                  </button>
                  <button 
                    onClick={() => setMethod('whatsapp')}
                    className={`py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${method === 'whatsapp' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                  </button>
              </div>

              {method === 'otp' ? (
                  <>
                     {step === 'input' ? (
                        <form onSubmit={handleSendOTP} className="space-y-5 animate-fade-in">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                    <input 
                                        type="tel" 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg tracking-wide transition-all"
                                        placeholder="10-digit number"
                                        maxLength={10}
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isLoading || phone.length < 10}
                                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/10 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Get OTP <ArrowRight className="h-5 w-5" /></>}
                            </button>
                        </form>
                     ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-6 animate-fade-in">
                            <div className="text-center">
                                <p className="text-gray-500 mb-4">Enter the 4-digit code sent to <span className="text-gray-900 font-bold">+91 {phone}</span></p>
                                <input 
                                    type="text" 
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-3xl tracking-[0.5em] text-center font-bold text-gray-800 transition-all"
                                    placeholder="••••"
                                    maxLength={4}
                                    autoFocus
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={isLoading || otp.length < 4}
                                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/10 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Verify & Login'}
                            </button>
                            <button 
                                type="button" 
                                onClick={() => { setStep('input'); setOtp(''); }}
                                className="w-full text-sm text-gray-500 font-medium hover:text-primary transition-colors"
                            >
                                Change Mobile Number
                            </button>
                        </form>
                     )}
                  </>
              ) : (
                  <div className="text-center animate-fade-in py-8">
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                          <MessageCircle className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Login via WhatsApp</h3>
                      <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                          We will send a secure login link to your WhatsApp number. Quick and passwordless.
                      </p>
                      <button 
                        onClick={handleWhatsAppLogin}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                         {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Continue with WhatsApp <ArrowRight className="h-5 w-5" /></>}
                      </button>
                  </div>
              )}

              <div className="mt-10 text-center">
                 <p className="text-xs text-gray-400">
                    By logging in, you agree to our <button onClick={() => onNavigate(View.TERMS)} className="text-primary hover:underline">Terms</button> & <button onClick={() => onNavigate(View.PRIVACY)} className="text-primary hover:underline">Privacy Policy</button>.
                 </p>
              </div>

          </div>
      </div>
    </div>
  );
};

const Check: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
)

export default Login;
