export const PromisesExercises = () => {
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

  myPromise()
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('koniec');
    });
  return <div>Promise</div>;
};
