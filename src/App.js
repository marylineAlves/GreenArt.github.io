import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import HumanitarianExpo from "./components/HumanitarianExpo";
import ClimateExpo from "./components/ClimateExpo";
import HopeExpo from "./components/HopeExpo";
import CleanDay from "./components/CleanDay";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Don from "./components/Don";
import Payments from "./components/Payments";
import ParticipationCleanDay from "./components/ParticipationCleanDay";
import HumanExpo2 from "./components/HumanExpo2";
import Learn from "./components/Learn";
import Home from "./components/Home";
import Blog from "./components/Blog";
import ArticleOne from "./components/article/ArticleOne";
import ArticleTwo from "./components/article/ArticleTwo";
import PaymentsExpos from "./components/PaymentsExpos";
import BookingExpos from "./components/BookingExpos"
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/HumanitarianExpo" component={HumanitarianExpo} />
          <Route exact path="/ClimateExpo" component={ClimateExpo} />
          <Route exact path="/HopeExpo" component={HopeExpo} />
          <Route exact path="/CleanDay" component={CleanDay} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Don" component={Don} />
          <Route exact path="/Payments" component={Payments} />
          <Route exact path="/ParticipationCleanDay" component={ParticipationCleanDay} />
          <Route exact path="/HumanExpo2" component={HumanExpo2} />
          <Route exact path="/Learn" component={Learn} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/ArticleOne" component={ArticleOne} />
          <Route exact path="/ArticleTwo" component={ArticleTwo} />
          <Route exact path="/PaymentsExpos" component={PaymentsExpos} />
          <Route exact path="/BookingExpos" component={BookingExpos} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App;