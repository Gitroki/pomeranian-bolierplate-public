import { useEffect } from 'react';

export const TryCatchAndFinally = () => {
  function dumb() {
    const randomNumber = Math.round(Math.random());

    if (randomNumber) {
      console.log('Wszysto działa');
    } else {
      throw new Error('Niestety nie działa');
    }
  }
  useEffect(() => {
    try {
      dumb();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Wszystko się juz zakonczylo');
    }
  }, []);

  return <div>zmien mnie</div>;
};
