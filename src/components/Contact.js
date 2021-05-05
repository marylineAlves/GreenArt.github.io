import React, { Component } from "react";
import Popup from 'reactjs-popup';
import "./style/Contact.css";
class Contact extends Component {
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
      <div class=" contactPage">
        <div class="divmob pt-5">
          <div>
            <h1 class="titlemobContact  mt-32 ml-96 text-6xl">Contact</h1>
          </div>
          <div class="divContact flex justify-end">
            <div class="content border-2 border-black shadow-md rounded px-6 py-6 mt-6 mb-10 flex flex-col ">
              <div class="-mx-3 md:flex mb-3">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                    Nom *
                </label>
                  <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" type="text" placeholder="Castle"
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
                  <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" id="grid-last-name" type="text" placeholder="Leonardo"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e)} />
                </div>
              </div>
              <div class="-mx-3 md:flex mb-3">
                <div class="md:w-full px-3">
                  <label class="block uppercase tracking-wide text-whitetext-xs font-bold mb-2" for="grid-email">
                    E-mail
                </label>
                  <input class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" id="email" type="email" placeholder="exemple@mail.com"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    required />
                </div>
              </div>
              <div class="-mx-3 md:flex mb-3">
                <div class="md:w-full px-3">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-why">
                    La raison de votre message :
                  </label>
                  <select class="appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white" id="grid-why" type="choice"
                    name="optionSelect"
                    value={this.state.optionSelect}
                    onChange={e => this.handleChange(e)}>
                    <option selected > Choisissez votre raison</option>
                    <option value="1">Participer aux expositions</option>
                    <option value="2">Informations CleanDay</option>
                    <option value="3">Autres</option>
                  </select>
                  <div class="flex flex-wrap -mx-3 mb-6 mt-10">
                    <div class="w-full px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                      </label>
                      <textarea class=" no-resize appearance-none block w-full bg-black text-white border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-white h-48 resize-none" id="message" name="message" placeholder="Ecrivez votre message ici"
                        value={this.state.message}
                        onChange={e => this.handleChange(e)}></textarea>
                    </div>
                  </div>
                  <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                      <Popup
                        trigger={<a> <button class="shadow bg-black hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          onClick={e => this.onSubmit(e)} type="submit"
                        >
                          Envoyer
                    </button></a>}
                        modal
                        nested
                      >
                        {close => (
                          <div >
                            <button className="close" onClick={close}>
                              &times;
                          </button>
                            <div class="popTitle w-full text-xl pl-72 items-center bg-black text-white " >Votre demande de contact a été prise en compte</div>
                            <div class="px-20 mt-10 mb-10">
                              Nous reviendrons vers vous le plus vite possible.
                            </div>
                            <div >
                              <Popup
                                trigger={<button>  </button>}
                                position="top center"
                                nested
                              >
                              </Popup>
                              <a href="CleanDay"> <button
                                class="popupButt ml-80 font-serif border-dashed border-2 border-black px-2 bg-gray-100 "
                                onClick={() => {
                                  console.log('modal closed ');
                                  close();
                                }}
                              >
                                Cliquez ici pour revenir à l'accueil
                            </button></a>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact flex flex-col px-8 my-10 mr-2">
              <div class="mb-10">
                <h2 class="text-3xl">Horaires</h2>
                <p>Notre boutique est ouvert du mardi au samedi, de 10h à 18h.</p>
              </div>
              <div class="mb-10">
                <h2 class="text-3xl">Adresse</h2>
                <p>99 Rue de Rivoli, 75001 Paris</p>
              </div>
              <div>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8122801717077!2d2.331839115926513!3d48.86178990842096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e28ae620d8f%3A0xed60fbae726a6d57!2s99%20Rue%20de%20Rivoli%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1619782593233!5m2!1sfr!2sfr" width="400" height="250" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div >
        </div>
      </div >
    );
  }
}
export default Contact;