import './styles.css';

export function Exercise() {
  // Boolean (true/false), gdzie true = 1 a false = 0
  // Boolean - zastosowanie
  // 1. Walidacja danych
  function isEmailValid(email) {
    // logika

    // Instrukcje warunkowe
    // 1.
    if (email) {
      return true;
    } else {
      return false;
    }
    // 2.
    // if (email) {
    //   return true;
    // }
    // return false;
    // 3.
    // return email ? true : false;

    // if (!email) return true;
    // else return false;

    // if (email) {
    //   if (!email) {
    //     return true;
    //   }
    //   return false;
    // } else {
    //   return false;
    // }
    // porównanie
    // return email ? !email ? true : false : false;
  }
  let dzienTygodnia = 8;

  switch (dzienTygodnia) {
    case 1:
      console.log('Dziś jest poniedziałek');
      break;
    case 2:
      console.log('Dziś jest wtorek');
      break;
    case 3:
      console.log('Dziś jest środa');
      break;
    default:
      console.log('Tydzień ma tylko 7 dni');
  }

  if (isEmailValid('test@example.com')) {
    console.log('Email jest poprawny');
  }
  if (isEmailValid(0)) {
    console.log('Email jest niepoprawny');
  }
  // 2. Flagi Stanów
  let isUserLoggedIn = true;
  let isPremiumUser = false;
  let isAdmin = false;
  // 3. Obsługę błędów i loaderów
  let isError = true;
  let isLoading = false;
  // 4. Ukrywanie i wyświetlanie elementów

  let isPremiumAndLoggedIn;
  if (isPremiumUser && isUserLoggedIn) {
    isPremiumAndLoggedIn = true;
  }
  const content = (
    <>
      {isLoading && 'Ładuje dane'}
      {!isLoading && isUserLoggedIn && (
        <div>Kontent widoczny dla zalogowanego użytkownika</div>
      )}
      {isAdmin && <div>Kontent widoczny dla administratora</div>}
      {isPremiumAndLoggedIn && (
        <div>Kontent widoczny dla zalogowanego użytkownika premium </div>
      )}
    </>
  );

  // Operatory
  const a = true;
  const b = false;

  // || LUB (OR)
  const result1 = a || b; // true
  console.log(result1, ' a || b');
  const result2 = b || a; // true
  console.log(result2, ' b || a');
  const result3 = b || false; // false
  console.log(result3, ' b || false');

  // && I (AND)
  const result4 = a && true;
  console.log(result4, 'a && true');
  const result5 = a && b; // false
  console.log(result5, 'a && b');

  // ! Negacje (NOT)

  const result6 = !a;
  console.log(result6, '!a');
  const result7 = !b;
  console.log(result7, '!b');

  // ||= OR ASSIGN
  let x = 5;
  x ||= 10; // x nadal bedzie równe 5 bo 5 nie jest wartości false
  console.log(x, 'x ||= 10');
  let y = 0;
  y ||= 10; // y nadal bedzie równe 10 bo 0 jest wartością false
  console.log(y, 'y ||= 10');

  // &&= AND ASSIGN
  let z = 5;
  z &&= 10; // z będzie równe 10 bo 5 jest wartością true
  console.log(z, 'z &&= 10');
  let w = 0;
  w &&= 10; // w będzie równe 0 bo 5 nie jest wartością false
  console.log(w, 'w &&= 10');

  //
  // OPERATORS PRESENDENCE
  //

  // 1. () Nawiasy (Najwyższy priorytet - wyrażenia w nawiasach są wykonywane jako pierwsze).
  // 2. ** Potęgowanie.
  // 3. *, /, % Mnożenie, dzielenie i reszta z dzielenia.
  // 4. +, - Dodawanie i odejmowanie.
  // 5. <<, >>, >>> Przesunięcie bitowe.
  // 6. <, <=, >, >= Porównania.
  // 7. ==, !=, ===, !== Porównania równości i nierówności.
  // 8. & Bitowe AND.
  // 9. ^ Bitowe XOR.
  // 10. | Bitowe OR.
  // 11. && Logiczne AND.
  // 12. || Logiczne OR.
  // 13. ? : Operator warunkowy (ternary).
  // 14. =, +=, -= i inne Operatory przypisania.

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

  return content;
}
