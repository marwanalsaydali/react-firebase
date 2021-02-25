import React from "react";
import SourceLink from "./sourcelink";
const Nav = () => {
  return (
    <nav className="sticky top-0 bg-black h-12 shadow-lg flex items-center">
      <div className="container mx-auto flex flex-row justify-between items-center w-full">
        <p className="text-gray-100">Nav</p>
        <SourceLink />
      </div>
    </nav>
  );
};

export default Nav;
