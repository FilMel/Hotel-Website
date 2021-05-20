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
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          className="formBut"
          type="button"
        >
          Verifica disponibilità
        </button>
      );
    } else if (formStep === 3) {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          className="formBut"
          type="button"
        >
          Paga e Prenota
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          className="formBut"
          type="button"
        >
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
                  {...register("visitor_name", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="John"
                />
                <br></br>
                {errors.visitor_name && (
                  <p className="Validation">Inserisci un Nome</p>
                )}

                <input
                  type="text"
                  id="surname"
                  {...register("visitor_surname", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="Doe"
                />

                {errors.visitor_surname && (
                  <p className="Validation">Inserisci un Cognome</p>
                )}
              </div>
              <div className="elem-group">
                <label for="email">La tua Mail</label>
                <input
                  type="email"
                  id="email"
                  {...register("visitor_email", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="john.doe@email.com"
                />
                {errors.visitor_email && (
                  <p className="Validation">Inserisci una Mail</p>
                )}
              </div>
              <div className="elem-group">
                <label for="phone">Numero di Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("visitor_phone", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="345-992-3872"
                />
                {errors.visitor_phone && (
                  <p className="Validation">Inserisci un numero di telefono</p>
                )}
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
                  name="adress"
                  {...register("adress", { required: true })}
                />
                {errors.adress && (
                  <p className="Validation">Inserisci un inidirizzo valido</p>
                )}
                <label for="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <p className="Validation">Inserisci un inidirizzo valido</p>
                )}
              </div>

              <div class="elem-group">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
                <label for="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="10001"
                  {...register("zip", { required: true })}
                />
                {errors.zip && (
                  <p className="Validation">Inserisci un inidirizzo valido</p>
                )}
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
                  placeholder="John More Doe"
                  {...register("cardname", { required: true })}
                />
                  {errors.cardname && (
                  <p className="Validation">Il campo non puo essere vuoto</p>
                )}

                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  placeholder="1111-2222-3333-4444"
                  {...register("cardnumber", { required: true })}
                />
                {errors.cardnumber && (
                  <p className="Validation">Inserisci un numero valido</p>
                )}

                <label for="expyear">Exp Year</label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder="2018"
                />

                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="352" {...register("cvv", { required: true })}/>
                {errors.cvv && (
                  <p className="Validation">Inserisci un cvv valido</p>
                )}
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
