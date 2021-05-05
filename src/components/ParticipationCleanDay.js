
import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./style/ParticipationCleanDay.css";
class ParticipationCleanDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      optionSelect: "",
      message: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      optionSelect: "",
      message: ""
    });
  };

  render() {
    return (
      <div class="divmob bg-gray-200 bg-random pb-40 pt-40 " >
        <h1 class="titlemob text-4xl text-center tracking-wide font-extrabold leading-loose mb-2  uppercase"> Participation à un Clean Day  </h1>
        <h3 class="text-lg text-center mb-2 border-b-2 border-black pb-5 "> La planète vous remercie </h3>
        <div class="container  mx-auto xl:max-w-3xl h-full flex justify-center pt-5 ">
          <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-xl border-4 border-black flex flex-col my-2 mb-10">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                  Nom *
              </label>
                <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" type="text" placeholder="Renard"
                  name="firstName"
                  pattern="^[( )a-zA-Z]+$"
                  value={this.state.firstName}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Prénom
              </label>
                <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" id="grid-last-name" type="text" placeholder="Clara"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={e => this.handleChange(e)} />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-email">
                  E-mail *
              </label>
                <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" id="email" type="email" placeholder="e-mail"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  required />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-full px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-why">
                  Choisissez la date de participation :
                </label>
                <select class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-black focus:border-white" id="grid-why" type="choice"
                  name="optionSelect"
                  value={this.state.optionSelect}
                  onChange={e => this.handleChange(e)}>
                  <option selected > Choisissez une date de clean day</option>
                  <option value="1">Paris : 20 mai 2021</option>
                  <option value="2">Londre : 01 decembre 2021 </option>
                </select>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3">
                    <Popup
                      trigger={<a><button class="shadow bg-black hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        onClick={e => this.onSubmit(e)} type="submit"
                      >
                        Envoyer</button></a>}
                      modal
                      nested
                    >
                      {close => (
                        <div >
                          <button className="close" onClick={close}>
                            &times;
                          </button>
                          <div class="w-full text-xl text-center bg-black text-white mb-10" >Votre inscription a bien été prise en compte</div>
                          <div class="text-center">
                            Nous reviendrons vers toi avec plus d'information.
                            </div>
                          <div >
                            <Popup
                              trigger={<button>  </button>}
                              position="top center"
                              nested
                            >
                            </Popup>
                            <div class="text-center">
                              <a href="CleanDay"> <button
                                class="order-dashed border-2 border-black px-2 mt-10 bg-gray-100 "
                                onClick={() => {
                                  console.log('modal closed ');
                                  close();
                                }}
                              >
                                Cliquez ici pour revenir au Clean Day
                            </button></a>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-10 ">
          <a href="javascript:history.go(-1)" class="uppercase text-lg font-bold">Revenir au Clean Day </a>
        </div>
      </div >
    );
  }
}

export default ParticipationCleanDay;