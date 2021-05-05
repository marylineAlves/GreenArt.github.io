import React, { Component } from "react";

import "../style/Blog.css"

class ArticleTwo extends Component {
  render() {

    return (

      <div class="divmob px-48 pt-40">
        <div class="w-full md:w-2/5 mx-auto">

          <div class="titlemob flex mt-5 border-t-4 border-black w-40 mb-10 "></div>


          <div class="w-full text-4xl px-5 font-bold font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </div>
          <div class="w-full text-gray-500 px-5 pb-5 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </div>
          <div class="mx-5">
            <img src="https://static.politico.com/dims4/default/fcd6d6a/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F22%2F87%2F2259ffd444678054896b9fa32b4d%2Fgettyimages-1221513169.jpg" />
          </div>

          <div class="w-full text-gray-600 text-normal mx-5">
            <p class="border-b-2 py-3">  Lorem ipsum dolor sit amet, consectetur adipisci elit |   Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>



          <div class="px-5 w-full mx-auto ">
            <p class="my-5"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>

            <p class="my-5">
              Lorem ipsum dolor sit amet. Et earum rerum ut expedita mollitia et molestiae blanditiis id commodi
              reprehenderit cum corporis molestiae et officia quia ut deserunt esse. Et necessitatibus autem et distinctio enim et iusto nihil.
              Qui laboriosam neque non omnis nesciunt id voluptate fugit nam mollitia enim.
              Et beatae autem et eius Quis quo nulla harum qui molestiae quidem aperiam aliquam est temporibus rerum.
            </p>

            <p class="my-5">
              Ut iure nihil ea magnam internos ut consequatur incidunt est magnam enim. Eum quasi voluptatem dolorem repellat cum
              labore blanditiis sit inventore dolorem. Et aperiam laboriosam et aspernatur perferendis ut quis impedit est distinctio nesciunt eos nemo eius a quia tempora.
              Et cupiditate reiciendis ut sequi adipisci qui quas odit vel corporis dicta eum obcaecati facilis ut quas nulla.
            </p>
          </div>


          <div class="w-full font-thin italic px-5 pt-3">
            <p> By Pascal Delacroix </p>
            <p>
              The 06/04/2021
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

export default ArticleTwo;