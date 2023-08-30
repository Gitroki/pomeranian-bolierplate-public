import './styles.css';
import first from './jpeg.jpeg';
import second from './png.jpeg';
import third from './svg.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="Kot" />
      <img src={second} alt="Piłka" />
      <img src={third} alt="Kiwi" />
    </div>
  );
};
