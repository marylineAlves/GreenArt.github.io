import React, { Component } from "react";
import climateAction from "../components/image/blog/climateAction.jpg";
import noNatureNoFutur from "../components/image/blog/noNatureNoFutur.jpg";
import planetAlert from "../components/image/blog/planetAlert.jpg";
import turtleJagCezha from "../components/image/blog/turtleJagCezha.png";
import "./style/Blog.css";
class Blog extends Component {
  render() {
    return (
      <div class="divmob px-48 pt-10">
        <section class="blog text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class=" flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="titlemob text-2xl font-medium title-font mb-5 text-gray-900"> Le blog de la planète </h1>
              <p class="lg:w-1/1 w-full leading-relaxed text-base text-lg">
                Parce que la nature est importante pour chacun de nous.<br />
                Green Art répond à vos questions au sujet de la protection de la nature et de l'environnement qui nous entoure.
              </p>
            </div>
            <div class="bordermobBlog flex mt-5 border-t-8 border-black w-96 mb-20 ml-28"></div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class=" p-4  md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                <img class=" object-cover object-center" alt="femme" src={turtleJagCezha} />
                <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                  <div class="font-medium font-bold uppercase">La pollution </div>
                  <div class="mb-5">COMMENT LES PLAGES LUTTENT CONTRE CETTE CATASTROPHE.</div>
                  <div class="btnArticle">
                    <a href="/ArticleOne"><button class=" "><span class="btnArticleSpan">Lire plus</span></button></a>
                  </div>
                </div>
              </div>
              <div class=" p-4  md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                <img class="object-cover object-center " alt="femme" src={noNatureNoFutur} />
                <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                  <div class="font-medium font-bold uppercase">La biodiversité</div>
                  <div class="mb-5">LE DÉCLIN MASSIF DE LA BIODIVERSITÉ MENACE L'HUMANITÉ.</div>
                  <div class="btnArticle">
                    <a href="/ArticleTwo"><button class=" "><span class="btnArticleSpan">Lire plus</span></button></a>
                  </div>
                </div>
              </div>
              <div class=" p-4 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                <img class="object-cover object-center " alt="femme" src={climateAction} />
                <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                  <div class="font-medium font-bold uppercase">Les manifestations</div>
                  <div class="mb-5">DU CHANGEMENT CLIMATIQUE... MAINTENANT.</div>
                  <div class="btnArticle">
                    <a href="/ArticleOne"><button class=" "><span class="btnArticleSpan">Lire plus</span></button></a>
                  </div>
                </div>
              </div>
              <div class=" p-4 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                <img class="object-cover object-center " alt="femme" src={planetAlert} />
                <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                  <div class="font-medium font-bold uppercase">Une seule planète</div>
                  <div class="mb-5">ELLE NE SUFFIT PLUS A L'HUMANITÉ POUR VIVRE.</div>
                  <div class="btnArticle">
                    <a href="/ArticleTwo"><button class=" "><span class="btnArticleSpan">Lire plus</span></button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Blog;