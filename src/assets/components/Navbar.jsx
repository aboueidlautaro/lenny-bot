import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="h-24 text-white bg-gradient-to-b from-black/40 to-transparent">
          <div className="w-full h-20 mx-auto flex justify-around items-center">
            <Link to="/">LOGO</Link>

            <Link
              to="/about"
              className="bg-orange-primary px-4 py-1 rounded-md hover:bg-orange-dark transition-all ease-in-out delay-75 font-roboto font-medium"
            >
              Get Lenny Bot
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
