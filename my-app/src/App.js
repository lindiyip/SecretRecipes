import React from "react";
import { Outlet } from "react-router-dom";
// import UserContextWrapper from "./contexts/UserContext";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
