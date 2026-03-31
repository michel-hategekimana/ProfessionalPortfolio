import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
