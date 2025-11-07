import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const SignupApplicant = ({ isModal = false }) => {
  const [showPassword, setShowPassword] = useState(false);
   const [showConfirm, setShowConfirm] = useState(false);
   return (
     <div className={`${isModal ? "p-0 w-full min-w-xl max-w-2xl flex justify-center items-center" : "min-h-screen flex items-center justify-center"}`}>
         
         <motion.div
             className=" w-full flex flex-col text-black rounded-2xl p-8 relative "
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: 'spring', stiffness: 120 }}
         >
     
             <div className="w-full ">
                 {/* Heading */}
                 <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-center text-2xl font-semibold mb-6">
                        Sign up as a Job Seeker
                    </h2>

                    {/* Continue with Google */}
                    <button className="flex items-center justify-center gap-2 border border-black rounded-lg py-2 px-4 hover:bg-gray-100 transition">
                        <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                        />
                        Continue with Google
                    </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or login manually</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
 
                 {/* Form */}
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                     {/* Name Fields */}
                     <input
                         type="text"
                         placeholder="First Name"
                         className="border max-h-[40px] rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                     />
                     <input
                         type="text"
                         placeholder="Last Name"
                         className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                     />

                     {/* Email */}
                     <input
                         type="email"
                         placeholder="Email Address"
                         className="col-span-2 border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                     />
 
                     {/* Password Fields */}
                     <div className="relative">
                         <input
                         type={showPassword ? "text" : "password"}
                         placeholder="Password (min. 8chars)"
                         className="border rounded-[16px] px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                         />
                         <button
                         type="button"
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-3 top-2.5 text-gray-500"
                         >
                         {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                     </div>
 
                     <div className="relative">
                         <input
                         type={showConfirm ? "text" : "password"}
                         placeholder="Confirm Password"
                         className="border rounded-[16px] px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                         />
                         <button
                         type="button"
                         onClick={() => setShowConfirm(!showConfirm)}
                         className="absolute right-3 top-2.5 text-gray-500"
                         >
                         {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                     </div>
 
                     {/* Terms */}
                     <div className="col-span-2 flex items-center gap-2  text-sm text-gray-700">
                         <input
                             type="checkbox"
                             className="h-4 w-4 rounded-full border border-black bg-transparent text-blue-600  appearance-none checked:bg-gray-500 checked:border-black-600 transition-all duration-200"
                         />
 
                         <p>
                         I agree to{" "}
                         <a href="#" className="text-blue-600 underline">
                             Terms
                         </a>{" "}
                         and{" "}
                         <a href="#" className="text-blue-600 underline">
                             Privacy Policy
                         </a>
                         </p>
                     </div>
 
                     {/* Submit Button */}
                     <button
                         type="submit"
                         className="col-span-2 bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition font-medium"
                     >
                         Sign Up
                     </button>
 
                     {/* Login Link */}
                     <p className="col-span-2 text-start text-sm text-gray-600">
                         Already have an account?{" "}
                         <a href="/auth/Login" className="text-blue-600 font-medium">
                         Login
                         </a>
                     </p>
                 </form>
             </div>
         </motion.div>
     </div>
   );
 };
 

export default SignupApplicant;
