import './styles.css';

export const SingleQuestion = (props) => {
  return (
    <div className="box_nr1">
      <div className="title">
        <h1>{props.question}</h1>
      </div>
      <div className="text">
        <p>{props.answer}</p>
      </div>
    </div>
  );
};
