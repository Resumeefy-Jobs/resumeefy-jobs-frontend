import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 pl-30 py-4 bg-black border-b border-gray-200">
      <nav className="hidden md:flex gap-8 text-sm text-white">
        <a href="#" className="hover:text-blue-600">CV / Resume Services</a>
        <a href="#" className="hover:text-blue-600">Interview Prep</a>
        <a href="#" className="hover:text-blue-600">Skills Assessment</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="border border-gray-300 px-8 py-4 rounded-xl cursor-pointer text-sm flex items-center gap-1">
          Go Premium <img src="/icons/premium.svg" alt="premium" />
        </button>
        <button className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
