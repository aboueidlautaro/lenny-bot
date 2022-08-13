import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../static/js/btnAnimate";
import video1 from "../static/images/video1.mp4";
import video2 from "../static/images/video2.mp4";

function Home() {
  const [videoPlay, setVideoPlay] = useState(video1);

  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  const handleVideoEnded = () => {
    videoPlay === video1 ? setVideoPlay(video2) : setVideoPlay(video1);
  };

  return (
    <>
      <div className="h-screen relative">
        <video
          ref={vidRef}
          muted
          autoPlay
          className="w-full absolute top-0 z-index 10 h-screen object-cover "
          src={videoPlay}
          alt=""
          onEnded={handleVideoEnded}
        />
        <div
          id="container-home"
          className="top-0 text-hueso h-screen flex justify-center flex-col items-center text-center z-40 relative"
        >
          <div className="mb-44 min-h-[130px]  max-w-[900px] flex justify-center flex-col items-center text-center">
            <h2 className="max-w-[90%]  sm:text-6xl font-extrabold">
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
            <p className="w-96 sm:w-11/12 mt-8 text-grafito-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolorem provident doloribus cupiditate! Eius perspiciatis
              reiciendis aperiam amet facere dignissimos?
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
      </div>

      <div className="relative h-screen bg-gradient-to-t from-[#8428C4] to-black "></div>
    </>
  );
}

export default Home;
