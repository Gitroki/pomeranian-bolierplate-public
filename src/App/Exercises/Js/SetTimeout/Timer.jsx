import { useEffect, useState } from 'react';

// setInterval
// Jest używana do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu
// setTimeout
// Jest używana do wykonania pewnej operacji po określonym przez nas czasie
export const Timer = () => {
  const [showText, setShowText] = useState(false);
  const [intervalTimeoutId, setIntervalTimeoutId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const [czas, setCzas] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    setShowText(true);
    setIntervalTimeoutId(
      setInterval(() => {
        setShowText((prev) => !prev);
      }, 2000)
    );
  };
  const handleClickClear = () => {
    clearInterval(intervalTimeoutId);
  };

  const handleClickClearTimeout = () => {
    clearTimeout(timeoutId);
  };

  const handleClickSetTimeout = () => {
    setTimeoutId(
      setTimeout(() => {
        alert('Po 4 sekundach wyświetl na stronie');
      }, 4000)
    );
  };

  const toogleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    //   deklarujemy zmienną w tym miejscu żeby else miał do niej dostęp
    let timerInterval;
    if (isRunning) {
      // Jeżeli timer jest włączony, uruchamiamy interwał
      timerInterval = setInterval(() => {
        setCzas((prev) => prev + 1);
      }, 1000);
      // zwiększamy czas o 1 sekunde co 1 sekunde
    } else {
      // Jeśli timer jest wyłączony, czyścimy interwał
      clearInterval(timerInterval);
    }
    //   Funkcja zwrotna do czyszczenia interwału po zakończeniu komponentu
    return () => {
      clearInterval(timerInterval);
    };
    //   wykonujemy useEffect na każdą zmianę isRunning
  }, [isRunning]);

  const restartTimer = () => {
    setCzas(0);
  };
  return (
    <div>
      <div>
        {/* setInterval */}
        <button onClick={handleClick}>Wyświetl napis</button>
        <button onClick={handleClickClear}>ClearInterval</button>

        {/* setTimeout */}
        <button onClick={handleClickSetTimeout}>setTimeout button</button>
        <button onClick={handleClickClearTimeout}>ClearTimeout</button>
      </div>
      {showText && <div>Hej, jestem napisem</div>}
      <div>
        <h1>TIMER</h1>
        <h2>{`${czas} sec`}</h2>
        <button onClick={toogleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};
