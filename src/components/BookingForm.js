import React, { useState } from "react";
import "./BookingForm.css";
import Cyber from "./videos/cyber.mp4";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Axios from "axios";

const api = Axios.create({
  baseURL: `http://localhost:4000/prenotazioni`,
});

const Form = () => {
  /*Create a state for each form step*/
  const [formStep, setFormStep] = React.useState(0);

  const checkAvailability = () => {
    api.get("/").then((res) => {
      let count = 0;
      if (res.data.length !== 0) {
        for (const result in res.data) {
          count =
            getValues("checkin") < result.CheckOut &&
            getValues("checkout") > result.CheckIn &&
            getValues("roomName") === result.Nome
              ? count + 1
              : count;
        }
      }
      console.log(getValues());
    });
  };

  const bookRoom = () => {
    const bookingData = getValues();
    api.post("/prenota", bookingData).then((res) => {
      console.log("You booked your room");
    });
  };

  /*Input validation*/
  const {
    watch,
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  /*Different buttons for different form-steps*/
  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <button
          disabled={
            !isValid
          } /*Button disabled until all of the fields with required are filled*/
          onClick={() => {
            completeFormStep();
            checkAvailability();
          }}
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
          onClick={bookRoom}
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

  return (
    <div className="page_wrapper">
      <video autoPlay loop muted>
        <source src={Cyber} type="video/mp4" />
      </video>
      <div className="form_wrapper">
        <form className="form" action="reservation.php" method="post">
          {/*Check availability section*/}
          {formStep === 0 && (
            <section>
              <div className="elem-group inlined">
                <label for="checkin">Data Check-in</label>
                <input
                  id="checkin"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  {...register("checkin", {
                    required: {
                      value: true,
                    },
                  })}
                />
                {errors.checkin && (
                  <p className="Validation">Inserisci il checkin</p>
                )}
              </div>
              <div className="elem-group inlined">
                <label for="checkout">Data Check-out</label>
                <input
                  type="date"
                  id="checkout"
                  minDate={new Date()}
                  {...register("checkout", {
                    required: {
                      value: true,
                    },
                  })}
                />
                {errors.checkout && (
                  <p className="Validation">Inserisci il checkout</p>
                )}
              </div>
              <div className="elem-group">
                <label for="roomName">Seleziona la tipologia di stanza</label>
                <select
                  id="roomName"
                  {...register("roomName", {
                    required: {
                      value: true,
                    },
                  })}
                >
                  <option value="">Seleziona la camera desiderata</option>
                  <option value="Verde">Verde - Singola</option>
                  <option value="Blu">Blu - Doppia</option>
                  <option value="Bordeaux">Bordeaux - Matrimoniale</option>
                  <option value="Bianca">Bianca - Matrimoniale</option>
                  <option value="Nera">Nera - Matrimoniale</option>
                  <option value="Rossa">Rossa - Tripla</option>
                  <option value="Gialla">Gialla - Quadrupla</option>

                </select>
                {errors.roomType && (
                  <p className="Validation">Inserisci il checkout</p>
                )}
              </div>
            </section>
          )}

          {/*Insert client section*/}
          {formStep === 1 && (
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
                  placeholder="Waleed"
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
                  placeholder="Leequat"
                />

                {errors.visitor_surname && (
                  <p className="Validation">Inserisci un Cognome</p>
                )}

                <label for="passport">Numero del passaporto</label>
                <input
                  type="text"
                  id="passport"
                  {...register("passport", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="ar67888438"
                />
                <br></br>
                {errors.passport && (
                  <p className="Validation">Inserisci un numero</p>
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
                  placeholder="waleed.leequat@email.com"
                />
                {errors.visitor_email && (
                  <p className="Validation">Inserisci una Mail</p>
                )}
              </div>
              <div className="elem-group">
                <label for="phone">Numero di Telefono</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(event) => {
                    if (isNaN(Number(event.target.value))) {
                      return;
                    } else {
                      this.setState({ value: event.target.value });
                    }
                  }}
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

          {/*Billing information*/}
          {formStep === 2 && (
            <section>
              <div className="elem-group">
                <label for="nameIntF">Nome Completo</label>
                <input
                  type="text"
                  id="nameIntF"
                  {...register("IntF_name", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="Albert"
                />
                <br></br>
                {errors.IntF_name && (
                  <p className="Validation">Inserisci un Nome</p>
                )}

                <input
                  type="text"
                  id="surnameIntF"
                  {...register("IntF_surname", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="Einstein"
                />

                {errors.IntF_surname && (
                  <p className="Validation">Inserisci un Cognome</p>
                )}
              </div>
              <div className="elem-group">
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Inidirizzo
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
                  <i class="fa fa-institution"></i> Città
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
                <label for="zip">CAP</label>
                <input
                  type="number"
                  id="zip"
                  placeholder="10001"
                  {...register("zip", { required: true })}
                />
                {errors.zip && (
                  <p className="Validation">Inserisci un Cap valido</p>
                )}
              </div>
            </section>
          )}

          {/*Payment section*/}
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
                <label for="cname">Intestatario carta</label>
                <input
                  type="text"
                  id="cname"
                  placeholder="John More Doe"
                  {...register("cardname", { required: true })}
                />
                {errors.cardname && (
                  <p className="Validation">Inserisci un nome</p>
                )}

                <label for="ccnum">Numero Carta</label>
                <input
                  type="number"
                  id="ccnum"
                  placeholder="1111-2222-3333-4444"
                  {...register("cardnumber", { required: true })}
                />
                {errors.cardnumber && (
                  <p className="Validation">Inserisci un numero valido</p>
                )}

                <label for="expyear">Data Scadenza</label>
                <input
                  type="date"
                  id="expyear"
                  {...register("exp_date", { required: true })}
                />
                {errors.exp_date && (
                  <p className="Validation">Inserisci una data di Scadenza</p>
                )}

                <label for="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  placeholder="352"
                  {...register("cvv", { required: true })}
                />
                {errors.cvv && (
                  <p className="Validation">Inserisci un cvv valido</p>
                )}
              </div>
            </section>
          )}

          {/*Booking confirmation section*/}
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
