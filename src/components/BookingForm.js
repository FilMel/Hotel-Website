import React, { useState } from "react";
import "./BookingForm.css";
import Cyber from "./videos/cyber.mp4";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [formStep, setFormStep] = React.useState(0);

  const {
    watch,
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <button onClick={completeFormStep} className="formBut" type="button">
          Verifica disponibilità
        </button>
      );
    } else if (formStep === 3) {
      return (
        <button onClick={completeFormStep} className="formBut" type="button">
          Paga e Prenota
        </button>
      );
    } else {
      return (
        <button onClick={completeFormStep} className="formBut" type="button">
          Continua
        </button>
      );
    }
  };

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div className="page_wrapper">
      <video autoPlay loop muted>
        <source src={Cyber} type="video/mp4" />
      </video>
      <div className="form_wrapper">
        <form className="form" action="reservation.php" method="post">
          {formStep === 0 && (
            <section>
              <div className="elem-group">
                <label for="name">Il tuo Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="visitor_name"
                  placeholder="John"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type a username",
                    }
                  })}
                />
                {errors.username && <p>{errors.username.message}</p>}
                <input
                  type="text"
                  id="surname"
                  name="visitor_surname"
                  placeholder="Doe"
                  ref={register()}
                />
              </div>
              <div className="elem-group">
                <label for="email">La tua Mail</label>
                <input
                  type="email"
                  id="email"
                  name="visitor_email"
                  placeholder="john.doe@email.com"
                  ref={register()}
                />
              </div>
              <div className="elem-group">
                <label for="phone">Numero di Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="visitor_phone"
                  placeholder="345-992-3872"
                  ref={register()}
                />
              </div>
            </section>
          )}

          {formStep === 2 && (
            <section>
              <div className="elem-group">
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                />
                <label for="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                />
              </div>

              <div class="elem-group">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <div>
                <h3>Payment</h3>

                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa"></i>
                  <i class="fa fa-cc-amex"></i>
                  <i class="fa fa-cc-mastercard"></i>
                  <i class="fa fa-cc-discover"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                />
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
                <label for="expyear">Exp Year</label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder="2018"
                />

                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </section>
          )}
          {formStep === 1 && (
            <section>
              <div className="elem-group inlined">
                <label for="checkin-date">Data Check-in</label>
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                  dateFormat="dd/MM/yyyy"
                ></DatePicker>
              </div>
              <div className="elem-group inlined">
                <label for="checkout-date">Data Check-out</label>
                <DatePicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                  dateFormat="dd/MM/yyyy"
                ></DatePicker>
              </div>
              <div className="elem-group">
                <label for="room-selection">
                  Seleziona la tipologia di stanza
                </label>
                <select id="room-selection" name="room_preference" required>
                  <option value="">Seleziona una tipologia dalla lista</option>
                  <option value="connecting">Singola</option>
                  <option value="adjoining">Doppia</option>
                  <option value="adjacent">Tripla</option>
                </select>
              </div>
            </section>
          )}

          <hr />
          {formStep === 4 && (
            <section>
              <div class="elem-group"></div>
            </section>
          )}
          {renderButton()}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
      </div>
    </div>
  );
};

export default Form;
