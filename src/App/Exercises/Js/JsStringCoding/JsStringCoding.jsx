export const JsStringCoding = () => {
  const singleQuote = 'siema';

  const doubleQuote = 'siema';

  const templateString = 'siema';

  const string1 = "hello 'world'";

  const string2 = 'hello "world"';

  const string3 = "It's raining outside.";

  const string4 = "It's raining outside.";

  const concatenated = string1 + ' ' + string3;

  // Metody stringów

  const stringLength = singleQuote.length; //5 bo ma 5 liter
  const substring = doubleQuote.substring(0, 2); // "si" od siema
  const replaceAllString = string1.replaceAll('o', '0'); // hell0 w0rld bo wszystkie sie zmienia
  const replaceString = string1.replace('o', '0'); // hell0 world bo tylko pierwsze sie zmieni
  const upperCase = string3.toUpperCase(); // bedie z duzych liter IT'S RAINING OUTSIDE
  const trimString = templateString.trim(); //usuwanie bialych znakow enterow czy spacji
  const indexOfString = string2.indexOf('hel'); // sprawdzic pozycje i szukanie konkretniej frazy ile razy bylo uzyte

  return <div>Kodowanie znakow </div>;
};
