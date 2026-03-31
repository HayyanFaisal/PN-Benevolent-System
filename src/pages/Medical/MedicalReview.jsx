import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const MedicalReview = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [queue] = useState([
    { id: 1, name: "Marcus Thorne", caseId: "APP-2024-0892", type: "Urgent", age: 7, condition: "Spina Bifida", guardian: "Sarah Thorne", submitted: "2h ago" },
    { id: 2, name: "Elena Rodriguez", caseId: "APP-2024-0911", type: "Standard", age: 9, condition: "Cerebral Palsy", guardian: "Maria Rodriguez", submitted: "5h ago" },
    { id: 3, name: "Ahmed Khan", caseId: "APP-2024-0923", type: "Standard", age: 5, condition: "Autism Spectrum", guardian: "Fatima Khan", submitted: "1d ago" }
  ]);

  const handleGradeAssignment = (grade) => {
    alert(`Assigned Grade ${grade} to case ${selectedCase.caseId}`);
    setSelectedCase(null);
  };

  return (
    <div className="bg-[#f3faff] min-h-screen">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-64 p-6 md:p-10 min-h-screen pb-24 lg:pb-10">
        <TopHeader title="Medical Assessment Review" />
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mt-8">
          {/* Queue Sidebar */}
          <div className="xl:col-span-4 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#14696d] flex items-center gap-2">
                <span className="material-symbols-outlined">pending_actions</span>
                Queue ({queue.length})
              </h3>
            </div>
            
            <div className="space-y-4">
              {queue.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedCase(item)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer border-l-4 ${
                    selectedCase?.id === item.id 
                      ? 'bg-white border-[#003358] shadow-md' 
                      : 'bg-slate-50 border-transparent hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      item.type === 'Urgent' ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400">{item.submitted}</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.caseId}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Panel */}
          <div className="xl:col-span-8 space-y-8">
            {selectedCase ? (
              <>
                <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-100">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-[#003358]">child_care</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-extrabold text-slate-900">{selectedCase.name}</h2>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Active Application</span>
                          <span className="text-xs text-slate-400">• ID: {selectedCase.caseId}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Uploaded Documentation</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-[#004a7c] transition-all cursor-pointer">
                          <span className="material-symbols-outlined text-3xl text-[#004a7c] mr-4">description</span>
                          <div>
                            <p className="text-sm font-bold">Medical_Report.pdf</p>
                            <p className="text-xs text-slate-400">Oct 12, 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-[#004a7c] transition-all cursor-pointer">
                          <span className="material-symbols-outlined text-3xl text-[#004a7c] mr-4">image</span>
                          <div>
                            <p className="text-sm font-bold">Assessment_Scan.jpg</p>
                            <p className="text-xs text-slate-400">Oct 14, 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-3xl p-6">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Patient Profile</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between"><span className="text-xs text-slate-500">Age</span><span className="text-xs font-bold">{selectedCase.age} years</span></li>
                        <li className="flex justify-between"><span className="text-xs text-slate-500">Condition</span><span className="text-xs font-bold">{selectedCase.condition}</span></li>
                        <li className="flex justify-between"><span className="text-xs text-slate-500">Guardian</span><span className="text-xs font-bold">{selectedCase.guardian}</span></li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-[#003358] text-white rounded-[2rem] p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-2">Final Determination</h2>
                  <p className="text-sky-200 text-sm mb-8">Assign disability grade based on medical evidence. C = Severe (20K PKR), B = Moderate (15K), A = Mild (10K)</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {['A', 'B', 'C', 'Reject'].map((grade) => (
                      <button 
                        key={grade}
                        onClick={() => handleGradeAssignment(grade)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                          grade === 'Reject' 
                            ? 'border-red-400 bg-red-400/10 hover:bg-red-400/20' 
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl font-black mb-1">{grade}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                          {grade === 'Reject' ? 'Ineligible' : `Grade (${grade === 'C' ? '20K' : grade === 'B' ? '15K' : '10K'})`}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <div className="bg-white rounded-[2rem] p-12 text-center border border-slate-200">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">medical_services</span>
                <h3 className="text-xl font-bold text-slate-700">Select a case to review</h3>
                <p className="text-slate-500 mt-2">Choose from the queue on the left to begin assessment</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalReview;