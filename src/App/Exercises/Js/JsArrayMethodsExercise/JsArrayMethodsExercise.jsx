export const JsArrayMethodsExercise = () => {
  // napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach
  // sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 5, 7, 9];
  const result = sameNumbers(array1, array2);
  console.log('sameNumbers', result);

  //napisz funkcje, ktora liczy srednia z liczb w tablicy
  function averageFromArray(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / array.length;
    return average;
  }
  const array = [1, 2, 3, 4, 5, 6];
  console.log('averageFromArray', averageFromArray(array));

  // napisz funkcję, która przyjmuje 2 parametry i tworzy 2 wymiarową tablice wypełnioną 0 gdzie x i y towymiary 2 wymiarowej tablicy
  //   create2dArray(1,1) => [[0]]
  // create2dArray(1,2) => [[0, 0]]
  // create2dArray(2,2) => [[0, 0],[0, 0]]

  // const create2dArray = (x, y) => {
  //   const resultArray = [];
  //   for (let i = 0; i < x; i++) {
  //     const row = [];
  //     for (let j = 0; j < y; j++) {
  //       row.push(0); // [0]
  //       // 2ga iteracja 2giego for'a [0,0]
  //     }

  //     resultArray.push(row);
  //   }
  //   return resultArray;
  // };
  function create2dArray(x, y) {
    return Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
  }
  console.log('create2dArray', create2dArray(3, 5));

  // napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w odwróconej kolejności
  // reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]

  function reverseFun(x) {
    return x.reverse();
  }
  console.log('reverseFun', reverseFun([1, 2, 3, 4, 5]));

  // napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w odwróconej kolejności
  // reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
  // function reverseFun(x) {
  //   return x.reverse();
  // }
  function reverseFun(x) {
    const reversed = [];
    for (let i = x.length - 1; i >= 0; i--) {
      reversed.push(x[i]);
    }
    return reversed;
  }
  console.log('reverseFun', reverseFun([1, 2, 3, 4, 5]));
  // napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób
  // map
  // getNames([{name: 'John', age:20 },{name: 'Adam', age:24 }])) =>["John", "Emily", "Peter"]
  const object = [
    { name: 'John', age: 20 },
    { name: 'Adam', age: 24 },
  ];
  // const getNames = (obj) => {
  //   // object.map((obj) => obj.name);
  //   return obj.map(({ name }) => name);
  // };
  // const getNames = (obj) => obj.map(({ name }) => name);
  function getNames(obj) {
    // object.map((obj) => obj.name);
    return obj.map(({ name }) => name);
  }
  console.log(getNames(object));

  // napisz funkcje na sumowanie wieku
  // reduce
  // sumOfAge([{name: 'John', age:20 },{name: 'Adam', age:24 }])) => 44
  function sumOfAge(obj) {
    return obj.reduce((acc, curr) => acc + curr.age, 0);
  }
  console.log('sumOfAge', sumOfAge(object));

  // Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false

  function isAnagram(firstWord, secondWord) {
    const firstWordArray = firstWord.split('').sort();
    const secondWordArray = secondWord.split('').sort();

    return firstWordArray.toString() === secondWordArray.toString()
      ? true
      : false;
  }
  console.log('isAnagram', isAnagram('iceman', 'cinema'));
  console.log('isAnagram', isAnagram('iceman', 'cinemma'));

  // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]
  function commonLetters(str1, str2) {
    const letters1 = new Set(str1);
    const arrayLetters2 = Array.from(new Set(str2));
    return Array.from(letters1).filter((letter) =>
      arrayLetters2.includes(letter)
    );
  }
  console.log('commonLetters', commonLetters('Hello', 'World'));

  // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]
  function commonLetters(str1, str2) {
    const letters1 = new Set(str1);
    const arrayLetters2 = Array.from(new Set(str2));
    return Array.from(letters1).filter((letter) =>
      arrayLetters2.includes(letter)
    );
  }
  console.log('commonLetters', commonLetters('Hello', 'World'));
  //   Napisz funkcję zmieniającą podany string na camelCase
  // toCamelCase("Jakiś_długi text") -> "jakiśDługiText
  function toCamelCase(str) {
    // Podziel ciąg na słowa używając spacji, myślników i podkreśleń jako separatora
    const words = str.split(/[ \-_]/);
    const camelCaseWords = words.map((word, index) => {
      // Pierwsze słowo zastosowanie LowerCase do pomniejszenia pierwszej litery
      if (index === 0) {
        return word.toLowerCase();
      } else {
        // Pozostałe słowa 1 litera UpperCase pozostała część liter LowerCase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    return camelCaseWords.join('');
  }
  console.log('toCamelCase', toCamelCase('Jakiś_długi text'));

  // Zadanie 1: Filtruj parzyste liczby // zastosuj filter

  function evenNumbers(numbers) {
    return numbers.filter((num) => num % 2 == 0);
  }
  const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log('evenNumbers', evenNumbers(array5));

  function oddNumbers(numbers) {
    return numbers.filter((numb) => numb % 2 !== 0);
  }

  console.log('oddNumbers', oddNumbers(array5));

  // Zadanie 2: Podwój każdy element tablicy zastosuj map

  function doubleElements(number) {
    return number.map((x) => x * 2);
  }

  console.log('doubleElements', doubleElements(array5));

  // Zadanie 3: Znajdź najdłuższy wyraz
  // zastosuj reduce (w reduce stwórz if'a na sprawdzenie czy obecny wyraz jest "dłuższy"  od porównywanego)
  // Zadanie 4:  Oblicz sumę liczb parzystych
  // zastosuj reduce
};
