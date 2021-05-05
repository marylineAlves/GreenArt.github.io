import React, { Component } from "react";
import argentPlanete from "../components/image/cleanDay/argentPlanete.jpg";
import "./style/Don.css";
class Don extends Component {
  render() {
    return (
      <div class="divmob px-48  pt-10">
        <h1 class="titlemob text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2 pt-40 uppercase"> faire une donation</h1>
        <h3 class="bordermob text-lg text-center font-serif mb-2 border-b-2 border-black pb-5 "> Pour la planète, pour nous, pour vous !</h3>
        <div class="flex items-center mt-10 justify-center mb-20">
          <img class="imgDonation rounded-full w-4/12" src={argentPlanete} alt="donation" />
        </div>
        <div class=" mb-10">
          <h4 class="txtCenter text-xl font-bold font-serif leading-loose mb-2 uppercase"> Pourquoi faire un don ? </h4>
          <p class="textPdona text-lg text-justify font-serif mb-2 pb-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc. Eu feugiat pretium nibh ipsum consequat
          nisl vel pretium lectus. Mi quis hendrerit dolor magna. Commodo quis imperdiet massa tincidunt. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci.
          Mattis enim ut tellus elementum sagittis vitae. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Fames ac turpis egestas maecenas pharetra convallis.
          Tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
          <p class="textPdona text-lg text-justify font-serif mb-5 "><span STYLE="color: #ff770f">●</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.</p>
          <p class="textPdona text-lg text-justify font-serif mb-5 ">
            <span STYLE="color: #ff770f">●</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.
          </p>
          <p class="textPdona text-lg text-justify font-serif mb-2 pb-5 "><span STYLE="color: #ff770f">●</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc.
          </p>
        </div>
        <div class="borderDon bordermob"></div>
        <div id="col1">
          <div class="msgDon mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col rounded-lg mb-40">
            <h3
              class="txtCenter text-xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2  uppercase">Un message d'amour </h3>
            <div>
              <ul class="pt-1 pb-2 px-3 overflow-y-auto">
                <li class="mt-2">
                  <a
                    class="p-5 flex flex-col justify-between
                      bg-gray-100 dark:bg-gray-200 rounded-lg"
                  >
                    <p
                      class="text-sm font-medium leading-snug
                        text-gray-600 my-3 font-serif">
                      Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Explicabo assumenda porro
                      sapiente, cum nobis tempore delectus
                      consectetur ullam reprehenderit quis ducimus,
                      iusto dolor nam corporis id perspiciatis
                      consequuntur saepe excepturi.
                      </p>
                    <div class="flex justify-between">
                      <div class="flex">
                        <img
                          class="h-6 w-6 rounded-full mr-3"
                          src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                          alt="" />
                        <span class="font-serif">
                          <span
                            class="text-blue-500
                              font-semibold">
                            Regina Camille,
                            </span>
                            22ans
                          </span>
                      </div>
                      <p
                        class="text-sm font-medium leading-snug
                          text-gray-600 font-serif uppercase">
                        Il y a 2 heures
                        </p>
                    </div>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    class="p-5 flex flex-col justify-between
                      bg-gray-100 dark:bg-gray-200 rounded-lg"
                  >
                    <div
                      class="flex items-center justify-between
                        font-semibold capitalize dark:text-gray-700">
                    </div>
                    <p
                      class="text-sm font-medium leading-snug
                        text-gray-600 my-3">
                      Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit.
                      </p>
                    <div class="flex justify-between">
                      <div class="flex">
                        <img
                          class="h-6 w-6 rounded-full mr-3"
                          src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                          alt="Issue" />
                        <span class="font-serif">
                          <span
                            class="text-blue-500
                              font-semibold">
                            Chuck Bass,
                            </span>
                            30ans
                          </span>
                      </div>
                      <p
                        class="text-sm font-medium leading-snug
                          text-gray-600 font-family uppercase">
                        Il y a 2 jours
                        </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <aside class="donDiv  mr-1 px-6 py-4 flex flex-col  rounded-xl 
          dark:text-gray-400 rounded-r-lg overflow-y-auto mb-10">
            <span class="spantext mt-1 text-xl font-semibold mt-10">1701.00 € de récolter</span>
            <a href="Payments"> <button
              class="btnDon mt-8 flex items-center py-4 text-white rounded-lg
            bg-yellow-600  shadow focus:outline-none pl-1 pr-6">
              <svg class="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
              <span class="text-3xl">Faire un don</span>
            </button></a>
            <div class="mt-12 flex items-center">
              <span>Don récents</span>
              <button class="ml-2 focus:outline-none">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#ff770f"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 11.97h-5l2.26-2.26a4.94 4.94 0 00-3.76-1.74c-2.37 0-4.35 1.66-4.86 3.88l-.96-.32c.64-2.62 3-4.56 5.82-4.56 1.78 0 3.37.79 4.47 2.03L18 8.97v5z"></path></svg>
              </button>
            </div>
            <a
              class="mt-2 p-4 flex justify-between bg-gray-100 rounded-lg
            font-semibold capitalize">
              <div class="flex">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RZ5sKLtFG-Q2xfXlLa5DbFsmF52Gc-C49B4s63CtSxLkzQY&s"
                  alt="profile" />
                <div class=" ml-4">
                  <span>Anonyme</span>
                </div>
              </div>
              <span>25 €</span>
            </a>
            <a
              class="mt-2 p-4 flex justify-between bg-gray-100 rounded-lg
            font-semibold capitalize">
              <div class="flex">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://images.theconversation.com/files/194372/original/file-20171113-27632-nqd3m1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                  alt="profile" />
                <div class="flex flex-col ml-4">
                  <span>Marshall MG</span>
                  <span class="text-xs uppercase text-gray-600">Courage, je suis avec vous</span>
                </div>
              </div>
              <span>250€</span>
            </a>
            <a
              class="mt-2 p-4 flex justify-between bg-gray-100 rounded-lg
            font-semibold capitalize">
              <div class="flex">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RZ5sKLtFG-Q2xfXlLa5DbFsmF52Gc-C49B4s63CtSxLkzQY&s"
                  alt="profile" />
                <div class="flex flex-col ml-4">
                  <span>Pierre Wild</span>
                  <span class="text-xs uppercase text-gray-600">Je participe !!!!
                </span>
                </div>
              </div>
              <span>5 €</span>
            </a>
            <a
              class="mt-2 p-4 flex justify-between bg-gray-100 rounded-lg
            font-semibold capitalize">
              <div class="flex">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://images.theconversation.com/files/194372/original/file-20171113-27632-nqd3m1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                  alt="profile" />
                <div class="flex flex-col ml-4">
                  <span>anonyme</span>
                </div>
              </div>
              <span>20€</span>
            </a>
            <a
              class="mt-2 p-4 flex justify-between bg-gray-100 rounded-lg
            font-semibold capitalize">
              <div class="flex">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://images.theconversation.com/files/194372/original/file-20171113-27632-nqd3m1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                  alt="profile" />
                <div class="flex flex-col ml-4">
                  <span>anonyme</span>
                </div>
              </div>
              <span>2€</span>
            </a>
            <div class="mt-4 flex justify-center capitalize text-blue-600">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#ff770f"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
            </div>
          </aside>
        </div>
        <div class="txtCenter">
          <a href="javascript:history.go(-1)" class=" uppercase text-lg font-bold font-serif ">Revenir au Clean Day </a>
        </div>
      </div>
    );
  }
}
export default Don;