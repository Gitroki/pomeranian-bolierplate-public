import { useState } from 'react';
import './styles.css';

export const JsStoriges = () => {
  // const [test, setTest] = useState(localStorage.getItem('test'));

  // function setLs() {
  //   localStorage.setItem('test', 1);
  //   setTest(1);
  // }

  // function resetLs() {
  //   localStorage.removeItem('test');
  //   setTest(null);
  // }
  const [name, setName] = useState('');
  const [nickNames, setNickNames] = useState(
    localStorage.getItem('nick')?.split(',') || []
  );

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function addNickName() {
    setNickNames([...nickNames, name]);
    localStorage.setItem('nick', [...nickNames, name]);
  }
  return (
    <div>
      {/* <button onClick={setLs}>Ustaw LS</button>
      <button onAbort={resetLs}>Resetuj LS</button>
      <p>{test}</p> */}

      <div className="start-view">
        <div className="add-nick-window">
          <div>
            <span className="nick">NICK</span>
            <input className="put-nick" onChange={handleNameChange}></input>
          </div>
          <button className="add-button" onClick={addNickName}>
            DODAJ
          </button>
        </div>
        <div className="all-nicks">
          <div>
            <ul>
              <li>
                {nickNames.map((item) => (
                  <p>{item}</p>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
