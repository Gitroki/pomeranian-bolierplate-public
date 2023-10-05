import { useEffect, useState } from 'react';

export const PromisesExercisesPr = () => {
  // na podstawie ww funkcji należy stworzyć podobną funkcje loadUserDetails(userId)
  // loadUserDetails(userId) zwraca promise z { id: userId, age: 30, country: "Poland" }
  // (zwrócić uwagę na parametr id)
  // stwórzmy funkcje loadAllUserData() która wywoła loadUser, a następnie loadUserDetails
  // pamiętajmy o przekazaniu id do loadAllUserData z rezultatów loadUser (name pomijamy)
  // następnie dodajmy button załaduj detale użytkownika
  // dodajemy też miejsce na wyświetlanie danych użytkownika (id, age, country)
  // po naciśnięciu w przycisk załadować dane z loadAllUserData i wyświetlić aktualnie załadowanego usera
  // po kliknięciu w button załaduj detale użytkownika wyczyść aktualnie załadowanego użytkownika
  // (w oczekiwaniu na kolejnego)

  //   dodajmy nowy div na wyświetlenie błędu
  // po kliknięciu w button załaduj detale użytkownika wyczyśćmy także aktualny błąd.
  // zmodyfikujmy loadUserDetails w taki sposób aby z 50% prawdopodobieństwem rejectowała promisa
  // z bledem
  // teść błędu: błąd server: nieudane wyszukanie dla userId: xxx użyjmy klasy Error
  // w funkcji loadAllUserData przechwycić błąd i wyświetlić
  // przetestować aż do uzyskania błędu (możemy skrócić czas timeoutów na czas testów)

  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Nie udalo sie pobrac danych'));
        } else {
          resolve({ id: userId, age: 30, country: 'Poland' });
        }
      }, 2000);
    });
  }

  function loadAllUserData() {
    setData(null);
    setErrorMessage(null);
    loadUser().then((user) => {
      loadUserDetails(user.id)
        .then((details) => {
          setData(details);
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    });
  }
  return (
    <div>
      <button onClick={loadAllUserData}>Pobierz dane</button>
      {data && (
        <div>
          <p>Id: {data.id}</p>
          <p>Age: {data.age}</p>
          <p>Country: {data.country}</p>
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
