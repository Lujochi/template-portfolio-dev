import { Outlet } from "react-router-dom";

import NavHeader from "./components/Header/NavHeader";
import NavFooter from "./components/Footer/NavFooter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Outlet />
      <NavFooter />
    </div>
  );
}

export default App;
 