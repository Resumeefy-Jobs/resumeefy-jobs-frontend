import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import SnapshotCard from "../../components/SnapshotCard";
import QuickLinkCard from "../../components/QuickLinkCard";
import NotificationCard from "../../components/NotificationCard";

const Dashboard = () => {
  return (
    <div className="flex bg-[#D1D7E0] min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8 flex flex-col gap-5">
          {/* Header */}
          <h1 className="text-[20px] text-start text-3xl leading-[100%] tracking-[-2%]  font-semibold text-[#000000]">
            Good morning, Andrew!
          </h1>

          {/* Snapshots */}
          <section style={{ boxShadow: "0px 10px 20px 0px #00000040"}} className="bg-[#ffffff] p-6 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-semibold text-start text-2xl leading-[100%] tracking-[-2%] text-black">Snapshots</h2>
            <div className="grid grid-cols-2 gap-[30px]">
              <SnapshotCard count="3" label="Active Applications" />
              <SnapshotCard count="2" label="Shortlisted" />
              <SnapshotCard count="1" label="Interview(s) Scheduled" />
              <SnapshotCard count="4" label="Expiring Soon" />
            </div>
          </section>

          {/* Quick Links */}
          <section style={{ boxShadow: "0px 10px 20px 0px #00000040"}} className="bg-[#ffffff] p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-semibold text-start text-black">Quick Links</h2>
            <div className="flex flex-row justify-between gap-4 sm:flex-nowrap md:flex-nowrap">
              <QuickLinkCard label="Find Jobs" />
              <QuickLinkCard label="Take Assessment" />
              <QuickLinkCard label="Revamp CV" />
            </div>
          </section>

          {/* Notifications */}
          <section style={{ boxShadow: "0px 10px 20px 0px #00000040"}} className="bg-[#ffffff] p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-start text-black">Recent Notifications (2)</h2>
              <button className="text-blue-600 font-semibold text-sm hover:underline">View All</button>
            </div>
            <ul className="text-start">
              <NotificationCard text="An employer viewed your resume at Adron Homes Ltd." />
              <NotificationCard text="You were shortlisted for Sales Intern at Coca-Cola PLC, Lagos." />
            </ul>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 mt-10">
            © 2025 ResumeeFy Jobs · <a href="#" className="hover:underline">About</a> ·{" "}
            <a href="#" className="hover:underline">Terms</a> ·{" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
