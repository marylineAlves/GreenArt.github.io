import React, { Component } from "react";

import enfantrirearmee from "../components/image/hopeExpo/childrenofwarJamesSnyder.jpg";
import ensemble from "../components/image/hopeExpo/togetherLalouGreen.jpg";
import petitefille from "../components/image/hopeExpo/smilinggirlAnnieSpratt.jpg";
import enfantsucette from "../components/image/hopeExpo/childsweetLalouGreen.jpg";
import garcon from "../components/image/hopeExpo/boyLalouGreen.jpg";
import garconsouriant from "../components/image/hopeExpo/childrenZachVessels.jpg";
import "./style/HopeExpo.css";
class HopeExpo extends Component {
  render() {
    return (
      <div class="divmob pt-40 ml-14 px-48">
        <div class=" text-xl ">
          <h1 class="container-text-hope mb-10"> Exposition de l'espoir </h1>
          <p class="text-center txtHope">L'espoir est contagieux, comme le rire.<br />
          Sur la certitude que l'avenir peut toujours être meilleur,
          l'optimisme est la foi qui mène à la réalisation.<br />
          Rien ne peut se faire sans l'espoir et la confiance,
          l’espoir est important, car il peut rendre l’instant présent moins difficile à supporter.<br />
          Si nous pensons que demain sera meilleur, nous pouvons supporter les difficultés d’aujourd’hui.
          </p>
        </div>
        <div class="bordermob borderHope flex mt-5  ml-38 mt-10"></div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={garconsouriant} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Zach Vessels
                    <span class="price"> Prix : 1500€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={ensemble} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Lalou Green
                    <span class="price"> Prix : 2250€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={petitefille} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Annie Spratt
                    <span class="price"> Prix : 1250€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={enfantsucette} />
                <div class=" divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Lalou Green
                    <span class="price"> Prix : 1150€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={garcon} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Lalou Green
                    <span class="price"> Prix : 950€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHope block h-auto w-full" src={enfantrirearmee} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    James Snyder
                    <span class="price"> Prix: 550€</span>
                  </h1>
                  <div class="buttonHope">
                    <a href="BookingExpos"><button class="custom-btn-hope btn-5 ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default HopeExpo;