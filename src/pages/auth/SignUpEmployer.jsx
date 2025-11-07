import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";


const SignupEmployer = ({ isModal = false }) => {
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
                        Sign up as an Employer
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

                    {/* Position + Company */}
                    <select className="border rounded-[16px] px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Position in Company</option>
                        <option value="">Executive (CEO, COO, CFO, CMO, CTO, MD, etc.)</option>
                        <option value="">Senior Management (HR Manager, General Manger, etc.)</option>
                        <option value="">Department Head / Team Lead (Team Supervisor, etc.)</option>
                        <option value="">Specialist (Administrative Officer, Legal Officer, etc.)</option>
                        <option value="">Entrepreneurs / Owners (Business Owner, etc.)</option>
                        <option value="">Hiring Agency (Recruitment consultant, etc.)</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Company Email Address"
                        className="col-span-2 border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />

                    {/* Website + Industry */}
                    <input
                        type="url"
                        placeholder="Website (optional)"
                        className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <select className="border rounded-[16px] px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Select Industry</option>
                        <option>Accounting & Auditing</option>
                        <option>Advertising & Marketing</option>
                        <option>Agriculture / AgriTech</option>
                        <option>Animation & Creative Studios</option>
                        <option>Architecture & Urban Planning</option>
                        <option>Art & Design</option>
                        <option>Artificial Intelligence / Machine Learning</option>
                        <option>Automotive / Aerospace</option>
                        <option>Aviation</option>
                        <option>Banking & Financial Services</option>
                        <option>Biotechnology</option>
                        <option>Blockchain / Web3</option>
                        <option>Chemical Engineering</option>
                        <option>Civil / Structural Engineering</option>
                        <option>Cloud Computing</option>
                        <option>Construction & Infrastructure</option>
                        <option>Consulting & Advisory</option>
                        <option>Consumer Goods / FMCG</option>
                        <option>Cybersecurity</option>
                        <option>Data Analytics / Big Data</option>
                        <option>Defense & Security</option>
                        <option>Delivery / Courier Services</option>
                        <option>Digital Media & Content Creation</option>
                        <option>E-Commerce</option>
                        <option>Education & Training</option>
                        <option>Electrical Engineering</option>
                        <option>Electronics & Hardware</option>
                        <option>Energy & Utilities</option>
                        <option>Energy Infrastructure</option>
                        <option>Entertainment / Film / TV</option>
                        <option>Environmental Services</option>
                        <option>Event Management</option>
                        <option>Fashion & Luxury</option>
                        <option>Finance & Investment</option>
                        <option>Fintech (Financial Technology)</option>
                        <option>Fitness & Wellness</option>
                        <option>Food & Beverage</option>
                        <option>Forestry & Fishing</option>
                        <option>Gaming</option>
                        <option>Government Administration</option>
                        <option>Graphic Design & Branding</option>
                        <option>HealthTech / Telemedicine</option>
                        <option>Healthcare / Hospitals</option>
                        <option>Hospitality / Hotels</option>
                        <option>Humanitarian Aid</option>
                        <option>Industrial Manufacturing</option>
                        <option>Information Technology (IT Services)</option>
                        <option>Insurance</option>
                        <option>International Development</option>
                        <option>Investment & Asset Management</option>
                        <option>Journalism / News & Media</option>
                        <option>Legal Services</option>
                        <option>Logistics & Supply Chain</option>
                        <option>Manufacturing & Production</option>
                        <option>Maritime Services</option>
                        <option>Mechanical Engineering</option>
                        <option>Medical Devices</option>
                        <option>Mining</option>
                        <option>Non-Governmental Organization (NGO)</option>
                        <option>Oil & Gas</option>
                        <option>Pharmaceuticals</option>
                        <option>Photography & Videography</option>
                        <option>Printing & Publishing</option>
                        <option>Public Relations (PR)</option>
                        <option>Real Estate & Property Management</option>
                        <option>Renewable Energy</option>
                        <option>Research & Development</option>
                        <option>Research Institutes</option>
                        <option>Restaurants / Food Services</option>
                        <option>Retail & Wholesale</option>
                        <option>Robotics</option>
                        <option>Shipping & Freight</option>
                        <option>Social Impact / CSR</option>
                        <option>Software Development</option>
                        <option>Sports & Recreation</option>
                        <option>Telecommunications</option>
                        <option>Travel & Tourism</option>
                        <option>Universities & Institutions</option>
                        <option>Utilities & Power Generation</option>
                        <option>Venture Capital / Private Equity</option>
                        <option>Waste Management</option>
                        <option>Web & App Development</option>
                        <option>Other</option>
                    </select>

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

export default SignupEmployer;
