import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import SignupApplicant from "../pages/auth/SignUpApplicant";
import SignupEmployer from "../pages/auth/SignUpEmployer";
// import ApplicantLayout from "../layouts/ApplicantLayout";
// import EmployerLayout from "../layouts/EmployerLayout";
// import AdminLayout from "../layouts/AdminLayout";
// import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/dashboard/applicant/Dashboard";
// import EmployerDashboard from "../pages/employer/Dashboard";
// import AdminDashboard from "../pages/admin/Dashboard";

export default function AppRouter() {
  const location = useLocation();
  const state = location.state && location.state.background ? location.state : null;

  
  const getModalContent = () => {
    switch (location.pathname) {
      case "/login":
        return <Login isModal />;
      case "/signup/employer":
        return <SignupEmployer isModal />;
      case "/signup/applicant":
        return <SignupApplicant isModal />;
      default:
        return null;
    }
  };

  return (
    <>
      <Routes location={state?.background || location}>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/employer" element={<SignupEmployer />} />
        <Route path="/signup/applicant" element={<SignupApplicant />} />
        <Route path="/dashboard/applicant" element={<Dashboard />} />

        {/* Applicant */}
        {/* <Route
          path="/applicant/*"
          element={
            <ProtectedRoute role="applicant">
              <ApplicantLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ApplicantDashboard />} />
        </Route> */}

        {/* Employer */}
        {/* <Route
          path="/employer/*"
          element={
            <ProtectedRoute role="employer">
              <EmployerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<EmployerDashboard />} />
        </Route> */}

        {/* Admin */}
        {/* <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route> */}
      </Routes>

      <AnimatePresence style={{ postion: "relative" }}>
        {state?.background && getModalContent() && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-[#000000E5] backdrop-blur-md pt-20 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.history.back()} 
            style={{
              overflowY: 'scroll', // Enable vertical scrolling
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
            }}
            >
            <motion.div
              className="bg-white rounded-2xl px-8  relative"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={() => window.history.back()}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
                {getModalContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
