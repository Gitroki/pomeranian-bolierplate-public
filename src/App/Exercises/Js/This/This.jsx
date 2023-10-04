export const JsThis = () => {
  //   1. stwórz obiekt z przypisaną właściwością name (np. "Jeremy")
  // 2. dodaj 2 metody w obiekcie:
  // - classicGreet - metoda tworzona poprzez keyword function, jej zadaniem jest console.log z
  // wartością this.name
  // - arrowGreet - metoda tworzona strzałkowo, jej body jest takie samo jak metody wyżej.
  // 3. spróbuj wywołać obie funkcje na tym obiekcie, co się stanie?
  // 4. zastosuj dla obu metody call lub apply z wybranymi argumentami

  // const person = {
  //   name: 'Jeremy',
  //   classicGreet: function () {
  //     console.log(this.name);
  //   },
  //   arrowGreet: () => {
  //     console.log(this.name);
  //   },
  // };

  // console.log(person.classicGreet()); Zwraca Jeremmy
  // console.log(person.arrowGreet()); Zwraca "undefind"

  //   person.classicGreet.call(person); Zwraca Jeremmy
  // person.arrowGreet.call(person); Zwraca "undefind"

  // person.classicGreet.apply(person); Zwraca Jeremmy
  // person.arrowGreet.apply(person); Zwraca "undefind"
  return <div>ddd</div>;
};
