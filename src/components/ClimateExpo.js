import React, { Component } from "react";
import ourspolaire1 from "./image/climateExpo/bearsStephaniePowell.png";
import secheresse from "./image/climateExpo/droughtYodaAdaman.jpg";
import incendie from "./image/climateExpo/fireDaveHoefler.jpg";
import inondation from "./image/climateExpo/floodChrisGallagher.jpg";
import glace from "./image/climateExpo/iceLW.jpg";
import petrole from "./image/climateExpo/petroleumDanielBeltra.jpg";
import "./style/HumanClimatiqueExpo.css";
class ClimateExpo extends Component {
  render() {
    return (
      <div class="divmob pt-40 ml-14 px-48">
        <div class="expotitre text-xl ">
          <h1 class="container-text-HumanClima mb-10 "> Exposition climatique  </h1></div>
        <div class=" text-xl ">
          <p class="textReservation text-center ">Il faut choisir ses batailles.<br />
          Ma priorité, en France, en Europe, à l’international, ce sont les émissions de CO2 et le réchauffement climatique.</p>
        </div>
        <div class="bordermob borderHumanClimatique flex mt-5  ml-38 mt-10"></div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={ourspolaire1} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Stephanie Powe 
                    <span class="price"> Prix : 4800€</span>
              </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={incendie} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Dave Hoefler 
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
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={inondation} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Chris Gallagher 
                    <span class="price"> Prix : 1950€</span>
              </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={secheresse} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Yoda Adaman 
                    <span class="price"> Prix : 930€</span>
              </h1>
                  <div class="btnHumanClima">
                    <a href="BookingExpos"><button class="custom-btn-human-clima btn-humanClima ml-40">Réserver</button></a>
                  </div>
                </div>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article class="overflow-hidden rounded-lg shadow-2xl">
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={petrole} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Daniel Beltra 
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
                <img alt="Placeholder" class="imgHumanClima block h-auto w-full" src={glace} />
                <div class="divReserv flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="textReservation text-lg">
                    Lewis Waighen 
                    <span class="price"> Prix: 4950€</span>
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
export default ClimateExpo;