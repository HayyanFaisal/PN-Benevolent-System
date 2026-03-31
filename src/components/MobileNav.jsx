import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MobileNav = () => {
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const getNavItems = () => {
    switch(user?.role) {
      case 'admin':
        return [
          { path: "/admin", label: "Home", icon: "home" },
          { path: "/admin/finance", label: "Finance", icon: "payments" },
        ];
      case 'parent':
        return [
          { path: "/parent", label: "Home", icon: "home" },
          { path: "/parent/register", label: "Add", icon: "add_circle" },
        ];
      case 'medical':
        return [
          { path: "/medical", label: "Queue", icon: "list_alt" },
          { path: "/medical", label: "Review", icon: "medical_services" },
        ];
      case 'authority':
        return [
          { path: "/authority", label: "Overview", icon: "dashboard" },
        ];
      case 'school':
        return [
          { path: "/school", label: "Portal", icon: "school" },
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-6 bg-white/90 backdrop-blur-lg lg:hidden z-50 border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      {getNavItems().map((item, idx) => (
        <Link 
          key={idx}
          to={item.path} 
          className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all ${
            currentPath === item.path 
              ? 'bg-sky-100 text-sky-900 rounded-xl scale-95' 
              : 'text-slate-500'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;