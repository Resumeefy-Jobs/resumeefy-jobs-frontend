import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const SignupApplicant = ({ isModal = false }) => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    confirmPwd: "",
    roles: "user",
    terms: false,
  });

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const backend = import.meta.env.VITE_BACKEND_URL;

  //Reset Form
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      pwd: "",
      confirmPwd: "",
      roles: "user",
      terms: false,
    });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // SHOW FEEDBACK MESSAGES
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  // SUBMITTING THE FORM
  const handleSubmitData = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.pwd ||
      !formData.confirmPwd
    ) {
      showMessage("Please fill in all required fields.", "error");
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

    try {
      const form = {
        fname: formData.firstName,
        lname: formData.lastName,
        email: formData.email,
        pwd: formData.pwd,
        roles: formData.roles,
        terms: formData.terms,
      };

      const res = await axios.post(`${backend}/users/register`, form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        showMessage(res.data.message, "success");
        resetForm();
      } else {
        showMessage(res.data.message, "error");
      }
    } catch (error) {
      const errMsg = error.response.data.message;
      showMessage(errMsg, "error");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${backend}/auth/google`;
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
        className="w-full flex flex-col text-black rounded-2xl p-8 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Sign up as a Job Seeker
          </h2>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 border border-black rounded-lg py-2 px-4 hover:bg-gray-100 transition"
          >
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
            or sign up manually
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
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="col-span-2 border rounded-[16px] px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleInputChange}
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

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="pwd"
              placeholder="Password (min. 8 chars)"
              className="border rounded-[16px] px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.pwd}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPwd"
              placeholder="Confirm Password"
              className="border rounded-[16px] px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.confirmPwd}
              onChange={handleInputChange}
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
          <div className="col-span-2 flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.checked })
              }
              className="h-4 w-4 rounded border border-gray-500 accent-blue-600 cursor-pointer"
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
              .
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
            <a href="/auth/login" className="text-blue-600 font-medium">
              Login
            </a>
          </p>
        </form>

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

export default SignupApplicant;
