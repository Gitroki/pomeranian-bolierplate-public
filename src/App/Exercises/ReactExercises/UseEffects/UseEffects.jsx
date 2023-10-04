import { useEffect } from 'react';

export const UseEffects = () => {
  useEffect(() => {}, []);

  useEffect(() => {
    //HELLO
  }); // Kod wykona sie za kazdym razem jak zmieni sie stan lub cos sie nacisnie

  useEffect(() => {
    // Pusta tablica zaleznosci
  }, []); // Mamy zalezosci, ale sa uste kod wykona sie tylko jeden raz

  useEffect(() => {
    // zaleznosc "zaleznosc"
  }, [zalezosc]); // Kod wykona sie gdy wartosc zaleznosc ulegnie zmianie (np. stan) wykona sie kod wewantrz useEffect

  useEffect(() => {
    return () => {};
  }); // Return to funkcja czyszczaca np. stany. Taka sytuacja z interwalami

  return <div>Hello UseEffects</div>;
};
