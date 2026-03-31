import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const SchoolDashboard = () => {
  const [applications] = useState([
    { id: 1, student: "Ahmed Siddiqui", age: 9, grade: "A", disability: "Physical", parent: "Capt. Siddiqui", status: "pending" },
    { id: 2, student: "Zoya Khan", age: 11, grade: "B", disability: "Hearing Impairment", parent: "Mrs. Khan", status: "pending" },
    { id: 3, student: "M. Rizwan", age: 7, grade: "C", disability: "Autism", parent: "Mr. Rizwan", status: "approved" }
  ]);

  const handleDecision = (id, decision) => {
    alert(`Application ${id} has been ${decision}`);
  };

  return (
    <div className="bg-[#f3faff] min-h-screen">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-64 min-h-screen pb-24 lg:pb-10">
        <TopHeader title="ISB1 School Portal" />
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase">Total Enrolled</h3>
              <p className="text-4xl font-black text-[#003358] mt-2">156</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase">Pending Applications</h3>
              <p className="text-4xl font-black text-orange-600 mt-2">12</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase">Available Seats</h3>
              <p className="text-4xl font-black text-green-600 mt-2">24</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">Admission Applications</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600">Filter</button>
                <button className="px-4 py-2 bg-[#004a7c] rounded-lg text-sm font-bold text-white">Export</button>
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {applications.map((app) => (
                <div key={app.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#003358] text-white flex items-center justify-center font-bold">
                      {app.student.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{app.student}</h4>
                      <p className="text-sm text-slate-500">Age: {app.age} • Grade {app.grade} • {app.disability}</p>
                      <p className="text-xs text-slate-400 mt-1">Parent: {app.parent}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {app.status === 'pending' ? (
                      <>
                        <button 
                          onClick={() => handleDecision(app.id, 'rejected')}
                          className="px-4 py-2 border-2 border-red-200 text-red-600 rounded-xl font-bold text-sm hover:bg-red-50"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={() => handleDecision(app.id, 'enrolled')}
                          className="px-4 py-2 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700"
                        >
                          Enroll
                        </button>
                      </>
                    ) : (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl font-bold text-sm">
                        Enrolled
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Classes Overview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Class Distribution</h3>
              <div className="space-y-3">
                {['Grade 1-3', 'Grade 4-6', 'Grade 7-8', 'Grade 9-10'].map((grade, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{grade}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#004a7c]" style={{ width: `${[45, 60, 30, 21][i]}%` }}></div>
                      </div>
                      <span className="text-xs font-bold w-8">[{[45, 60, 30, 21][i]}]</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#003358] text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">School Resources</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm opacity-80">Special Education Teachers</span>
                  <span className="font-bold">8</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm opacity-80">Therapists</span>
                  <span className="font-bold">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">Assistive Devices</span>
                  <span className="font-bold">32</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolDashboard;