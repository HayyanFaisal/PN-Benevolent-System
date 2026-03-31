import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import TopHeader from '../../components/TopHeader';

const FinanceTracking = () => {
  const [payments] = useState([
    { name: "Arish Abbas", id: "PN-00923", grade: "Grade A", amount: "20,000", status: "Paid", quarter: "Q1 2024" },
    { name: "Sara Khan", id: "PN-01182", grade: "Grade B", amount: "15,000", status: "Pending", quarter: "Q1 2024" },
    { name: "M. Farhan", id: "PN-00845", grade: "Grade C", amount: "20,000", status: "Paid", quarter: "Q1 2024" },
    { name: "Zainab Ali", id: "PN-00991", grade: "Grade A", amount: "10,000", status: "Paid", quarter: "Q4 2023" }
  ]);

  const gadgetCosts = [
    { item: "Wheelchairs", cost: 840000, distributed: 42 },
    { item: "Tablets/iPads", cost: 1100000, distributed: 89 },
    { item: "Hearing Aids", cost: 450000, distributed: 23 },
    { item: "Smart Canes", cost: 120000, distributed: 15 }
  ];

  return (
    <div className="bg-[#f3faff] min-h-screen">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 lg:ml-64 p-8 pb-24 lg:pb-10">
        <TopHeader title="Finance & Grant Tracking" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Grants Distributed</span>
              <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">+12.4% vs Q3</span>
            </div>
            <h3 className="text-5xl font-extrabold text-[#003358] mb-1">PKR 4.28M</h3>
            <p className="text-slate-500 text-sm">Active for FY 2024-25</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Gadget Spend</span>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Wheelchairs</span>
                <span className="font-bold">840k</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Tablets</span>
                <span className="font-bold">1.1M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#003358] text-white p-6 rounded-2xl relative overflow-hidden">
            <h4 className="text-3xl font-bold">92%</h4>
            <p className="text-sky-300 text-xs mt-1">Beneficiaries reached</p>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 opacity-20 text-[120px]">insights</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#003358]">Quarterly Grant Payments</h2>
              <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm">
                <option>Q1 2024</option>
                <option>Q4 2023</option>
              </select>
            </div>
            
            <div className="space-y-3">
              {payments.map((payment, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-4 bg-slate-50 px-4 py-4 rounded-xl">
                  <div className="col-span-4">
                    <p className="text-sm font-bold text-slate-900">{payment.name}</p>
                    <p className="text-xs text-slate-500">{payment.id}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {payment.grade}
                    </span>
                  </div>
                  <div className="col-span-3 text-sm font-bold text-[#003358]">{payment.amount} PKR</div>
                  <div className="col-span-3 text-right">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                      payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-extrabold text-[#003358] mb-4">Allocation Rules</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                <span className="text-[10px] font-bold text-slate-500">GRADE A (Severe)</span>
                <p className="text-sm font-black text-[#003358]">20,000 PKR / quarter</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                <span className="text-[10px] font-bold text-slate-500">GRADE B (Moderate)</span>
                <p className="text-sm font-black text-[#003358]">15,000 PKR / quarter</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400">
                <span className="text-[10px] font-bold text-slate-500">GRADE C (Mild)</span>
                <p className="text-sm font-black text-[#003358]">10,000 PKR / quarter</p>
              </div>
            </div>

            <h3 className="text-lg font-extrabold text-[#003358] mb-4">Gadget Costs</h3>
            <div className="space-y-3">
              {gadgetCosts.map((gadget, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-bold">{gadget.item}</p>
                    <p className="text-xs text-slate-500">{gadget.distributed} distributed</p>
                  </div>
                  <span className="text-sm font-bold text-[#14696d]">{gadget.cost.toLocaleString()} PKR</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinanceTracking;