import React from "react";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
