import React, { Component } from "react";
import "./style/Home.css"


class Home extends Component {
  render() {




    return (

      <div class=" border-t-4 border-white py-8 w-full px-48">
        <section class="mx-auto max-w-2xl mt-10 ">

          <div class="pt-10 flex items-center">
            <h1 class="home mt-50 tracking-widest text-center w-full">GREEN <strong class="home">ART</strong></h1>
          </div>

          <div class="sp-container mt-10 text-center  mb-72">
            <div class="sp-content text-center ">
              <h2 class="frame-1 uppercase text-black">impactant</h2>
              <h2 class="frame-2 uppercase">déforestation</h2>
              <h2 class="frame-3 uppercase">épidemie</h2>
              <h2 class="frame-4 uppercase">climatique</h2>

              <h2 class="frame-5">
                <span class="mr-10">Ta</span>
                <span class="mr-10">vision va</span>
                <span>changer.</span>
              </h2>
              <a class="sp-circle-link" href="/HomePage">Découvrir</a>
            </div>

          </div>



        </section>
      </div >
    )
  }
}

export default Home;