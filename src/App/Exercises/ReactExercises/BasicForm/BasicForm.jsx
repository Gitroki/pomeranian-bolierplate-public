import React, { useRef, useState } from 'react';

import './style.css';
import { Checkboxes } from './Checkboxes';
// const orderList = [
//   {
//     value: 'GitHub',
//     label: 'intro do GitHub',
//     isCheck: false,
//   },
//   {
//     value: 'settings',
//     label: 'ustawienie środowiska',
//     isCheck: true,
//   },
//   {
//     value: 'materials',
//     label: 'materiały dodatkowe',
//     isCheck: true,
//   },
// ];

const accountList = [
  {
    value: 'account',
    label: 'zakładam konto',
    isCheck: true,
  },
];

const statuteList = [
  {
    value: 'statute',
    label: 'akceptuję regulamin*',
    isCheck: true,
  },
];

const newsletterList = [
  {
    value: 'newsletter',
    label: 'zapisuję się na listę mailingową ',
    isCheck: false,
  },
];
export function BasicForm() {
  const [formData, setFormData] = useState({
    product: '',
    payment: '',

    setting: false,
    GitHub: false,
    materials: true,

    nameAndSurename: '',
    nick: '',
    address: '',
    email: '',
    phone: '',
    additionalInfo: '',
    account: true,
    password: '',
    repeatPassword: '',
    statute: false,
    newsletter: true,
  });

  // DODAC DO KAZDEGO INPUTA JAKO onChange={updateFormData}
  function updateFormData(event) {
    setFormData({
      ...formData,
      // nazwa pola :wartośc
      [event.target.name]: event.target.value,
    });
  }

  function updateFormData(onChangeValue) {
    setFormData({
      ...formData,
      additionalOptions: {
        [onChangeValue.target.name]: onChangeValue.target.value,
      },
    });
  }

  function handleSubmit(event) {
    const { nameAndSurename, nick, address, email, phone, statute } = formData;
    if (nameAndSurename && nick && address && email && phone && statute) {
      console.log('dane wyslane poprawnie', formData);
    } else {
      console.log('The fields can not be empty');
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="basic-form" onSubmit={handleSubmit}>
        <div className="part-of-form">
          <div className="makieta">
            <h1>ZAMÓWIENIE PRODUKTU</h1>
          </div>
          <div className="square">
            <label for="order">
              <strong>Wybierz produkt*</strong>
            </label>
            <div>
              <select
                id="order"
                className="option"
                name="product"
                onChange={updateFormData}
              >
                <option value="front-end">kurs-front-end</option>
                <option value="backend">kurs-backend</option>
              </select>
            </div>
          </div>

          <div className="square">
            <label for="payment">
              <strong>Wybierz formę płatności*</strong>
            </label>
            <div>
              <input
                type="radio"
                name="payment"
                id="blik"
                value="blik"
                onChange={updateFormData}
              />
              <label for="blik" className="label-class">
                blik
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="paypal"
                value="paypal"
                onChange={updateFormData}
              />
              <label for="paypal" className="label-class">
                paypal
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="przelew"
                value="przelew"
                onChange={updateFormData}
              />
              <label for="przelew" className="label-class">
                przelew tradycyjny
              </label>
            </div>
          </div>

          <div className="square">
            <label for="options">
              <strong>Opcje dodatkowe do zamówienia</strong>
            </label>
            <div>
              <input
                type="checkbox"
                name="setting"
                value={formData.setting}
                id="ustawienie środowiska"
                className="checkboxButton"
                onChange={updateFormData}
              />
              <label for="ustawienie środowiska" className="label-class">
                ustawienie środowiska
              </label>
            </div>
          </div>
        </div>

        <div className="part-of-form">
          <div className="makieta">
            <h1>DANE DO REALIZACJI ZAMÓWIENIA</h1>
          </div>
          <div className="square">
            <label>
              <strong>Imię i nazwisko</strong>
            </label>
            <div>
              <input
                name="nameAndSurename"
                className="input-text"
                type="text"
                onChange={updateFormData}
                value={formData.nameAndSurename}
              ></input>
            </div>
          </div>

          <div className="square">
            <label>
              <strong>Twój pseudonim</strong>
            </label>
            <div>
              <input
                name="nick"
                className="input-text"
                type="text"
                onChange={updateFormData}
                value={formData.nick}
              ></input>
            </div>
          </div>

          <div className="square">
            <label>
              <strong>Adres do wysyłki</strong>
            </label>
            <div>
              <input
                name="address"
                className="input-text"
                type="text"
                onChange={updateFormData}
                value={formData.address}
              ></input>
            </div>
          </div>

          <div className="square">
            <label>
              <strong>Adres e-mail</strong>
            </label>
            <div>
              <input
                name="email"
                className="input-text"
                type="text"
                onChange={updateFormData}
                value={formData.email}
              ></input>
            </div>
          </div>

          <div className="square">
            <label>
              <strong>Numer kontaktowy*</strong>
            </label>
            <div>
              <input
                name="phone"
                className="input-text"
                type="text"
                onChange={updateFormData}
                value={formData.phone}
              ></input>
            </div>
          </div>

          <div className="square">
            <label>
              <strong>Dodatkowe uwagi do zamówienia</strong>
            </label>
            <div>
              <textarea
                name="additionalInfo"
                className="input-text"
                placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj..."
                onChange={updateFormData}
              />
            </div>
          </div>
        </div>

        <div className="part-of-form">
          <div className="makieta">
            <h1>ZAKŁADANIE KONTA</h1>
          </div>
          <div className="square">
            <label for="settings">
              <strong>Chcę założyć konto razem z zamówieniem</strong>
            </label>
            <div>
              <Checkboxes
                name="account"
                list={accountList}
                onChange={updateFormData}
              />
            </div>
          </div>

          <div className="square">
            <label for="checkbox">
              <strong>Moje hasło</strong>
            </label>
            <div>
              <input
                name="password"
                type="password"
                onChange={updateFormData}
              ></input>
            </div>
          </div>

          <div className="square">
            <label for="checkbox">
              <strong>Powtórz hasło</strong>
            </label>
            <div>
              <input
                name="repeatPassword"
                type="password"
                onChange={updateFormData}
              ></input>
            </div>
          </div>
        </div>

        <div className="part-of-form">
          <div className="makieta">
            <h1>ZGODY I NEWSLETTER</h1>
          </div>

          <div className="square">
            <label>
              <strong>
                Realizaując zamówienie, akceptujesz regulamin naszego sklepu
              </strong>
            </label>
            <div>
              <Checkboxes
                name="statute"
                list={statuteList}
                onChange={updateFormData}
                value={formData.statute}
              />
            </div>
          </div>

          <div className="square">
            <label>
              <strong>
                Dołącz do naszego newslettera z promocjami dla naszych klientów
              </strong>
            </label>
            <div>
              <Checkboxes
                name="newsletter"
                list={newsletterList}
                onChange={updateFormData}
              />
            </div>
          </div>
          <div>
            <button className="order-button" type="submit">
              SKŁADAM ZAMÓWIENIE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
