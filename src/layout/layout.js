import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="container mx-auto my-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
