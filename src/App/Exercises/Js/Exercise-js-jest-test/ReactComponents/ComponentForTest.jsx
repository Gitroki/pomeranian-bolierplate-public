import { useEffect, useState } from 'react';

export const ComponentForTest = () => {
  const [getIsLoded, setIsLoaded] = useState(false);
  const [getContent, setContent] = useState(null);

  const handleClick = () => setIsLoaded(true);

  //wyrenderuj <p> po dwoch sekundach
  useEffect(() => {
    setTimeout(() => {
      setContent(
        <p data-testid="test-for-async-call">
          Jestem elementem który wyrenderował sie z opozniniem
        </p>
      );
    }, 2000);
  }, []);

  return (
    <div>
      {getContent}
      {getIsLoded ? (
        <p>Tekst po załadowaniu</p>
      ) : (
        <div>
          <button onClick={handleClick}>Kliknij mnie</button>
          <button onClick={handleClick}>Kliknij mnie</button>
          <button onClick={handleClick}>Kliknij UNIQUE</button>
        </div>
      )}
    </div>
  );
};
