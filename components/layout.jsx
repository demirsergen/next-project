import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 48px)" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
