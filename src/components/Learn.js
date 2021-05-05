import React, { Component } from "react";
import learntel from "./image/cleanDay/learntel.jpg";
import "./style/Learn.css";
class Learn extends Component {
  render() {
    return (
      <div class=" divmobLearn h-auto px-48 pt-40 flex items-center justify-center mr-20">
        <div class="mr-20">
          <h2 class="titlemob text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2">En apprendre +</h2>
          <img
            class="rounded-full h-full w-full flex items-center justify-center shadow-2xl border-2 border-white"
            src={learntel}
            alt="learntel"
          />
        </div>
        <section class=" sectionLearn border-l-2 border-black pl-10 mb-10">
          <h3 class="text-lg font-serif font-bold mb-10">Lorem ipsum dolor sit amet : </h3>
          <ul>
            <li class="mb-5">
              <strong class="strong" >2008</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </li>
            <li class="mb-5">
              <strong class="strong">2009</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </li>
            <li class="mb-5">
              <strong class="strong">2010</strong> - Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <li class="mb-5">
              <strong class="strong">2016</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </li>
            <li class="mb-5">
              <strong class="strong">2017</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <li class="mb-5">
              <strong class="strong">2018</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <li class="mb-5">
              <strong class="strong"> 2019</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </li>
            <li class="mb-5">
              <strong class="strong">2020</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <li class="mb-5">
              <strong class="strong">2021</strong> -  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </li>
          </ul>
          <div>
            <p>
              "Lorem ipsum dolor sit amet. Aut assumenda fugit aut quia eveniet ad iure internos et omnis voluptatem id quisquam repellat
              delectus cumque et architecto omnis. Sed reiciendis cumque id molestiae laborum vel quod sint. Ad quisquam architecto et
              reiciendis deleniti aut veritatis quam et quia doloremque aut alias magni eos rerum dolores ex dolor similique?
              Ea fugiat explicabo est sequi nisi et incidunt voluptate sit quis nostrum in modi dolore sit cumque omnis."
            </p>
            <cite>-- Est cumque iste quo cumque alias et dolor veniam rem similique dolores</cite>
          </div >
          <div class="mt-10 ">
            <a href="javascript:history.go(-1)" class="uppercase text-lg font-bold font-serif ">Revenir au Clean Day </a>
          </div>
        </section>
      </div >
    );
  }
}
export default Learn;