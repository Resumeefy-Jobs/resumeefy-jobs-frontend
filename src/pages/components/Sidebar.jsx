import {
  Home,
  Search,
  Bookmark,
  FileText,
  Calendar,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/applicant" },
    { name: "Find Jobs", icon: <Search size={18} />, path: "/applicant/find-jobs" },
    { name: "Saved Jobs", icon: <Bookmark size={18} />, path: "/applicant/saved-jobs" },
    { name: "My Applications", icon: <FileText size={18} />, path: "/applicant/applications" },
    { name: "Interviews", icon: <Calendar size={18} />, path: "/applicant/interviews" },
    { name: "Job Alerts", icon: <Bell size={18} />, path: "/applicant/alerts" },
    { name: "Profile", icon: <User size={18} />, path: "/applicant/profile" },
    { name: "Settings", icon: <Settings size={18} />, path: "/applicant/settings" },
  ];

  return (
    <aside className="bg-black text-white w-[20%] sticky top-0 grow-0 shrink-0 h-screen  min-h-screen flex flex-col justify-between pl-12 pt-7">
      <div className="flex flex-col gap-12">
        <NavLink to="/" className="text-white  text-2xl font-bold tracking-wide cursor-pointer">
          <img src="/DashboardLogo.svg" alt="Resumeefy logo"/>
        </NavLink>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                // to="/applicant"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-l-lg transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition">
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
