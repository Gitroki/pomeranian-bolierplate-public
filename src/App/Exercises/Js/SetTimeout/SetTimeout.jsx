import { useEffect, useState } from 'react';

export const SetTimeout = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  // USE EFFECT

  useEffect(() => {
    console.log('useEffect na każdej zmianie');
  });
  // Uważać na zależności między useEffectami by nie stworzyć sobie pętli
  //   useEffect(() => {
  //     console.log('useEffect na każdej zmianie');
  //     setCount((prev) => prev + 1);
  //   });
  // Nasłuchuje zmian wartości count
  useEffect(() => {
    console.log('useEffect na zmianie count');
  }, [count]);

  useEffect(() => {
    console.log('useEffect na zmianie count i doubleCount');
  }, [count, doubleCount]);

  // useEffect z pustym dependency array - WYWOŁA SIĘ TYLKO RAZ PO ZAMOUNTOWANIU KOMPONENTU

  useEffect(() => {
    // pobierz dane z serwera, wyswielt błędy, ewentualnie poinformuj użytkonika o konkretej syutacji

    console.log(
      'useEffect z pustą dependency array - wywołujemy go tylko raz na ładowaniu się strony '
    );
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Dodaj 1</button>
      <button onClick={() => setDoubleCount((prev) => prev + 2)}>
        Dodaj 1
      </button>
      <div>
        <div>Count {count}</div>
        <div>DoubleCount {doubleCount}</div>
      </div>
    </div>
  );

  return <div>SetTimeout</div>;
};
