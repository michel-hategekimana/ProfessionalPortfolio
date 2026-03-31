import React from "react";
import NavigationBar from "../components/NavigationBar";

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      
    </div>
  );
};

export default Layout;
