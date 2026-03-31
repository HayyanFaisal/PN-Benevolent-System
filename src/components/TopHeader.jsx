const TopHeader = ({ title }) => (
  <header className="bg-slate-50/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-3 max-w-full mx-auto top-0 z-40 sticky border-b border-slate-100/50">
    <div className="flex items-center gap-4">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-sky-900 font-headline">{title}</h2>
    </div>
    <div className="flex items-center gap-6">
      <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 rounded-full">
        <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
        <input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Quick Search..." type="text"/>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:bg-sky-50/50 rounded-full transition-all">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
          <img alt="User" className="w-full h-full object-cover" src="https://via.placeholder.com/40"/>
        </div>
      </div>
    </div>
  </header>
);

export default TopHeader;