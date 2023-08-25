import { useState } from 'react';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);
  function handleClick() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Ukryj tekst' : 'Pokaz tekst'}
      </button>

      {isVisible && <p>SeeOrNot</p>}
      {isVisible ? <p>SeeOrNot</p> : null}
    </div>
  );
};
