import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const currentPath = location.pathname;

  const getNavItems = () => {
    switch(user?.role) {
      case 'admin':
        return [
          { path: "/admin", label: "Dashboard", icon: "dashboard" },
          { path: "/admin/finance", label: "Finance & Grants", icon: "payments" },
        ];
      case 'parent':
        return [
          { path: "/parent", label: "Dashboard", icon: "family_restroom" },
          { path: "/parent/register", label: "Register Child", icon: "person_add" },
        ];
      case 'medical':
        return [
          { path: "/medical", label: "Medical Review", icon: "medical_services" },
        ];
      case 'authority':
        return [
          { path: "/authority", label: "Overview", icon: "security" },
        ];
      case 'school':
        return [
          { path: "/school", label: "School Portal", icon: "school" },
        ];
      default:
        return [];
    }
  };

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col bg-slate-100 dark:bg-slate-900 border-r border-slate-200/50 py-6 space-y-2 z-50">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#003358] flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>guardian</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-sky-900 tracking-tighter">Guardian Portal</h1>
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              {user?.role} Access
            </p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-2 space-y-1">
        {getNavItems().map(item => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-all hover:translate-x-1 ${
              currentPath === item.path 
                ? 'bg-white text-sky-900 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="px-4 mt-auto space-y-2">
        <button 
          onClick={logout}
          className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 hover:bg-red-100"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;