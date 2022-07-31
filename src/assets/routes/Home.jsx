import React from "react";
import { Link } from "react-router-dom";
import "../static/js/btnAnimate";

function Home() {
  return (
    <>
      <div className="text-hueso h-screen  flex justify-center flex-col items-center text-center">
        <div className="mb-44 min-h-[130px]  w-[750px] flex justify-center flex-col items-center text-center">
          <h2 className="w-[500px]  sm:text-6xl font-extrabold">
            <span className="block text-3xl sm:text-5xl md:text-6xl">
              Boost the music
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl">
              quality of your
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl">
              server
            </span>
          </h2>
          <p className="w-64 sm:w-11/12 mt-8 text-grafito-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem provident doloribus cupiditate! Eius perspiciatis reiciendis
            aperiam amet facere dignissimos?
          </p>
        </div>
        <Link
          className="bg-orange-primary px-8 py-3 rounded-md hover:bg-orange-dark transition-all ease-in-out delay-75 font-roboto font-medium  animate__animated animate__pulse animate__infinite animate__slow"
          to="/"
          id="btnAnimate"
        >
          Add Lenny on Discord
        </Link>
      </div>
      <div className="h-screen bg-gradient-to-t from-blue-900 to-grafito "></div>
    </>
  );
}

export default Home;
