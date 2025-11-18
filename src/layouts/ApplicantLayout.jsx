import { Outlet } from "react-router-dom";
import Sidebar from "../pages/components/Sidebar";
import Topbar from "../pages/components/Topbar";


const ApplicantLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#D1D7E0]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
};

export default ApplicantLayout;
