import { motion } from "framer-motion";
import { X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = ({ isModal = false }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BACKEND_URL;

  // Google Login
  const handleGoogleLogin = () => {
    window.location.href = `${backend}/auth/google`;
  };

  // Local Login
  const handleLocalLogin = async () => {
    if (!email || !pwd) {
      return toast.error("Email and password are required!");
    }

    setLoading(true);

    try {
      const res = await fetch(`${backend}/users/login`, {
        method: "POST",
        credentials: "include", // IMPORTANT: stores cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pwd }),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success("Login successful!");
        navigate("/dashboard/applicant?login=success");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${
        isModal
          ? "p-0 w-full min-w-md flex justify-center items-center"
          : "min-h-screen flex items-center justify-center"
      }`}
    >
      <motion.div
        className="flex flex-col w-full text-black rounded-2xl p-8 max-w-md relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* Heading */}
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Login to your account
          </h2>

          {/* Google Login */}
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
          <span className="px-3 text-gray-500 text-sm">or login manually</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-black rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-black outline-none"
        />

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            value={pwd}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLocalLogin}
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Footer */}
        <p className="text-sm text-black text-start mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
