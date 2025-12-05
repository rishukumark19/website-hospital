
import React, { useState } from 'react';
import { View } from '../types';
import { FileText, Lock, Smartphone, Download, Loader2, ArrowRight, Eye, RefreshCw, CheckCircle, Search } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ReportDownload: React.FC<Props> = ({ onNavigate }) => {
  const [step, setStep] = useState<'LOGIN' | 'OTP' | 'DASHBOARD'>('LOGIN');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock Reports
  const reports = [
    { id: 'R10293', date: '25 Oct 2023', test: 'Complete Blood Count (CBC)', status: 'Ready', type: 'Pathology' },
    { id: 'R10294', date: '25 Oct 2023', test: 'Lipid Profile', status: 'Ready', type: 'Pathology' },
    { id: 'R10155', date: '10 Sep 2023', test: 'MRI Brain Plain', status: 'Ready', type: 'Radiology' },
    { id: 'R09882', date: '12 Aug 2023', test: 'Thyroid Profile', status: 'Ready', type: 'Pathology' },
  ];

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setStep('OTP');
    }, 1500);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setStep('DASHBOARD');
    }, 1500);
  };

  const renderLogin = () => (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Lock className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Secure Report Access</h2>
            <p className="text-gray-500 mt-2">Enter your registered mobile number to view your lab reports.</p>
        </div>
        <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                <div className="relative">
                    <Smartphone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input 
                        type="tel" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-lg tracking-wide"
                        maxLength={10}
                    />
                </div>
            </div>
            <button 
                type="submit" 
                disabled={isLoading || phone.length < 10}
                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/10 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Send OTP <ArrowRight className="h-5 w-5" /></>}
            </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
            <Lock className="h-3 w-3" /> Your data is encrypted and secure.
        </p>
    </div>
  );

  const renderOTP = () => (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Smartphone className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Verify OTP</h2>
            <p className="text-gray-500 mt-2">Enter the 6-digit code sent to <span className="font-bold text-gray-800">+91 {phone}</span></p>
        </div>
        <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
                <input 
                    type="text" 
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    placeholder="• • • • • •"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-3xl tracking-[0.5em] text-center font-bold text-gray-700"
                    maxLength={6}
                />
            </div>
            <button 
                type="submit" 
                disabled={isLoading || otp.length < 4}
                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/10 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'View Reports'}
            </button>
        </form>
        <div className="text-center mt-6">
            <button onClick={() => setStep('LOGIN')} className="text-sm text-secondary font-bold hover:underline">
                Change Number
            </button>
        </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="p-6 md:p-8 bg-primary text-white flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold">Your Reports</h2>
                    <p className="text-green-100 opacity-90">Welcome back! You have {reports.length} reports available.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm transition-colors flex items-center gap-2">
                        <RefreshCw className="h-4 w-4" /> Refresh
                    </button>
                    <button onClick={() => setStep('LOGIN')} className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                        Logout
                    </button>
                </div>
            </div>

            <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-200">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by test name or date..." 
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                </div>
            </div>

            <div className="divide-y divide-gray-100">
                {reports.map((report) => (
                    <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row items-center justify-between gap-6 group">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${report.type === 'Radiology' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">{report.test}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                    <span>{report.date}</span>
                                    <span>•</span>
                                    <span className="text-gray-400">ID: {report.id}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" /> Ready
                             </span>
                             <button className="p-2 text-gray-400 hover:text-primary hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200">
                                <Eye className="h-5 w-5" />
                             </button>
                             <button className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center gap-2">
                                <Download className="h-4 w-4" /> Download
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {step === 'LOGIN' && renderLogin()}
         {step === 'OTP' && renderOTP()}
         {step === 'DASHBOARD' && renderDashboard()}
      </div>
    </div>
  );
};

export default ReportDownload;
