export const MathExercise = () => {
  const myNumber = 12.123;

  return (
    <>
      <div>{+myNumber.toFixed(2)}</div> /*skracanie do 2 miejsca po przecinku*/
      <div>{Math.round(myNumber)} </div> /*zaokraglanie do calosci*/
      <div>{Math.round((myNumber * 10000) / 10000)}</div>
      <div>{Math.ceil(myNumber)}</div> /*zaokraglanie do gornej wartosci */
      <div>{Math.floor(myNumber)}</div> /*zaokraglanie do donej wartosci*/
      <div>{Math.sin(myNumber)}</div>
    </>
  );
};
