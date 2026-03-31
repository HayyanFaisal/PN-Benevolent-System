import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const ChildRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    cnic: '',
    authority: 'NH1',
    documents: [],
    disabilityType: ''
  });

  const handleSubmit = () => {
    // API call would go here
    alert('Child registered successfully! Awaiting medical verification.');
    navigate('/parent');
  };

  return (
    <div className="min-h-screen bg-[#f3faff]">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-64 p-6 md:p-12 pb-24 lg:pb-12">
        <TopHeader title="Register New Child" />
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-[#003358] text-white p-6">
              <h2 className="text-2xl font-bold">Child Registration</h2>
              <p className="text-sky-200 text-sm mt-1">Step {step} of 3</p>
            </div>

            <div className="p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Child's Full Name</label>
                    <input 
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#003358]"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth</label>
                    <input 
                      type="date"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#003358]"
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">CNIC/B-Form Number</label>
                    <input 
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#003358]"
                      placeholder="42101-1234567-1"
                      value={formData.cnic}
                      onChange={(e) => setFormData({...formData, cnic: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Authority</label>
                    <select 
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#003358]"
                      value={formData.authority}
                      onChange={(e) => setFormData({...formData, authority: e.target.value})}
                    >
                      <option value="NH1">NH1 (Northern Headquarters 1)</option>
                      <option value="NH2">NH2 (Northern Headquarters 2)</option>
                      <option value="NH3">NH3 (Northern Headquarters 3)</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-2">This determines which regional office will process your application.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Type of Disability</label>
                    <select 
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#003358]"
                      value={formData.disabilityType}
                      onChange={(e) => setFormData({...formData, disabilityType: e.target.value})}
                    >
                      <option value="">Select condition</option>
                      <option value="physical">Physical Disability</option>
                      <option value="neurological">Neurological</option>
                      <option value="sensory">Sensory Impairment</option>
                      <option value="developmental">Developmental Disorder</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#003358] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">cloud_upload</span>
                    <p className="text-sm font-bold text-slate-700">Click to upload documents</p>
                    <p className="text-xs text-slate-500 mt-1">Medical reports, CNIC, photos (PDF, JPG, PNG)</p>
                  </div>
                  
                  <div className="bg-sky-50 p-4 rounded-xl">
                    <h4 className="font-bold text-sm text-[#003358] mb-2">Required Documents:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Medical assessment report</li>
                      <li>• Child's CNIC or B-Form</li>
                      <li>• Parent's CNIC</li>
                      <li>• Recent photograph</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="px-8 py-3 bg-[#004a7c] text-white rounded-xl font-bold hover:bg-[#003358] transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">check</span>
                    Submit Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildRegistration;