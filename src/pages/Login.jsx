import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [role, setRole] = useState('parent');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role, formData);
  };

  return (
    <div className="min-h-screen bg-[#f3faff] font-sans">
      <header className="bg-slate-50/80 backdrop-blur-xl top-0 z-50 sticky">
        <div className="flex justify-between items-center w-full px-6 py-3 max-w-full mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#003358] rounded-lg flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-3xl">guardian</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tighter text-[#003358] uppercase">PN Benevolent</h1>
              <span className="text-[10px] font-bold tracking-[0.2em] text-sky-700 uppercase">Platform</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-100 rounded-l-[10rem] opacity-50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden bg-white border border-slate-100">
          <div className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-[#003358] to-[#004a7c]">
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <h2 className="text-4xl font-extrabold mb-4 leading-tight">Securing maritime futures with institutional integrity.</h2>
              <p className="text-lg opacity-95">The PN Benevolent Association's unified ecosystem for administrative, medical, and educational excellence.</p>
            </div>
          </div>
          
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h3 className="text-3xl font-bold tracking-tight text-[#003358] mb-2">Welcome Back</h3>
              <p className="text-slate-600">Please select your role and enter your credentials.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#14696d]">User Role</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-medium focus:ring-2 focus:ring-[#003358] outline-none"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="parent">Parent</option>
                  <option value="admin">Admin / Finance</option>
                  <option value="medical">Medical Professional</option>
                  <option value="authority">Regional Authority (NH1/NH2/NH3)</option>
                  <option value="school">School (ISB1/KHI1/KHI2)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#14696d]">Email or Username</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </span>
                  <input 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#003358]"
                    placeholder="e.g. j.doe@institution.org"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#14696d]">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </span>
                  <input 
                    type="password"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#003358]"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#004a7c] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Access Portal</span>
                <span className="material-symbols-outlined">login</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}