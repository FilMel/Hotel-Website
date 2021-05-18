import React from "react";
import "./Body.css";
import insegna from "./images/insegna.jpg";
import logo from "./images/LOGOHOTEL.jpg";
import citta_alta from "./images/vista-citta-alta.jpg";
import ingressoHotel from "./images/ingressohotel.jpg";

function Body() {
  return (
    <div className="body_container">
      <div className="cards__container">
        <div className="page_top">
          <div className="page__header">
            <p className="email">info@hotel-santacaterina.net</p>
          </div>
          <img className="logo" src={logo} alt="logo"></img>
          <img className="insegna" src={insegna} alt="insegna"></img>
        </div>
        <div className="page_middle">
          <div>
            <h3>Hotel Santa Caterina - Bergamo</h3>
            <img className="body_image" src={citta_alta} alt="body_img" />
            <p>
              L'hotel Santa Caterina - situato nel cuore di
              <br />
              un antico borgo ai piedi di Città Alta - vanta
              <br />
              una posizione strategica che permette di
              <br />
              raggiungere in 15/20 minuti a piedi i punti di
              <br />
              interesse principali della Città (centro, stadio,
              <br />
              stazione ferroviaria e autobus, Palanorda).
            </p>
          </div>
          <div>
            <h3>I servizi dell'hotel</h3>

            <ul>
              <br />
              <br />
              <li>Ionic Power Shower (doccia ionizzante)</li>
              <li>guanciali e copripiumino anallergici</li>
              <li>Wi-fi gratuito in ogni stanza</li>
              <li>Aria condizionata indipendente</li>
              <li>Minibar in ogni stanza</li>
              <li>Tv Led 32" con programmi satellitari</li>
              <li>telefono diretto in camera</li>
              <li>Cassaforte in camera</li>
              <li>Garage privato</li>
              <li>Check-in dalle ore 14:00 alle 20:00</li>
              <li>Check-out dalle ore 8:30 alle ore 10:00</li>
              <li>Check-in/out Express</li>
              <li>Transfer aeroporto</li>
              <li>(NEW!) Check-in autonomo</li>
            </ul>
          </div>
          <div>
            <h3>Dove siamo</h3>
            <img className="body_image" src={ingressoHotel} alt="body_img" />
            <ul>
              <li>97 km dall'Aeroporto Malpensa (MI)</li>
              <li>53 km dall'Aeroporto di Linate (MI)</li>
              <li>8.9 km dall'Aeroporto Orio al Serio</li>
              <li>2 km dalla Stazione ferroviaria</li>
              <li>1.9 km dal centro città</li>
              <li>0.9 km da Città Alta (centro storico)</li>
            </ul>
          </div>
        </div>
        <div className="page__footer">
          <div>
            <p>
              © Copyright 2021 - Hotel Santa Caterina - Via Alberico da Rosciate
              11/13, Bergamo, Italia - C.F./P.IVA 03477950160
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
