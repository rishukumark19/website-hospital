
import React, { useState } from 'react';
import { X, FileText, Loader2, Download, AlertTriangle } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [patientId, setPatientId] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [reportReady, setReportReady] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!patientId || !phone) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Simulate API lookup
    setTimeout(() => {
      setIsLoading(false);
      // Mock validation success
      setReportReady(true);
    }, 1500);
  };

  const handleClose = () => {
    setPatientId('');
    setPhone('');
    setError('');
    setReportReady(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={handleClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 text-center border-b border-gray-100 bg-gray-50">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-secondary">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-primary">Download Report</h3>
          <p className="text-sm text-gray-500 mt-1">Access your test results securely online.</p>
        </div>

        <div className="p-6">
          {!reportReady ? (
            <form onSubmit={handleSearch} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> {error}
                </div>
              )}
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Patient ID / UHID</label>
                <input 
                  type="text" 
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  placeholder="e.g. PID-123456"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Registered Mobile</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Search Reports'}
              </button>
            </form>
          ) : (
            <div className="text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm">
                Report found for <strong>{patientId}</strong>
              </div>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-secondary hover:bg-blue-50 transition-all group">
                   <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded text-red-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-800 text-sm">Blood Test Report</p>
                        <p className="text-xs text-gray-500">Dated: 12 Oct 2023</p>
                      </div>
                   </div>
                   <Download className="h-5 w-5 text-gray-400 group-hover:text-secondary" />
                </button>
              </div>

              <button 
                onClick={handleClose}
                className="mt-6 text-sm text-gray-500 hover:text-primary font-medium"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
