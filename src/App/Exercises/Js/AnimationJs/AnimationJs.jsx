import './styles.css';
import { useEffect, useState } from 'react';
export const AnimationJs = () => {
  const [text, setText] = useState('I love react :)');
  const [isAnimated, setIsAnimated] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const toggleButton = () => {
    setIsAnimated((prev) => !prev);
  };

  useEffect(() => {
    // tutaj logika
  }, [text]);

  useEffect(() => {
    if (opacity > 0) {
      const interval = setInterval(() => {
        setOpacity(opacity - 0.005);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [opacity]);
  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleButton}>{isAnimated ? 'Off' : 'On'}</button>
      <div className="animated-box" style={{ opacity: opacity }}></div>
    </div>
  );
};
