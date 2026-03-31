import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const ParentDashboard = () => {
  const [children] = useState([
    { name: "Ahmad Naveed", id: "42101-1234567-1", status: "Enrolled", grade: "A", grant: "20,000 PKR", color: "bg-green-100 text-green-800" },
    { name: "Fatima Naveed", id: "42101-9876543-2", status: "Verified", grade: "B", grant: "15,000 PKR", color: "bg-blue-100 text-blue-800" },
    { name: "Zain Naveed", id: "42101-5544332-1", status: "Pending Verification", grade: "-", grant: "-", color: "bg-gray-100 text-gray-600" }
  ]);

  return (
    <div className="min-h-screen bg-[#f3faff]">
      <Sidebar />
      <MobileNav />
      <main className="flex-grow lg:ml-64 p-6 md:p-12 pb-24 lg:pb-12">
        <TopHeader title="Parent Dashboard" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-4">Registration Overview</h3>
            <div className="flex items-end gap-10">
              <div>
                <span className="text-6xl font-black text-[#003358]">0{children.length}</span>
                <p className="text-sm font-semibold text-slate-400">Children</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-600"></span>
                  <span className="text-sm font-medium">2 Enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="text-sm font-medium">1 Verified</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#003358] p-8 rounded-xl text-white flex flex-col justify-between">
            <h3 className="font-bold text-sm uppercase mb-2">Total Grants Received</h3>
            <div className="text-3xl font-bold">35,000 PKR</div>
            <div className="h-2 w-full bg-white/20 rounded-full mt-4">
              <div className="h-full bg-white w-3/4"></div>
            </div>
            <p className="text-xs mt-2 opacity-80">Last payment: Q1 2024</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">Registered Children</h2>
          <Link 
            to="/parent/register"
            className="bg-[#004a7c] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003358] transition-colors"
          >
            <span className="material-symbols-outlined">add</span>
            Register New Child
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {children.map((child, i) => (
            <div key={i} className="bg-white p-5 rounded-xl flex items-center gap-6 hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-600">person</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-[#003358]">{child.name}</h4>
                <p className="text-xs text-slate-500">{child.id}</p>
              </div>
              <div className="text-right">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${child.color}`}>
                  {child.status}
                </span>
                {child.grade !== '-' && (
                  <p className="text-xs text-slate-500 mt-1">Grade {child.grade} • {child.grant}</p>
                )}
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg">
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">Apply for Social Gadget</h3>
            <p className="text-sm text-slate-600 mb-4">Request wheelchairs, tablets, or other assistive devices for verified children.</p>
            <button className="text-[#004a7c] font-bold text-sm flex items-center gap-1">
              Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">Special School Enrollment</h3>
            <p className="text-sm text-slate-600 mb-4">Apply to ISB1, KHI1, or KHI2 for specialized education.</p>
            <button className="text-[#004a7c] font-bold text-sm flex items-center gap-1">
              Enroll <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;