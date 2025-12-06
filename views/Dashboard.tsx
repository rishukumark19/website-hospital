
import React from 'react';
import { View } from '../types';
import { 
  User, 
  Settings, 
  LogOut, 
  FileText, 
  Calendar, 
  Activity, 
  ChevronRight, 
  Download, 
  Bell, 
  Plus
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onLogout }) => {
  
  const recentReports = [
    { id: 'R-99283', test: 'Thyroid Profile Total', date: 'Today, 10:30 AM', status: 'Processing', color: 'text-orange-600 bg-orange-50' },
    { id: 'R-98112', test: 'Lipid Profile', date: '22 Oct 2023', status: 'Ready', color: 'text-green-600 bg-green-50' },
    { id: 'R-95441', test: 'Complete Blood Count', date: '15 Sep 2023', status: 'Ready', color: 'text-green-600 bg-green-50' },
  ];

  const upcomingAppointments = [
    { id: 'A-221', type: 'Home Collection', date: 'Tomorrow, 08:00 AM', status: 'Confirmed' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      
      {/* Dashboard Header */}
      <div className="bg-primary pt-24 pb-32 px-4 rounded-b-[40px] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto max-w-5xl">
              <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-green-400 shadow-md flex items-center justify-center">
                          <User className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-white">
                          <p className="text-green-200 text-sm font-bold uppercase tracking-wider">Welcome Back</p>
                          <h1 className="text-3xl font-bold">Rahul Jain</h1>
                      </div>
                  </div>
                  <button onClick={onLogout} className="bg-white/10 hover:bg-white/20 p-2 rounded-xl text-white transition-colors backdrop-blur-sm">
                      <LogOut className="h-6 w-6" />
                  </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                      <p className="text-3xl font-bold text-white mb-1">12</p>
                      <p className="text-xs text-green-100 font-medium uppercase">Reports</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                      <p className="text-3xl font-bold text-white mb-1">2</p>
                      <p className="text-xs text-green-100 font-medium uppercase">Visits</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                      <p className="text-3xl font-bold text-white mb-1">4</p>
                      <p className="text-xs text-green-100 font-medium uppercase">Family</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 -mt-20 relative z-10 space-y-8">
          
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-lg transition-all group"
              >
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                          <Calendar className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-gray-900">Book Test</h3>
                          <p className="text-sm text-gray-500">Home or Lab Visit</p>
                      </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Plus className="h-5 w-5" />
                  </div>
              </button>
              
              <button 
                onClick={() => onNavigate(View.REPORT_DOWNLOAD)}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-lg transition-all group"
              >
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                          <FileText className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-gray-900">All Reports</h3>
                          <p className="text-sm text-gray-500">View History</p>
                      </div>
                  </div>
                   <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                      <ChevronRight className="h-5 w-5" />
                  </div>
              </button>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-gray-900">Recent Reports</h3>
                  <button onClick={() => onNavigate(View.REPORT_DOWNLOAD)} className="text-sm text-primary font-bold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-gray-100">
                  {recentReports.map(report => (
                      <div key={report.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                                  <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-gray-800 text-sm">{report.test}</h4>
                                  <p className="text-xs text-gray-400">{report.date}</p>
                              </div>
                          </div>
                          <div className="text-right">
                              <span className={`text-xs font-bold px-2 py-1 rounded-md ${report.color}`}>{report.status}</span>
                              {report.status === 'Ready' && (
                                  <button className="ml-3 text-gray-400 hover:text-primary transition-colors">
                                      <Download className="h-4 w-4" />
                                  </button>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Upcoming Appointments */}
           <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900">Upcoming Appointments</h3>
              </div>
               <div className="divide-y divide-gray-100">
                  {upcomingAppointments.map(apt => (
                      <div key={apt.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-secondary">
                                  <Calendar className="h-5 w-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-gray-800 text-sm">{apt.type}</h4>
                                  <p className="text-xs text-gray-400">{apt.date}</p>
                              </div>
                          </div>
                          <div className="text-right">
                              <span className="text-xs font-bold px-2 py-1 rounded-md bg-blue-50 text-blue-600">{apt.status}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

      </div>
    </div>
  );
};

export default Dashboard;
