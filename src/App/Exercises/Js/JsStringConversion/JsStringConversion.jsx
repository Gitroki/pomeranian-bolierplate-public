export const JsStringConversion = () => {
  function calcResolution(x, y) {
    const clearedX = x.replace('px', '');
    const clearedY = y.replace('px', '');

    return (+clearedX * +clearedY).toString();
  }

  function isEmpty(x) {
    return !!x;
  }

  return (
    <div>
      <p>calcResolution {calcResolution('1080px', '1920px')}</p>
      <p>isEmpty: {isEmpty(NaN).toString()}</p>
    </div>
  );

  //!! = Boolean ()
  //Number() = 0
  //Number('0ndnd') = NaN
  //Number(123) = 123
  //+ == Number()
  //String() = ''
  //String('12') = 12
  //null.toString() =
  // cos.toString = String()
  // == pomijanie '123'=123 zmienia string na number
  // typeof 123 = number
  // typeof null = object
  // typeof undefined = undefined
  // typeof string = string
  // typeof {} = object
  // typeof true = boolean

  // Liczenie ilosci pixeli na ekranie fun('1080px', '1920px') => 2073600
  // fun(420) => true fun(NaN) => false
};
