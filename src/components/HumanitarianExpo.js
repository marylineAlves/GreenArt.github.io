import React, { Component } from "react";
import gohumanexpo from "./image/gohumanexpo.jpg";
import "./style/HumanitarianExpo.css";
class HumanitarianExpo extends Component {
  render() {
    return (
      <section class="divmob text-black body-font p-5  pt-40">
        <h1 class=" container-text-humanExpo uppercase  mb-10"> Exposition Humanitaire </h1>
        <div class="bordermobHuman flex mt-5 border-t-8 border-black w-96 mb-5 ml-28"></div>
        <div class="txt-paragraph-humanExpo py-10">
          <p class="borderPExpo border-r-2 border-black">
            Afin de rendre hommage à un siècle et demi d’opérations humanitaires,
            la Galerie de Green Art propose une exposition en ligne et dans notre boutique <a class="font-bold text-lg uppercase" href="https://goo.gl/maps/JZyXsjadYRUSNvjb7" >( notre plan d'accès ici )</a> . Cette plongée dans l’histoire se fait à travers des photographies.
          </p>
          <p class="borderPExpo border-r-2 border-black">Cette mise en abyme virtuelle dépasse les frontières de la péninsule hellénique.
          En effet les tragédies du siècle dernier, conflits, catastrophes naturelles, migrations résonnent en réalité brutale pour des millions
          d’autres personnes à travers le monde victimes de dizaines d’autres tragédies.</p>
          <p>
            Aujourd’hui, jamais, sur la planète, les besoins humanitaires n’ont été aussi élevés.
            Ce que révèle cette exposition virtuelle est la souffrance commune des gens que l’on soit
            réfugié dans les années 20, enfant mourant de faim durant la Seconde Guerre mondiale ou encore réfugié syrien aujourd’hui.</p>
        </div>
        <div class=" top-1 col-1 row-1">
          <a data-menu-id="about" href="HumanExpo2" class=" menu in " id="menu-about">Voir la
          <span> </span> <span>G</span><span>A</span><span>L</span><span>E</span><span>R</span><span>I</span><span>E</span></a>
        </div>
        <div class="maDivExpo flex justify-center px-48 ">
          <div class="view view-first mt-10 ">
            <a href="/HumanExpo2">
              <img class="imgHomeHuman" title="Entre vite !" src={gohumanexpo} />
              <div class="mask">
                <h2 class="text-white pt-30">Entre vite  </h2>
                <p class="text-white text-4xl"> pour voir la galerie  </p>
              </div>
            </a>
          </div>
        </div>
      </section >
    );
  }
}
export default HumanitarianExpo;
