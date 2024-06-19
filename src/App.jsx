import "./App.css";

import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
