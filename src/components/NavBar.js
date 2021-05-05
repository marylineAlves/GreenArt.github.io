import React, { Component, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import logo from "./logo/logoGreenArt.png";
import "./style/NavBar.css";


export default function NavBar() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  function handleClick(e) {
    e.preventDefault();
    const expoNav = document.querySelector("#expoNav");
    expoNav.classList.toggle("hidden");
    console.log('Le lien a été cliqué.');
  }

  return (
    <div className="Header">
      <a href="/HomePage" class="p-2 mr-4 inline-flex items-center">
        <img alt="logo" class="w-20  border-2 border-gray-300" src={logo} />
        <span class="text-xl text-white pl-5 uppercase tracking-wide">Green Art</span>
      </a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div
          class="Nav hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation">
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a href="Blog" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
              <span>Blog</span>
            </a>

            <div class="dropdown flex flex-col">
              <button onClick={handleClick} class="dropbtn">Expositions</button>
              <div class="dropdown-content">
                <div class="row">
                  <div id="expoNav" class="column hidden flex flex-col">
                    <a href="HumanitarianExpo" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                      <span>Exposition humanitaire</span>
                    </a>
                    <a href="ClimateExpo" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                      <span>Exposition climatique</span>
                    </a>
                    <a href="HopeExpo" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
                      <span>Exposition de l'espoir</span>
                    </a>
                  </div></div>
              </div>
            </div>



            <a href="CleanDay" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
              <span>Clean day</span>
            </a>
            <a href="AboutUs" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
              <span>A propos de nous</span>
            </a>
            <a href="Contact" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white">
              <span>Contact</span>
            </a>  </div>
        </div>

      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img" aria-label="">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </span>
      </button>
    </div>
  );
}
