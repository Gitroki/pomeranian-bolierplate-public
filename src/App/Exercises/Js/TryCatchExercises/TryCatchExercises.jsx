import { useState } from 'react';

export const TryCatchExercises = () => {
  // 1. dodać input
  //2. dodać metodę validate z jednym parametrem
  //3. w metodzie validate sprawdzić czy podany parametr jest wartoscia liczbowa jeśli nie wyrzucić wyjątek
  //4. dodać w metodzie onChange inputa wywołanie metody validate z wartością inputa.
  //5. zobaczyć jaki będzie wynik wpisania czegoś co jest i co nie jest liczbą
  const [errorMessage, setErrorMessage] = useState(null);

  function validate(event) {
    const value = event.target.value;

    if (isNaN(+value)) {
      throw new Error('Podana wartosc nie jest liczbowa ');
    }
  }

  function handleChange(event) {
    setErrorMessage(null);
    try {
      validate(event);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      {errorMessage && (
        <p>
          <strong>{errorMessage}</strong>
        </p>
      )}
    </div>
  );
};
