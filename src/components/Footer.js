import React, { Component } from "react";
import "./style/Footer.css";
class Footer extends Component {
  render() {
    return (
      <section class=" bg-black border-t-4 border-white py-8">
        <div class="ctnrFoot container mx-auto px-8 flex items-center justify-center" >
          <div class="sctFoot block sm:table-cell ">
            <p class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="" class="addrFoot text-white hover:text-white-dark">99 Rue de Rivoli <br /> 75001 Paris </a>
            </p>
          </div>
          <div class="footerCard table w-full pl-60" >
            <div class="block sm:table-cell">
              <p class="uppercase text-white text-sm sm:mb-6">Informations légales</p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-white">Conditions d'utilisation</a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-white">Politique de confidentialité</a>
                </li>
              </ul>
            </div>
            <div class="block sm:table-cell">
              <p class="uppercase text-white text-sm sm:mb-6">Réseaux sociaux</p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-white">Facebook</a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-white">Linkedin</a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-white">Twitter</a>
                </li>
              </ul>
            </div>
            <div class="block sm:table-cell">
              <p class="uppercase text-white text-sm sm:mb-6">GreenArt</p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="Blog" class="text-white hover:text-white-dark">Blog</a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="AboutUs" class="text-white hover:text-white-dark">A propos</a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="Contact" class="text-white hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
          </div >
        </div >
      </section >
    )
  }
}
export default Footer;