import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/UI/Footer";
import { Navbar } from "./components/UI/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar className="mt-10" />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
