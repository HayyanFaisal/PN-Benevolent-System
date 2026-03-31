import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f3faff]">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-64 p-6 md:p-12 pb-24 lg:pb-12">
        <TopHeader title="Admin Dashboard" />
        
        <div className="max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#003358]">people</span>
                <span className="text-sm font-bold text-slate-500">Total Parents</span>
              </div>
              <p className="text-3xl font-black text-[#003358]">450</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#14696d]">child_care</span>
                <span className="text-sm font-bold text-slate-500">Registered Children</span>
              </div>
              <p className="text-3xl font-black text-[#14696d]">1,284</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-orange-600">pending</span>
                <span className="text-sm font-bold text-slate-500">Pending Verifications</span>
              </div>
              <p className="text-3xl font-black text-orange-600">28</p>
            </div>
            
            <Link to="/admin/finance" className="bg-[#003358] text-white p-6 rounded-2xl shadow-lg hover:bg-[#004a7c] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined">payments</span>
                <span className="text-sm font-bold opacity-80">Finance</span>
              </div>
              <p className="text-lg font-bold">View Grants & Costs</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "New registration", user: "Ali Khan", time: "5 mins ago", type: "parent" },
                  { action: "Medical grade assigned", user: "Dr. Smith", time: "1 hour ago", type: "medical" },
                  { action: "Grant disbursement", user: "System", time: "2 hours ago", type: "finance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === 'parent' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'medical' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <span className="material-symbols-outlined text-sm">
                        {item.type === 'parent' ? 'person' : item.type === 'medical' ? 'medical_services' : 'payments'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.action}</p>
                      <p className="text-xs text-slate-500">{item.user} • {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-4">System Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-medium text-sm">Authorities Active</span>
                  <span className="font-bold text-[#003358]">3 (NH1, NH2, NH3)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-medium text-sm">Schools Connected</span>
                  <span className="font-bold text-[#003358]">3 (ISB1, KHI1, KHI2)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-medium text-sm">Medical Reviewers</span>
                  <span className="font-bold text-[#003358]">12 Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;