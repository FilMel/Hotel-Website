import React from "react";
import "./BookingForm.css";
import HeroSection from "./HeroSection";
import Cyber from "./videos/cyber.mp4";

const Form = () => {
  return (
      <div className="page_wrapper">
    <video autoPlay loop muted>
    <source src={Cyber} type="video/mp4" />
    </video>
    <div className="form_wrapper">
    <form className="form" action="reservation.php" method="post">
      <div className="elem-group">
        <label for="name">Il tuo Nome</label>
        <input
          type="text"
          id="name"
          name="visitor_name"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="elem-group">
        <label for="email">La tua Mail</label>
        <input
          type="email"
          id="email"
          name="visitor_email"
          placeholder="john.doe@email.com"
          required
        />
      </div>
      <div className="elem-group">
        <label for="phone">Numero di Telefono</label>
        <input
          type="tel"
          id="phone"
          name="visitor_phone"
          placeholder="345-992-3872"
          required
        />
      </div>
      <hr />
      <div className="elem-group inlined">
        <label for="adult">Adulti</label>
        <input
          type="number"
          id="adult"
          name="total_adults"
          placeholder="2"
          min="1"
          required
        />
      </div>
      <div className="elem-group inlined">
        <label for="child">Bambini</label>
        <input
          type="number"
          id="child"
          name="total_children"
          placeholder="2"
          min="0"
          required
        />
      </div>
      <div className="elem-group inlined">
        <label for="checkin-date">Data Check-in</label>
        <input type="date" id="checkin-date" name="checkin" required />
      </div>
      <div className="elem-group inlined">
        <label for="checkout-date">Data Check-out</label>
        <input type="date" id="checkout-date" name="checkout" required />
      </div>
      <div className="elem-group">
        <label for="room-selection">Seleziona la tipologia di stanza</label>
        <select id="room-selection" name="room_preference" required>
          <option value="">Seleziona una tipologia dalla lista</option>
          <option value="connecting">Singola</option>
          <option value="adjoining">Doppia</option>
          <option value="adjacent">Tripla</option>
        </select>
      </div>
      <hr />
      <div className="elem-group">
        <label for="message">Qualcosa d'altro?</label>
        <textarea
          id="message"
          name="visitor_message"
          placeholder="Comunicaci qualsiasi cosa pensi sia importante"
          required
        ></textarea>
      </div>
      <button className="formBut" type="submit">Book Now</button>
    </form>
    </div>
    </div>
  );
};

export default Form;
