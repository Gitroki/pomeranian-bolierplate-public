import { useState } from 'react';

// setInterval
// Jest używana do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu
// setTimeout
// Jest używana do wykonania pewnej operacji po określonym przez nas czasie
export const Timer = () => {
  const [showText, setShowText] = useState(false);
  const [intervalTimeoutId, setIntervalTimeoutId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

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
    </div>
  );
};
