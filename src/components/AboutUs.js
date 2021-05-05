import React, { Component } from "react";

import alison from "../components/image/we/alison.png";
import sylvain from "../components/image/we/sylvain.png";
import laurine from "../components/image/we/laurine.png";
import maryline from "../components/image/we/maryline.png";
import "./style/AboutUs.css";
class AboutUs extends Component {
  render() {
    return (
      <div class="divmobUs h-auto px-48 pt-40">
        <div class="section text-xl">
          <div class="top-border left"></div>
          <div class="top-border right"></div>
          <h1 class="titlemobUs text-6xl text-center font-extrabold font-serif leading-loose"> Nos super héros </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="separator"></div>
        <p class="stxtUS text-center font-serif text-xl "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div class="bordermob flex mt-20 border-t-8 border-black w-40 pb-20"></div>
        <div>
          <div class="usCard min-h-screen min-w-screen flex">
            <div>
              <div class="usCard1 flex flex-col max-w-md bg-white px-2 mr-5 py-6 rounded-xl space-y-5 items-center border-2 border-black">
                <h3 class="font-serif font-bold text-gray-900 text-xl">Alison</h3>
                <img class="w-full rounded-md h-auto" src={alison} alt="alison" />
                <p class="text-center leading-relaxed pt-5">" Le seul endroit ou vos rêves sont impossibles, c'est dans votre tête. "</p>
              </div>
            </div>
            <div class="usCard min-h-screen min-w-screen  flex ">
              <div>
                <div class="usCard1 flex flex-col max-w-md bg-white py-6 mr-5 rounded-xl space-y-5 items-center pb-10 border-2 border-black">
                  <h3 class="font-serif font-bold text-gray-900 text-xl">Sylvain</h3>
                  <img class="w-full rounded-md pt-5" src={sylvain} alt="sylvain" />
                  <p class="text-center leading-relaxed">" Ils ne savaient pas que c'était impossible, alors ils l'ont fait. "</p>
                </div>
              </div>
            </div>
            <div class="usCard min-h-screen min-w-screen flex">
              <div >
                <div class="usCard1 flex flex-col max-w-md bg-white  py-6 rounded-xl mr-5 space-y-5 items-center border-2 border-black">
                  <h3 class="font-serif font-bold text-gray-900 text-xl ">Laurine</h3>
                  <img class="w-full rounded-md" src={laurine} alt="laurine" />
                  <p class="text-center leading-relaxed">" On a deux vies. La deuxième commence le jour ou l'on se ren compte qu'on en a qu'une. " </p>
                </div>
              </div>
            </div>
            <div class="usCard min-h-screen min-w-screen flex">
              <div>
                <div class="usCard1 flex flex-col max-w-md bg-white py-6 rounded-xl space-y-5 items-center border-2 border-black">
                  <h3 class="font-serif font-bold text-gray-900 text-xl">Maryline</h3>
                  <img class="w-full rounded-md h-50" src={maryline} alt="maryline" />
                  <p class="text-center leading-relaxed">" L'art de la photo est d'immortaliser des portraits muets, et d'en faire naître des portraits parlants."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default AboutUs;