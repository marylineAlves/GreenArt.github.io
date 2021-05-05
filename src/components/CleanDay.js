import React, { Component } from "react";
import worldcleanupday from "../components/image/cleanDay/worldcleanupday.jpg";
import cleanday from "../components/image/cleanDay/cleanday.jpg";
import fotolia from "../components/image/cleanDay/fotolia.jpg";
import WorldCleanDay from "../components/image/cleanDay/WorldCleanDay.jpg";
import "./style/CleanDay.css";
class CleanDay extends Component {

  render() {
    return (
      <div class="divmob h-auto px-48 pt-40  ">
        <h1 class="titlemob txt-title text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2  uppercase"> Clean Day </h1>
        <h2 class="bordermobClean txt-paragraph text-lg text-center font-serif mb-2 border-b-2 border-black pb-5 "> La Journée mondiale du nettoyage est une opération planétaire.</h2>
        <div class="w-full bg-cover " >
          <img class="imgClean h-2/4 items-center ml-48 justify-center pt-20 pb-10" alt="banierecd" src={worldcleanupday} />
        </div>
        <div class="cleanOne mt-4 flex items-center space-x-5">
          <h2 class="txt-subtitle text-black mr-80 pl-60 text-4xl">Les dernières clean days</h2>
          <a href="Don"><button type="button" class="buttClean focus:outline-none uppercase text-white text-sm bg-black right-0 ml-28 py-2.5 px-5 rounded-md border border-black">Don</button></a>
          <a href="Contact"><button type="button" class="buttClean2 focus:outline-none  uppercase text-white text-sm bg-black right-0 py-2.5 px-5 rounded-md border border-black ">Nous rejoindre</button></a>
        </div>
        <div class="dernierClean mt-14 flex items-center justify-center pb-10 px-48 ">
          <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border border-black shadow-2xl ">
            <img class="imgdernClean w-60 " alt="cleanday" src={cleanday} />
            <p class="text-black text-base">
              Ville : Bruxelles
                      < br />
                      Date : 08 Janvier 2021
                  </p>
            <a href="#" class="btn4">
              En savoir +
              </a>
          </div>
          <div class="dernierClean ml-40">
            <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border border-black shadow-2xl ">
              <img class="imgdernClean w-60 " alt="cleanday" src={cleanday} />
              <p class="text-black text-base ">
                Ville : Paris
                      < br />
                      Date : 20 novembre 2020
                </p>
              <a href="#" class="btn4">
                En savoir +
              </a>
            </div>
          </div>
          <div class="dernierClean ml-40">
            <div>
              <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border border-black shadow-2xl ">
                <img class="imgdernClean w-60 " alt="cleanday" src={cleanday} />
                <p class="text-black text-base">
                  Ville : Marseille
                      < br />
                      Date : 12 mars 2018
                </p>
                <a href="#" class="btn4">
                  En savoir +
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bordermob mt-2 flex w-80 pb-5 pt-10 borderCleanDay"></div>
        <h2 class="txtTitre txt-subtitle text-black pt-2 mb-6 pl-60 text-4xl" >Les prochaines clean days </h2>
        <div class="dernierClean min-h-screen min-w-screen flex items-center justify-center pb-10 px-48 ">
          <div class="dernClean1 flex flex-col max-w-md px-8 py-6 rounded-xl space-y-5 items-center pb-10 border border-black ">
            <h3 class="txtH3 txt-subtitle font-bold text-gray-900 text-xl uppercase">Paris</h3>
            <img class="w-full flex rounded-md" src={WorldCleanDay} alt="WorldCleanDay" />
            <div class="py-3 px-4 my-2 bg-black text-white rounded border border-black uppercase ">20 mai 2021</div>
            <p class="txt-paragraph text-center leading-relaxed font-bold uppercase">
              14 Heures ici
                <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722612106!2d2.2770205846208804!3d48.85883773957339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1617633246337!5m2!1sfr!2sfr"></iframe> </p>
            <p class="txt-paragraph text-justify "> Excepteur sint obcaecat excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <a href="ParticipationCleanDay">
              <button class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent uppercase">Participer</button></a>
          </div>
          <div class="dernierClean ml-40">
            <div class="dernClean1 flex flex-col max-w-md px-8 py-6 rounded-xl space-y-5 items-center border border-black shadow-2xl ">
              <h3 class="txtH3 txt-subtitle font-bold text-gray-900 text-xl uppercase">Londres</h3>
              <img class="w-96 rounded-md" src={fotolia} alt="fotolia" />
              <div class="py-3 px-4 my-2 bg-black text-white rounded border border-black uppercase">01 décembre 2021</div>
              <p class="txt-paragraph text-center leading-relaxed font-bold uppercase">
                16 Heures ici
                <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339433504!2d-0.24167983667527804!3d51.52855824328033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Royaume-Uni!5e0!3m2!1sfr!2sfr!4v1617633339244!5m2!1sfr!2sfr"></iframe> </p>
              <p class="txt-paragraph text-justify "> Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <a href="ParticipationCleanDay"><button class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent uppercase">Participer</button></a>
            </div>
          </div>
        </div>
        <div class="bordermob mt-2 flex pb-5 w-80 borderCleanDay "></div>
        <h2 class="txtTitre txt-subtitle text-black pt-2 pl-60 text-4xl" >Journée mondiale du clean day</h2>
        <div class="divAsso p-6 px-48 ">
          <div class="mb-4 ml-10 w-10/12">
            <div class=" txt-subtitle flex items-center uppercase justify-between pl-3 pr-2 py-3 text-lg text-black font-bold px-48 ">
              Notre association
            </div>
            <div class="p-3 rounded-xl">
              <p class="txt-paragraph text-black mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.</p>
              <p class="txt-paragraph text-black">Lorem ipsum dolor sit amet. Vel laudantium repellat id accusantium cumque aut architecto accusantium ea perferendis molestias. Ad dolorum veritatis ut expedita saepe ea tenetur temporibus non magnam exercitationem. Eum voluptates laudantium qui unde nostrum ut illum harum.
              Id nulla dolorum est nobis quis et accusamus quam non distinctio iusto. Et sunt reprehenderit qui voluptatibus voluptas sit similique nulla eos suscipit deleniti et quia sint ea voluptatum omnis! Nam voluptatem laborum sit Quis minus et enim dolor est repellat enim ea consequatur aliquid! Qui exercitationem eaque cum doloribus rerum vel quia itaque et consectetur maxime id dolor iusto.
              At dolores perferendis et consequatur molestias sit aperiam nihil qui placeat nulla. Et quis consequatur est mollitia quam hic voluptas nisi. Et laboriosam debitis et eaque magni et deserunt cupiditate non eius earum non iure nostrum qui architecto sint non impedit distinctio. Ut omnis nihil aut vero autem 33 quia facere quo magni alias.</p>
            </div>
          </div>
          <div class="flex justify-end mr-40">
            <a href="/Learn"><button type="buttonApprendre" class="buttonApprendre uppercase text-white bg-black py-2.5 px-5 mr-5 rounded-xl border border-black mb-5">En apprendre +</button></a>
          </div>
        </div>
        <div class="bordermob mt-2 flex  pb-5 pt-10 w-80 borderCleanDay"></div>
        <h2 class="txtTitre txt-subtitle text-black pt-2 pl-60 text-4xl" >Actualités : Limiter les déchets</h2>
        <div class="cleanOne">
          <div class="dernierClean mt-10 flex items-center justify-center pb-10 px-48 ">
            <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border shadow-2xl  border-black">
              <img class="imgdernClean w-72" alt="cleanday" src={cleanday} />
              <h3 class="txtTitre txt-subtitle sm:text-xl font-bold mb-4 font-medium text-black"> Tri sélectif</h3>
              <p class="txt-paragraph text-black text-base pb-6 ">
                Date : 08 Janvier 2021
                  </p>
              <a href="#" class="btn4">
                En savoir +
              </a>
            </div>
            <div class="dernierClean ml-40">
              <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border shadow-2xl  border-black">
                <img class="imgdernClean w-72" alt="cleanday" src={cleanday} />
                <h3 class="txtTitre txt-subtitle sm:text-xl font-bold mb-4 font-medium text-black"> Luttons contre.. <br /> les déchets plastiques</h3>
                <p class="txt-paragraph text-black text-base pb-6 ">
                  Date : 08 Janvier 2021
                  </p>
                <a href="#" class="btn4">
                  En savoir +
              </a>
              </div>
            </div>
            <div class="dernierClean ml-40">
              <div class="dernClean1 flex flex-col max-w-md rounded-xl space-y-5 items-center pb-10 border border-black shadow-2xl" >
                <img class="imgdernClean w-72" alt="cleanday" src={cleanday} />
                <h3 class="txtTitre txt-subtitle sm:text-xl font-bold mb-4 font-medium text-black"> Pollution alerte</h3>
                <p class="txt-paragraph text-black text-base pb-6 ">
                  Date : 08 Janvier 2021
                  </p>
                <a href="#" class="btn4">
                  En savoir +
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CleanDay;