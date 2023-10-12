import { useState } from 'react';

export const LocalDevAndFetch = () => {
  const [todos, setTodods] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  function getTodos() {
    fetch('http://localhost:3333/api/todo', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodods(data);
      })
      .catch((err) => {
        setErrorMessage('Serwer nie dziala');
      });
  }
  return (
    <div>
      <button onClick={getTodos} type="button">
        Pobierz dane
      </button>
      <div>
        {errorMessage && <strong>{errorMessage}</strong>}
        <ul>
          {todos?.map((todo) => {
            return <li>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
