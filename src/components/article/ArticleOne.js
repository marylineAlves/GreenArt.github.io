import React, { Component } from "react";
import humanitairePlageEnfant from "../image/blog/humanitairePlageEnfant.mp4";
import "../style/Blog.css"

class ArticleOne extends Component {
  render() {

    return (

      <div class="divmob px-48 pt-40">
        <div class="w-full md:w-2/5 mx-auto">
          <div class="mx-5 my-3 text-sm">
            <a href="" class=" font-bold font-serif uppercase text-xl hidden"> Article 1</a>
          </div>

          <div class="titlemob flex mt-5 border-t-4 border-black w-40 mb-10 "></div>

          <div class=" w-full text-4xl px-5 font-bold font-serif">
            POLLUTION PLASTIQUE: COMMENT LES PLAGES LUTTENT
        </div>
          <div class="w-full text-gray-500 px-5 pb-5 pt-2">
            Alors que la Méditerranée détient le triste record de mer la plus polluée d'Europe,
            certaines villes prennent des dispositions pour tenter d'enrayer la pollution des eaux par les déchets plastiques.
            </div>
          <div class="mx-5">
            <iframe class="videoArticle " width="600" height="344" src={humanitairePlageEnfant} frameborder="0" allowfullscreen></iframe>
          </div>

          <div class="w-full text-gray-600 text-normal mx-5">
            <p class="border-b-2 py-3">Des déchets plastiques sur les rives de la rivière Jukskei à Johannesburg | Gulshan Khan-AFP</p>
          </div>

          <div class="px-5 w-full mx-auto ">
            <p class="my-5"> Sacs et bouteilles plastiques, canettes métalliques, emballages alimentaires, filets de pêche, vêtements.
            Alors que la mer Méditerranée se noie sous les déchets, le gouvernement s'est fixé un objectif: zéro plastique rejeté en mer d'ici 2025.
          </p>

            <p class="my-5">
              Brune Poirson, la secrétaire d'État à la Transition écologique, a ainsi présenté lundi une charte pour lutter contre les déchets plastiques sur les plages.
              <br />Au total, quinze engagements -de l'installation de poubelles de tri à la
              sensibilisation des commerçants installés près du littoral à ne pas utiliser d'objets en
              plastique à usage unique- qui permettront de décerner un label aux plages.
            </p>

            <p class="my-5">
              <span STYLE="font-weight:bold; text-transform: uppercase;">Car il y a urgence.</span> <br />Chaque année, la France rejette plus de 10.000 tonnes de plastique en Méditerranée,
              selon un rapport de l'organisation environnementale WWF.<br />
              La Grande Bleue est ainsi tristement devenue la mer la plus polluée d'Europe, pointe l'Institut français de recherche pour l'exploitation de la mer (Ifremer).
              <br />Selon cet institut qui a mené une vaste étude de suivi entre 1994 et 2017,
              la quantité de déchets marins augmente chaque année depuis dix ans.<br /> Et le plastique représente plus de 60% de ces déchets.
              <br />Aucune zone n'est épargnée: la pollution touche aussi bien les côtes que le large, la surface que les profondeurs.
            </p>
          </div>


          <div class="w-full font-thin italic px-5 pt-3">
            <p> Céline Hussonnois-Alaya </p>
            <p>
              Le 06/04/2021
            </p>
          </div>

          <div class="mt-20 ml-5 pb-10">
            <a href="javascript:history.go(-1)" class="uppercase text-lg font-bold font-serif">Page précédente</a>
          </div>

        </div>
      </div>
    );
  }
}

export default ArticleOne;