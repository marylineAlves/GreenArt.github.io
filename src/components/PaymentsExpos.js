import React, { Component } from "react";
import Popup from 'reactjs-popup';
import logo from "./logo/logo.jpg";
import GIFTEST from "../components/gif/GIFTEST.gif"
import './style/Payments.css'
class PaymentsExpos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      namecard: "",
      numcard: "",
      optionmonth: "",
      optionyear: "",
      securitycode: ""
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
      name: "",
      namecard: "",
      numcard: "",
      optionmonth: "",
      optionyear: "",
      securitycode: ""
    });
  };

  render() {
    return (
      <div class="divmob min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16 px-48">
        <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
          <div class="w-full pt-1 pb-5">
            <div class="logoPaym bg-white text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <img alt="logo" class="w-full ml-2 border-2 border-white" src={logo} />
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">paiment de ta réservation</h1>
          </div>
          <div class="mb-3 flex -mx-2 justify-center mb-10">
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" />
              </label>
            </div>
          </div>
          <div class="formReserv mb-3 flex -mx-2 justify-center">
            <div class="numForm mb-3">
              <label class="font-bold text-sm mb-2 ml-1">Nom de la carte</label>
              <div>
                <input name="namecard" value={this.state.namecard}
                  onChange={e => this.handleChange(e)} class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
              </div>
            </div>
            <div class="numForm mb-3 pl-10">
              <label class="font-bold text-sm mb-2 ml-1">Numéro de la carte</label>
              <div>
                <input name="numcard" value={this.state.numcard}
                  onChange={e => this.handleChange(e)} class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
              </div>
            </div>
          </div>
          <div class=" formReserv mb-3 -mx-2 flex items-end px-96 ml-5">
            <div class="textCenterPaym2 px-2 w-1/2">
              <label class=" font-bold text-sm mb-2 ml-1">Date d'expiration</label>
              <div>
                <select name="optionmonth" value={this.state.optionmonth}
                  onChange={e => this.handleChange(e)} class="form-select w-80 pl-28 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - Janvier</option>
                  <option value="02">02 - Février</option>
                  <option value="03">03 - Mars</option>
                  <option value="04">04 - Avril</option>
                  <option value="05">05 - Mai</option>
                  <option value="06">06 - Juin</option>
                  <option value="07">07 - Juillet</option>
                  <option value="08">08 - Aout</option>
                  <option value="09">09 - Septembre</option>
                  <option value="10">10 - Octobre</option>
                  <option value="11">11 - Novembre</option>
                  <option value="12">12 - Decembre</option>
                </select>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <select name="optionyear" value={this.state.optionyear}
                onChange={e => this.handleChange(e)} class="form-select w-80 pl-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div class="formReserv mb-10 items-center -mx-2 px-96 ml-5 ml-72">
            <label class="textCenterPaym font-bold text-sm mb-2 ml-1">Code de sécurité</label>
            <div>
              <input name="securitycode" value={this.state.securitycode}
                onChange={e => this.handleChange(e)} class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
            </div>
          </div>
          <Popup
            trigger={<div class="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="60" width="320" />
              </svg>
              <a><button type="button" class=" txtPaym focus:outline-none uppercase pl-20 right-0  py-2.5 px-5 ">Payer maintenant</button></a>
            </div>}
            modal
            nested
          >
            {close => (
              <div>
                <a href="homePage"><button className="close" onClick={close}>
                  &times;
                </button>
                </a>
                <div class="popTitle w-full text-xl pl-52 flex items-center bg-green-300" > L'acompte pour la réservation à bien été pris en compte </div>
                <div><img class="mob ml-72 w-96" src={GIFTEST} /></div>
                <div class="textPop px-20 mt-10 mb-10 text-lg">
                  Nous tenons tout d’abord à vous remercier de l’achat de cette photographie, autant pour le photographe,
                  que pour notre galerie d’art. <br />
                  <br />
                  Nous allons prendre contact avec vous par <span STYLE="color:red; font-weight:bold; text-transform: uppercase;">téléphone dans la journée</span>, rester à l’écoute !
                  <br />
                  <br />
                  <span STYLE="color:red; font-weight:bold; text-transform: uppercase;">Deux possibilités s'offrent à vous :</span>
                  <br />
                  <br />
                  <span STYLE="font-weight:bold;">Vous pourrez venir <span STYLE="text-transform: uppercase;">dès demain</span> récupérer votre chef-d’œuvre en boutique</span>,
                  et finaliser votre paiement directement auprès d’un de nos quatre galeristes. <br />
                  <br />
                  <span STYLE="color:red; font-weight:bold; text-transform: uppercase;">OU</span>
                  <br />
                  <br />
                  Si vous n'habitez pas en ville Parisienne, ou que vous êtes pas de passage dans notre belle ville lumière,
                  <span STYLE="font-weight:bold; text-transform: uppercase;"> nous pouvons également vous l'envoyer par un transporteur privé.</span><br />
                  <span STYLE="font-weight:bold;"> Le réglement se terminera en ligne avec nous</span> .
                  <br />
                  <br />
                  <span STYLE="font-size: 15px;"> ps :  ce message vous sera également transmis par e-mail.</span>
                </div>
                <div >
                  <Popup
                    trigger={<button>  </button>}
                    position="top center"
                    nested
                  >
                  </Popup>
                  <a href="homePage"> <button
                    class="popupButt ml-80 font-serif border-dashed border-2 border-black px-2 bg-gray-100 "
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    Click ici pour revenir à l'accueil
          </button></a>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div >
    );
  }
}
export default PaymentsExpos;