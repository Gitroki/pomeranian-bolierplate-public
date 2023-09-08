export const JsNumbers = () => {
  const myNumber = 1.666;

  const myInt =
    parseInt(
      myNumber
    ); /*zaokraglanie liczby/wartosc przed przecinkiem czy przed e */

  const myFloat = parseFloat(myNumber);
  return (
    <div>
      <p>Integer: {myInt}</p>
      <p>Float: {myFloat}</p>

      <hr />
      <h3>Podstawowe operatory</h3>
      <p>+ (INT): {myInt + myInt}</p>
      <p>+ (FLOAT): {myFloat + myFloat}</p>
      <p>- (INT): {myInt - myInt}</p>
      <p>- (FLOAT): {myFloat - myFloat}</p>
      <p>+/(INT): {myInt / myInt}</p>
      <p>/ (FLOAT): {myFloat / myFloat}</p>
      <p>* (INT): {myInt * myInt}</p>
      <p>* (FLOAT): {myFloat * myFloat}</p>
      <p>% (INT): {myInt % myInt}</p>
      <p>% (FLOAT): {myFloat % myFloat}</p>
      <p>** (INT): {myInt ** myInt}</p>
      <p>** (FLOAT): {myFloat ** myFloat}</p>
      <hr />
      <h3>Operatory złozone</h3>

      <p>+=: {`${(myInt += 2)}`}</p>
      <p>-=: {`${(myInt -= 1)}`}</p>
      <p> ++i: {`${++myInt}`}</p>
      <p> --i: {`${--myInt}`}</p>

      <h3>Operatory porównawcze</h3>

      <p> {`<: ${myInt < 3}`}</p>
      <p> {`<=: ${myInt <= 3}`}</p>
      <p> {`>: ${myInt > 3}`}</p>
      <p> {`>=: ${myInt >= 3}`}</p>
      <p> {`===: ${myInt === 3}`}</p>
    </div>
  );
};
