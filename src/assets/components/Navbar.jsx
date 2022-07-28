import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="fixed h-20 text-white bg-gradient-to-b from-black/40 to-transparent">
          <div className="w-screen h-16 mx-auto flex justify-around items-center">
            <Link to="/">LOGO</Link>

            <Link
              to="/about"
              className="bg-orange-primary px-4 py-1 rounded-md hover:bg-orange-dark transition-all ease-in-out delay-75"
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
