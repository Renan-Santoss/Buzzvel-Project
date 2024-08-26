// import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Conhecimento from "./Conhecimento";
import Escolha from "./Escolha";
import Experiencia from "./Experiência"; // LINGUAS -> TROCAR ESSA MERDA NO MOMENTO OPORTUNO
import Sobre from "./Sobre";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";
import Cronograma from "./Cronograma";

const App = () => {
  return (
    <div>
      <CookieConsent
        location="none"
        buttonText="Aceitar"
        cookieName="myAwesomeCookieName2"
        style={popupStyles.container}
        buttonStyle={popupStyles.acceptButton}
        expires={15}
        disableStyles={true}
      >
        Este site usa cookies para melhorar a experiência do usuário.
      </CookieConsent>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="conhecimento">
        <Conhecimento />
      </div>
      <div id="escolha">
        <Escolha />
      </div>
      <div id="experiencia">
        <Experiencia />
      </div>
      <div id="Cronograma">
        <Cronograma />
      </div>
      <div id="Sobre">
        <Sobre />
      </div>
      <Footer />
    </div>
  );
};

const popupStyles = {
  container: {
    position: "fixed",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    color: "#000",
    padding: "20px",
    zIndex: 1000,
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "700px",
  },
  acceptButton: {
    color: "#fff",
    background: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
