import './styles.css';

export const ArrayRendering = () => {
  const DATA = ['Saab', 'Volvo', 'BMW'];

  return (
    <>
      <ul>
        {DATA.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {/* <ul>
      {OBJECT_DATA.map((item) => {
        return ()
      })}
    </ul> */}
    </>
  );
};
