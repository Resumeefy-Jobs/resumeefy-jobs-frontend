import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "CV / Resume Services", path: "/resume-services" },
    { name: "Interview Prep", path: "/interview-prep" },
    { name: "Skills Assessment", path: "/skills-assessment" },
  ];

  return (
    <div>
      <motion.nav
        className=" w-full overflow-hidden flex justify-between items-center  z-20 bg-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <NavLink to="/" className="text-white  text-2xl font-bold tracking-wide cursor-pointer">
          <img src="/resumeefylogo.svg" alt="Resumeefy logo"/>
        </NavLink>

        <div className="flex gap-[40px]">
          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-[32px] text-white text-sm list-none">
            {navItems.map((item) => (
              <li key={item.path} className="text-white" style={{color: "white"}}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition text-white ${
                      isActive ? "text-blue-700 font-semibold" : "hover:text-blue-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Login */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onLoginClick}
            className="hidden lg:block border border-white bg-transparent rounded-2xl px-4 py-2 text-white   transition"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden sm:flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className=" w-full bg-black/90 backdrop-blur-md flex flex-col items-center space-y-6 py-6 md:hidden"
            >
              <ul className="flex flex-col gap-4 text-gray-200 text-lg text-center">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `transition ${
                          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                 onClick={() => {
                  setIsOpen(false);
                  onLoginClick();
                }}
                className="border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-black transition"
              >
                Login
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
