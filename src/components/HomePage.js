import React, { Component } from "react";
import enfantpluuie from "../components/image/childrainLalouGreen.jpg";
import cleanday from "../components/image/cleanDay/cleanday.jpg";
import enfantrirearmee from "../components/image/hopeExpo/childrenofwarJamesSnyder.jpg";
import solsec from "../components/image/climateExpo/droughtYodaAdaman.jpg";
import sousAlimentationUn from "../components/image/humanitarianExpo/sousAlimentationUn.jpg";
import "./style/HomePage.css";

class Homepage extends Component {
  render() {
    let TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
      let that = this;
      let delta = 300 - Math.random() * 100;
      if (this.isDeleting) { delta /= 2; }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      let elements = document.getElementsByClassName('txt-rotate');
      for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
    };

    return (
      <div class="divmob px-48 ">
        <section class="titleHome mx-auto max-w-2xl ">
          <h1 class="txt-title text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2 pt-40">Galerie Green Art </h1>
          <div class="ptHome pt-20">
            <img className="" src={enfantpluuie}
              class="homeImg object-cover pl-10"
              alt="description" />
          </div>
        </section>
        <div class="text-center">
          <h2 class="txt-subtitle text-black">Nous sommes
              <span
              class="txt-rotate text-black"
              data-rotate='[ " de l&apos;art.", " une expo.", " clean day."]'></span>
          </h2>
        </div>
        <div class="bordermobHome flex mt-20 border-t-8 border-black w-40"></div>
        <div class="text-center mt-10">
          <p class="txt-paragraph text-black-darkest mb-10 leading-tight  font-serif text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="bordermobHome flex border-t-8 border-black w-40"></div>
        <section class="block1 mx-auto mt-20 mb-20 max-w-7xl">
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <li class="">
              <div class="block2 block overflow-hidden w-full group aspect-w-10 aspect-h-7 pt-14 ">
                <a href="CleanDay">
                  <h3 class="txt-paragraph text-base font-bold leading-5 uppercase text-center pr-10 pb-5"> Clean Day</h3>
                  <img src={cleanday} alt="photo d'une femme nettoyant une plage" width="300" height="300" class="imgHome object-cover pointer-events-none group-hover:opacity-50 h-96 pr-10 " /></a>
              </div>
            </li>
            <li>
              <div class="block2 block overflow-hidden w-full group aspect-w-10 aspect-h-7 ">
                <a href="HopeExpo">
                  <img src={enfantrirearmee} alt="L'enfant qui rit, Lalou Green, 2009" width="300" height="300" class="imgHome object-cover pointer-events-none group-hover:opacity-50 h-96 pr-10" />
                  <h3 class="txt-paragraph text-base font-bold leading-5 uppercase text-center pl-2 pr-12 pt-5"> Exposition de l'espoir</h3>
                </a>
              </div>

            </li>
            <li>
              <div class="ptHome block2 block overflow-hidden w-full group aspect-w-10 aspect-h-7 pt-32">
                <a href="ClimateExpo">
                  <h3 class="txt-paragraph text-base font-bold leading-5 uppercase text-center pr-10 pb-5">Exposition climatique</h3>
                  <img src={solsec} alt="Le bateau, Lalou Green, 2013" width="300" height="300" class="imgHome object-cover pointer-events-none group-hover:opacity-50 h-96 pr-10" /></a>
              </div>
            </li>
            <li>
              <div class="block block2 overflow-hidden w-full group aspect-w-10 aspect-h-7 pt-10">
                <a href="HumanitarianExpo">
                  <img src={sousAlimentationUn} alt="L'enfant au sel, Lalou Green, 2013" width="300" height="300" class="imgHome object-cover pointer-events-none group-hover:opacity-50 h-96 pr-10" />
                  <h3 class="txt-paragraphHome text-base font-bold leading-5 uppercase text-center pr-10 pt-5"> Exposition humanitaire</h3>
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div >
    );
  }
}
export default Homepage;