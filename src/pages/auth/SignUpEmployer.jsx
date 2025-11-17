import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const SignupEmployer = ({ isModal = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [message, setMessage] = useState({ text: "", type: "" });

  //GRABBING THE FORM DATA
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    c_position: "",
    c_name: "",
    email: "",
    c_website: "",
    c_industry: "",
    pwd: "",
    confirmPwd: "",
    roles: "employer",
    terms: false,
  });

  //Reset Message
  const resetMessage = () => {
    setFormData({
      firstName: "",
      lastName: "",
      c_position: "",
      c_name: "",
      email: "",
      c_website: "",
      c_industry: "",
      pwd: "",
      confirmPwd: "",
      terms: false,
    });
  };

  //Showing error or success messages
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  //HANDLING HOW THE INPUT DATA CHANGES
  const handleInputChange = (eOrValue) => {
    const { name, value } = eOrValue.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //SUBMITTING THE FORM
  const handleSubmitData = async (e) => {
    e.preventDefault();

    //VALIDATION STARTS HERE

    if (
      !formData.c_industry ||
      !formData.c_name ||
      !formData.c_position ||
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.pwd ||
      !formData.terms ||
      !formData.confirmPwd
    ) {
      showMessage("Fill in the required details", "error");
      return;
    }

    if (formData.pwd !== formData.confirmPwd) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    if (!formData.terms) {
      showMessage("Please agree to the Terms and Privacy Policy.", "error");
      return;
    }
    //VALIDATION ENDS HERE
    const backend = import.meta.env.VITE_BACKEND_URL;
    try {
      const form = {
        fname: formData.firstName,
        lname: formData.lastName,
        email: formData.email,
        c_position: formData.c_position,
        c_name: formData.c_name,
        c_industry: formData.c_industry,
        c_website: formData.c_website,
        pwd: formData.pwd,
        roles: formData.roles,
        terms: formData.terms,
      };

      const res = await axios.post(`${backend}/users/register`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        showMessage("Employer Created Successfully", "success");
        resetMessage();
      } else {
        showMessage(res.data.message, "error");
      }
    } catch (error) {
      showMessage(error.message, "error");
    }
  };
  return (
    <div
      className={`${
        isModal
          ? "p-0 w-full min-w-xl max-w-2xl flex justify-center items-center"
          : "min-h-screen flex items-center justify-center"
      }`}
    >
      <motion.div
        className=" w-full flex flex-col text-black rounded-2xl p-8 relative "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
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
            <span className="px-3 text-gray-500 text-sm">
              or login manually
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmitData}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {/* Name Fields */}
            <input
              name="firstName"
              onChange={handleInputChange}
              value={formData.firstName}
              type="text"
              placeholder="First Name"
              className="border max-h-[40px] rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              name="lastName"
              onChange={handleInputChange}
              value={formData.lastName}
              type="text"
              placeholder="Last Name"
              className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Position + Company */}
            <select
              name="c_position"
              onChange={handleInputChange}
              value={formData.c_position}
              className="border rounded-[16px] px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Position in Company</option>
              <option value="Executive">
                Executive (CEO, COO, CFO, CMO, CTO, MD, etc.)
              </option>
              <option value="Senior Management">
                Senior Management (HR Manager, General Manger, etc.)
              </option>
              <option value="Department Head / Team Lead">
                Department Head / Team Lead (Team Supervisor, etc.)
              </option>
              <option value="Specialist">
                Specialist (Administrative Officer, Legal Officer, etc.)
              </option>
              <option value="Entrepreneurs / Owners">
                Entrepreneurs / Owners (Business Owner, etc.)
              </option>
              <option value="Hiring Agency">
                Hiring Agency (Recruitment consultant, etc.)
              </option>
            </select>
            <input
              name="c_name"
              value={formData.c_name}
              onChange={handleInputChange}
              type="text"
              placeholder="Company Name"
              className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Email */}
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Company Email Address"
              className="col-span-2 border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Roles */}
            <input
              type="hidden"
              name="roles"
              placeholder="your role"
              className="col-span-2 border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.roles}
              onChange={handleInputChange}
            />

            {/* Website + Industry */}
            <input
              name="c_website"
              onChange={handleInputChange}
              value={formData.c_website}
              type="url"
              placeholder="Website (optional)"
              className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <select
              name="c_industry"
              onChange={handleInputChange}
              value={formData.c_industry}
              className="border rounded-[16px] px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Industry</option>
              <option value="Accounting & Auditing">
                Accounting & Auditing
              </option>
              <option value="Advertising & Marketing">
                Advertising & Marketing
              </option>
              <option value="Agriculture / AgriTech">
                Agriculture / AgriTech
              </option>
              <option value="Animation & Creative Studios">
                Animation & Creative Studios
              </option>
              <option value="Architecture & Urban Planning">
                Architecture & Urban Planning
              </option>
              <option value="Art & Design">Art & Design</option>
              <option value="Artificial Intelligence / Machine Learning">
                Artificial Intelligence / Machine Learning
              </option>
              <option value="Automotive / Aerospace">
                Automotive / Aerospace
              </option>
              <option value="Aviation">Aviation</option>
              <option value="Banking & Financial Services">
                Banking & Financial Services
              </option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Blockchain / Web3">Blockchain / Web3</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil / Structural Engineering">
                Civil / Structural Engineering
              </option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Construction & Infrastructure">
                Construction & Infrastructure
              </option>
              <option value="Consulting & Advisory">
                Consulting & Advisory
              </option>
              <option value="Consumer Goods / FMCG">
                Consumer Goods / FMCG
              </option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Analytics / Big Data">
                Data Analytics / Big Data
              </option>
              <option value="Defense & Security">Defense & Security</option>
              <option value="Delivery / Courier Services">
                Delivery / Courier Services
              </option>
              <option value="Digital Media & Content Creation">
                Digital Media & Content Creation
              </option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Electronics & Hardware">
                Electronics & Hardware
              </option>
              <option value="Energy & Utilities">Energy & Utilities</option>
              <option value="Energy Infrastructure">
                Energy Infrastructure
              </option>
              <option value="Entertainment / Film / TV">
                Entertainment / Film / TV
              </option>
              <option value="Environmental Services">
                Environmental Services
              </option>
              <option value="Event Management">Event Management</option>
              <option value="Fashion & Luxury">Fashion & Luxury</option>
              <option value="Finance & Investment">Finance & Investment</option>
              <option value="Fintech">Fintech (Financial Technology)</option>
              <option value="Fitness & Wellness">Fitness & Wellness</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Forestry & Fishing">Forestry & Fishing</option>
              <option value="Gaming">Gaming</option>
              <option value="Government Administration">
                Government Administration
              </option>
              <option value="Graphic Design & Branding">
                Graphic Design & Branding
              </option>
              <option value="HealthTech / Telemedicine">
                HealthTech / Telemedicine
              </option>
              <option value="Healthcare / Hospitals">
                Healthcare / Hospitals
              </option>
              <option value="Hospitality / Hotels">Hospitality / Hotels</option>
              <option value="Humanitarian Aid">Humanitarian Aid</option>
              <option value="Industrial Manufacturing">
                Industrial Manufacturing
              </option>
              <option value="Information Technology">
                Information Technology (IT Services)
              </option>
              <option value="Insurance">Insurance</option>
              <option value="International Development">
                International Development
              </option>
              <option value="Investment & Asset Management">
                Investment & Asset Management
              </option>
              <option value="Journalism / News & Media">
                Journalism / News & Media
              </option>
              <option value="Legal Services">Legal Services</option>
              <option value="Logistics & Supply Chain">
                Logistics & Supply Chain
              </option>
              <option value="Manufacturing & Production">
                Manufacturing & Production
              </option>
              <option value="Maritime Services">Maritime Services</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Medical Devices">Medical Devices</option>
              <option value="Mining">Mining</option>
              <option value="Non-Governmental Organization">
                Non-Governmental Organization (NGO)
              </option>
              <option value=">Oil & Gas">Oil & Gas</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Photography & Videography">
                Photography & Videography
              </option>
              <option value="Printing & Publishing">
                Printing & Publishing
              </option>
              <option value="Public Relations">Public Relations (PR)</option>
              <option value="Real Estate & Property Management">
                Real Estate & Property Management
              </option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Research & Development">
                Research & Development
              </option>
              <option value="Research Institutes">Research Institutes</option>
              <option value="Restaurants / Food Services">
                Restaurants / Food Services
              </option>
              <option value="Retail & Wholesale">Retail & Wholesale</option>
              <option value="Robotics">Robotics</option>
              <option value="Shipping & Freight">Shipping & Freight</option>
              <option value="Social Impact / CSR">Social Impact / CSR</option>
              <option value="Software Development">Software Development</option>
              <option value="Sports & Recreation">Sports & Recreation</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Travel & Tourism">Travel & Tourism</option>
              <option value="Universities & Institutions">
                Universities & Institutions
              </option>
              <option value="Utilities & Power Generation">
                Utilities & Power Generation
              </option>
              <option value="Venture Capital / Private Equity">
                Venture Capital / Private Equity
              </option>
              <option value="Waste Management">Waste Management</option>
              <option value="Web & App Development">
                Web & App Development
              </option>
              <option value="Other">Other</option>
            </select>

            {/* Password Fields */}
            <div className="relative">
              <input
                name="pwd"
                value={formData.pwd}
                onChange={handleInputChange}
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
                value={formData.confirmPwd}
                name="confirmPwd"
                onChange={handleInputChange}
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
                name="terms"
                checked={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked })
                }
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
        {/* Feedback Message */}
        {message.text && (
          <p
            className={`mt-4 text-center text-sm ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SignupEmployer;
