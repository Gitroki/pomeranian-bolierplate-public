import { useEffect, useState } from 'react';

export const PromisesExercises = () => {
  const [myResult, setMyResult] = useState(null);

  const myPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random());

        if (randomNumber) {
          resolve('Sukces');
        } else {
          reject('Porazka');
        }
      }, 2000);
    });

  useEffect(() => {}, []);

  myPromise()
    .then((value) => {
      setMyResult(value);
    })
    .catch((err) => {
      setMyResult(err);
    })
    .finally(() => {
      console.log('koniec');
    });
  return <div>Rezultat: {myResult}</div>;
};
