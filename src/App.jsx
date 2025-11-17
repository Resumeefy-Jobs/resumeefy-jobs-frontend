import AppRouter from "./routes/AppRouter";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <AppRouter />
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
