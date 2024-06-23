import { Outlet } from "react-router-dom";

import NavHeader from "./components/Header/NavHeader";
import NavFooter from "./components/Footer/NavFooter";

import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <NavHeader />
        <Outlet />
        <NavFooter />
      </div>
    </AnimatePresence>
  );
}

export default App;
