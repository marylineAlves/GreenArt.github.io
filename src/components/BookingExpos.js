import React, { Component } from "react";
import "./style/Booking.css"
class BookingExpos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstName: "",
      email: "",
      tel: ""
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
      firstName: "",
      email: "",
      tel: ""
    });
  };

  render() {
    return (
      <div class="divmob px-48  pt-10">
        <h1 class="titleBook text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2 pt-40 uppercase"> Réservation d'une photographie</h1>
        <div class="borderBooking flex mt-5  ml-38 mt-10 mb-5"></div>
        <div class="mb-10">
          <h4 class="acompteReserv text-xl font-bold font-serif leading-loose mb-2 uppercase"> Pour toute réservation un acompte :  </h4>
          <p class="textReserv text-lg text-justify font-serif mb-2 pb-5 ">L’acompte est une somme versée en avance par le client sur le montant global de la facturation. Le client devra donc payer le reste dû plus tard, à la fin de la mission.
          Le versement d’un acompte implique des obligations, autant pour vous que pour le client. Il représente un engagement ferme des deux parties.
          Cela signifie que votre client est dans l’obligation d’acheter et ne peut donc pas se rétracter. Vous concernant, vous avez pour obligation d’exécuter la mission ou de fournir la marchandise.
          En cas de rétractation d’une des deux parties, des dommages et intérêts pourront être versés. Pour être valable, la demande d’acompte doit clairement être indiquée sur le devis ou le bon de commande..</p>
          <p class="textReserv text-lg text-justify font-serif mb-5 "><span STYLE="color: #046c78">●</span>Un acompte vous sera demandé ( c'est une somme fixe et obligatoire pour toute les photographies réservé du montant de
          <span STYLE="color:red; font-weight:bold; text-transform: uppercase;"> 200€ NET </span>).</p>
          <p class="textReserv text-lg text-justify font-serif mb-5 ">
          <span STYLE="color: #00770f">●</span>Remplir le formulaire ci-dessous
          </p>
          <p class="textReserv text-lg text-justify font-serif mb-2 "><span STYLE="color: #046c78">●</span>Pour finir la réservation cliquer sur le bouton valider, vous accéder au formulaire
          de paiment pour réserver votre toile photographique.
          </p>
        </div>
        <div>
          <h4 class="textReservForm text-4xl text-justify font-serif mb-5 ">
            Formulaire de réservation :
          </h4>
        </div>
        <div class="formReserv mb-3 flex -mx-2 justify-center">
          <div class="NumNameForm mb-3">
            <label class="formFont font-bold text-sm mb-2 ml-1">Votre nom : </label>
            <div>
              <input name="name" value={this.state.name}
                onChange={e => this.handleChange(e)} class=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Twist" type="text" />
            </div>
          </div>
          <div class="NumNameForm mb-3 pl-10">
            <label class="formFont font-bold text-sm mb-2 ml-1">Votre prénom :</label>
            <div>
              <input name="firstName" value={this.state.firstName}
                onChange={e => this.handleChange(e)} class=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Anastasya" type="text" />
            </div>
          </div>
        </div>
        <div class="formReserv mb-3 flex -mx-2 justify-center">
          <div class="NumNameForm mb-3">
            <label class="formFont font-bold text-sm mb-2 ml-1">Votre email : </label>
            <div>
              <input name="email" value={this.state.email}
                onChange={e => this.handleChange(e)} class=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="votreEmai@xxxx.xxx" type="text" />
            </div>
          </div>
          <div class="NumNameForm mb-3 pl-10">
            <label class="formFont font-bold text-sm mb-2 ml-1">Votre numéro de téléphone :</label>
            <div>
              <input name="tel" value={this.state.tel}
                onChange={e => this.handleChange(e)} class=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="06 xx xx xx xx" type="text" />
            </div>
          </div>
        </div>
        <div class=" mb-10 mb-3 flex space-x-5 text-xl font-mono ">
          <h2 class="formConfirm uppercase text-black pt-2 text-lg  ml-48" > Afin de confirmer votre réservation,  nous vous remercions de bien vouloir procéder au réglement </h2>
        </div>
        <div class="mb-3 flex -mx-2 justify-center">
          <div class="NumNameForm mb-3 ">
            <a href="PaymentsExpos" class="rainbow-button" alt="Valider"></a>
          </div>
        </div>
        <a href="javascript:history.go(-1)" class="uppercase text-lg font-bold font-serif ">Page précédente</a>
      </div>
    );
  }
}
export default BookingExpos;