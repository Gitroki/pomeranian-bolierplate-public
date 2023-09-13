export const JsObjectsBasics = () => {
  let nameOfProp = 1;
  const person = {
    name: 'John',
    age: 14,
  };
  const obj = {
    property1: 'value1', // property as an identifier
    2: 34, // or a number
    'property 3': function () {
      console.log('property');
    },
    property4: person,
    propertyObj: { propIn1: 4, propIn2: 5 }, // or as an object,
    nameOfProp,
    fun() {
      return 1;
    },
  };
  const property4 = 'property4';
  console.log(obj.property1); // dot access
  console.log("obj['property 3']", obj['property 3']); // bracket access
  console.log(obj[property4]);
  obj['property 3']();
  console.log(obj.fun());

  console.log('property4', obj.property4);
  obj.property4.age = 16;
  console.log('property4', obj.property4);
  obj[2] = 125;
  console.log(obj);
  // Spread Operator
  //  ...

  const defaults = { option1: true, option2: false };
  const defaults2 = { option1: true, option2: false };

  const customOptions = { ...defaults, option1: false };
  // Stworzenie obiektu bez wykorzystania spread'a powoduje zachowanie referencji
  // const customOptions2 = { defaults, defaults2 };
  // w momencie nadpisania wartości naszego nowo stworzonego obiektu wartość obiektu z którego go stworzono ulegnie zmianie
  // customOptions2.defaults2.option1 = false;
  // czyli po wykonaniu tej operacji wartość defaults2 wyniesie { option1: false, option2: false }
  // wykorzystanie spread operatora powoduje zerwanie referencji
  const customOptions3 = {
    defaults: { ...defaults },
    defaults2: { ...defaults2 },
  };
  // nadpisanie wartości nie spowoduje zmiany obiektu z którego powstał nasz customOptions3
  customOptions3.defaults2.option1 = false;
  // czyli defaults2 wynosi dalej { option1: true, option2: false }
  console.log('defaults2', defaults2);
  console.log('customOptions', customOptions);

  // Usuwanie klucza z obiektu
  delete obj.property1;
  console.log('delete obj.property1', obj);

  // Obiekty - metody
  const object1 = { a: 1, b: 2 };
  const object2 = { c: 3, d: 4 };
  const objectX = { c: 7, e: 4 };

  // Object assign - mergowanie obiektów
  const object3 = Object.assign({}, object1, object2, objectX);
  console.log('Object.assign', object3);
  // Object entries - zwraca tablicę zawierająca pary klucz-wartość
  console.log('Object.entries', Object.entries(object3));
  // Object keys - zwraca tablice zawierającą klucze obiektu
  console.log('Object.keys', Object.keys(object3));
  // Object values - zwraca tablice zawierającą wartości obiektu
  console.log('Object.values', Object.values(object3));

  // --------------------------------------------------------------------
  // OBIEKTY - METODY - MUTOWALNE I NIEMUTOWALNE
  // --------------------------------------------------------------------

  //Mutujące operacje na obiekcie zmieniają jego zawartość (np. dodawanie/usuwanie pól),
  // natomiast niemutujące operacje zwracają nowe obiekty lub wartości, nie zmieniając oryginalnego obiektu.

  // Mutujące operacje:
  // obj.property = value, delete obj.property, Object.assign(target, source), Object.defineProperty(obj, key, descriptor)
  // Niemutujące operacje:
  // Object.assign({}, obj), Object.freeze(obj), Object.seal(obj), Object.keys(obj), Object.values(obj), Object.entries(obj)

  const person2 = { name: 'John', age: 30 };
  // Object.freeze służy do zamrażania obiektu co oznacza że nie można już dodawać ani usuwać ani zmieniać istniejących jego właściwości
  Object.freeze(person2);
  // person2.age = 55;
  // console.log('person2', person2);
  console.log('Object.isFrozen', Object.isFrozen(person2));

  return <div>Objects</div>;
};
