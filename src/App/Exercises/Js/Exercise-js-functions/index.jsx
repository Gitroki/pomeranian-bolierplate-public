import './styles.css';

export function Exercise() {
  const animal = {
    type: 'dog',
    age: 5,
    name: 'Lola',
  };

  animal.age = 10;
  console.log(animal.age);

  //////
  const number1 = 5;
  const number2 = 6;
  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <p>Definiowanie funkcji</p>
      <pre>
        <code>
          {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `}
        </code>
      </pre>
      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>
      komunikat funkcji {getWelcomeMessage('Roksana', 5)}
      wynik funkcji {multiply(number1, number2)}
    </div>
  );
}
