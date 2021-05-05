import React, { Component } from "react";

import militaireHumanitaire from "./image/humanitarianExpo/militaireHumanitaire.jpg";
import sousAlimentationUn from "./image/humanitarianExpo/sousAlimentationUn.jpg";
import covid19 from "./image/humanitarianExpo/covid19.jpg";
import animalsouffrant from "./image/humanitarianExpo/animalsouffrant.jpg";
import voiturehuman from "./image/humanitarianExpo/humanitarianTramsoKerouam.jpg";
import enfantHuman from "./image/humanitarianExpo/yemenAhmadAlbasha.jpg";
import "./style/HumanClimatiqueExpo.css";
class HumanExpo2 extends Component {
  render() {
    return (
      <div class="divmob pt-40 ml-14 px-48">
        <div class="expotitre text-xl ">
          <h1 class="container-text-HumanClima mb-10 "> Exposition humanitaire  </h1></div>
        <div class=" text-xl ">
          <p class="textExpo text-center ">Pour ma part, l'humanitaire qui a du sens, c'est tout simplement un élixir d'humanité et d'essence.</p>
        </div>
        <div class="bordermob borderHumanClimatique flex mt-5  ml-38 mt-10"></div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={militaireHumanitaire} />
                <div class=" divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Pierre Lacroix 
                    <span class="price"> Prix : 800€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={sousAlimentationUn} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Rosalie Iles 
                    <span class="price"> Prix : 3050€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={covid19} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Margaret Dill
                    <span class="price">  Prix : 950€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={animalsouffrant} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Cheryl Calmers 
                    <span class="price"> Prix : 1750€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={voiturehuman} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Huey Grays 
                    <span class="price"> Prix : 450€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={enfantHuman} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Joey Hickey 
                    <span class="price"> Prix: 4550€</span>
                </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
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
export default HumanExpo2;
