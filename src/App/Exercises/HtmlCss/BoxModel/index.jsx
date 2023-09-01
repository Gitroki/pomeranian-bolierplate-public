import './styles.css';

export const BoxModel = () => {
  const isVisible = true;
  const isNotVisible = false;

  return (
    <div>
      BoxModel:
      <div className="div_nr1">Przykładowy div</div>
      <div className="div_nr2">Przykładowy div</div>
      {/* IF statement */}
      <p className="p_nr1">Przykładowy p</p>
      {isVisible && <p className="p_nr2">Przykładowy p</p>}
      <p className={isNotVisible ? 'p_nr1' : 'p_nr2'}>Przykładowy p</p>
      <h1 className="h1_nr1">Przykładowy h1</h1>
      {/* Display */}
      <span className="span_nr1">Przykładowy span</span>
      <span className="span_nr2">Przykładowy span</span>
      <span className="span_nr3">Przykładowy span</span>
      {/* Overflow */}
      <div className="div_nr3">Przykładowy div</div>
    </div>
  );
};
