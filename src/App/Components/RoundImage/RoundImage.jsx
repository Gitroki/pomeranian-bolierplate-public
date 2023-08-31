import './styles.css';

export const RoundImage = ({ src }) => {
  //   const { src } = props;
  //   const src2 = props.src;

  //   console.log(src, src2, props.src);
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        width: `200px`,
        height: `200px`,
      }}
    ></div>
  );
};
