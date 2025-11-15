// import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import bgImage from "../assets/bgimage.png"; // Place your image in src/assets/
import Login from "../pages/auth/Login";

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <div className="relative h-full overflow-hidden">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center min-h-screen h-full w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,

        }}
      >
        <div 
          style={{ 
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.92) 2.65%, rgba(0, 0, 0, 0.63) 16.54%, rgba(0, 0, 0, 0) 31.44%, rgba(0, 0, 0, 0) 61.66%, rgba(0, 0, 0, 0.6) 83.91%, #000000 99.99%)"
          }} 
          className="w-full h-full min-h-screen flex flex-col justify-between px-[60px] pt-[30px] gap-16">
        
          {/* Navbar */}
          <Navbar onLoginClick={() => navigate("/login", { state: { background: location } })}/>
          {/* Hero Section */}
          <div className="relative h-screen z-10 flex flex-col items-center justify-center text-center gap-[72px] px-6">
              <h1
                className="text-4xl md:text-5xl text-shadow-[2px_2px_0_#014CCC99] font-semibold text-white leading-snug text-[48px]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ 
                  textShadow: "2px 2px 0 0 #014CCC99",
                  // boxShadow: "2px 2px 0px 0px #014CCC99",
                 }}
              >
                Where <span className="text-[#014CCB] italic font-bold">Top Talent</span>  Meets<br/> the {" "}
                <span className="text-[#014CCB] italic font-bold">Right Opportunity</span>
              </h1>

              {/* Two Cards */}
              <div
                className="w-full  flex flex-col md:flex-row items-center justify-center gap-20 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                {/* Job Seeker */}
                <div
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-[#00000080] flex flex-col items-center justify-center w-full max-w-[420px]  h-[258px] backdrop-blur-md rounded-2xl p-6 text-white"
                >
                    <div className="absolute top-[-15%] bg-[#FFFFFF99] text-[black] text-[24px] py-4 px-4 rounded-2xl font-semibold">I’m a Job Seeker</div>
                    <p className="text-[24px] text-white mb-4">Find jobs that fit your <br /> dream career.</p>
                    <button
                      onClick={() =>
                        navigate("/signup/applicant", { state: { background: location } })
                      }
                      className="bg-[#014CCC] px-8 py-4 hover:bg-white hover:text-[#014CCC] text-white text-[28px] rounded-2xl font-semibold transition">
                    Sign Up
                    </button>
                </div>

                {/* Employer */}
                <div
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-[#00000080] flex flex-col items-center justify-center w-full max-w-[420px]  h-[258px] backdrop-blur-md rounded-2xl p-6 text-white"
                >
                    <div className="absolute top-[-15%] bg-[#FFFFFF99] text-[black] text-[24px] py-4 px-4 rounded-2xl font-semibold">I’m an Employer</div>
                    <p className="text-[24px] text-white mb-4">Hire top talent <br /> with ease.</p>
                    <button 
                      onClick={() =>
                        navigate("/signup/employer", { state: { background: location } })
                      }
                      className="bg-[#ffffff] px-8 py-4 hover:bg-blue-600 hover:text-white text-[#014CCC] text-[28px] rounded-2xl font-semibold transition">
                    Sign Up
                    </button>
                </div>
              </div>
          </div>
          {/* Footer */}
          <motion.footer
            className="flex items-center justify-center gap-10  text-[18px] text-[#FFFFFF] font-medium "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            >
            <p>© 2025</p>
            <p>About</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
