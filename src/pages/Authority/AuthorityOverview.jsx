import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const AuthorityOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for NH1 authority
  const stats = {
    totalChildren: 1284,
    pwdCases: 60,
    physical: 42,
    pendingBudget: 42500,
    gadgetRequests: 15
  };

  const pendingEnrollments = [
    { name: "Ahmed Siddiqui", grade: 4, school: "ISB1", status: "pending" },
    { name: "Zoya Khan", grade: 6, school: "KHI1", status: "pending" },
    { name: "M. Rizwan", grade: 2, school: "KHI2", status: "pending" }
  ];

  return (
    <div className="bg-[#f3faff] min-h-screen">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-64 min-h-screen pb-24 lg:pb-10">
        <TopHeader title="NH1 Authority Overview" />
        
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border-b-4 border-[#003358]/20">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Children Under Jurisdiction</p>
              <h3 className="text-4xl font-black text-[#003358] mt-1">{stats.totalChildren}</h3>
              <div className="mt-6 flex gap-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-[#14696d] w-1/4"></div>
                <div className="bg-[#003358] w-1/2"></div>
                <div className="bg-green-600 w-1/4"></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">PWD Cases</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Physical</span>
                  <span className="font-bold">{stats.physical}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Other</span>
                  <span className="font-bold">{stats.pwdCases - stats.physical}</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-2 mt-2 font-bold text-[#003358]">
                  <span>Total</span>
                  <span>{stats.pwdCases}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#003358] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
              <p className="text-sm font-semibold opacity-80">Pending Budget</p>
              <h3 className="text-3xl font-bold">{stats.pendingBudget.toLocaleString()} PKR</h3>
              <p className="text-xs mt-2 opacity-60">For Q2 2024</p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pending Enrollments */}
            <section className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">Pending School Enrollment</h3>
                <button className="text-sm text-[#004a7c] font-bold">View All</button>
              </div>
              
              {pendingEnrollments.map((student, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#003358] font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{student.name}</h4>
                      <p className="text-xs text-slate-500">Grade {student.grade} • Applied to {student.school}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700">
                      Enroll
                    </button>
                    <button className="px-4 py-2 bg-red-100 text-red-600 text-xs font-bold rounded-lg hover:bg-red-200">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Gadget Coverage */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-4 text-slate-900">Gadget Coverage</h3>
              <div className="flex flex-col items-center py-6 border-b border-slate-100 mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-[#14696d] flex items-center justify-center font-black text-[#14696d] text-xl">
                  72%
                </div>
                <p className="text-sm font-bold mt-2 text-slate-600">Area Coverage</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold">
                  <span>Wheelchairs</span>
                  <span className="text-[#14696d]">12 Pending</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Tablets</span>
                  <span className="text-green-600">85 Delivered</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Hearing Aids</span>
                  <span className="text-[#003358]">24 In Stock</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200">
                View Gadget Requests
              </button>
            </section>
          </div>

          {/* Age Distribution Chart Placeholder */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-6 text-slate-900">Age Distribution</h3>
            <div className="h-64 flex items-end justify-around gap-4">
              {['0-5', '6-10', '11-15', '16-18', '18+'].map((age, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full">
                  <div 
                    className="w-full bg-[#004a7c] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${[40, 85, 60, 30, 15][i]}%` }}
                  ></div>
                  <span className="text-xs font-bold text-slate-600">{age}</span>
                  <span className="text-xs text-slate-400">{[120, 340, 210, 89, 45][i]}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AuthorityOverview;