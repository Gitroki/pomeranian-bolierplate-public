//UTWORZYLISMY NOWY KOMPONENT Z MAKIETA 5A I FUNKCJONALNOSCIA GDZIE DODAJEMY TODOSY

import { useState } from 'react';
import { sendData } from './api/todoListApi';

export const CreateNewReminder = ({ backFunction, refreshFunction }) => {
  //2. Stworzyc useState i podpiac je pod odpowiednie inputy w formularzu - zrobione
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [getError, setGetError] = useState(null);

  //3. Podpiac funkcje backFunction i createTodo - zrobione
  //3.1 Przygotować dane w odpowiednim obiekcie (patrz swagger) - zrobione
  async function createTodo() {
    const data = {
      title: title,
      note: note,
      author: author,
    };
    await sendData('api/todo', data, 'POST')
      .then((response) => {
        backFunction(false);
        refreshFunction(response);
      })
      .catch((error) => {
        setGetError(error);
      });
  }
  //1. Zrobic makieta 5A - zrobione jakotako
  return (
    <form onSubmit={createTodo}>
      <div className="todo-window">
        <div className="todo-small-window">
          <h4>
            <strong>Tytuł</strong>
          </h4>
          <input
            className="reminder-input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="todo-small-window">
          <h4>
            <strong>Autor</strong>
          </h4>
          <input
            className="reminder-input"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div className="todo-small-window">
          <h4>
            <strong>Treść</strong>
          </h4>
          <textarea
            className="reminder-input"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>
        <div>
          {getError && (
            <p className="error-message">Wystąpił błąd, spróbuj ponownie.</p>
          )}
        </div>
        <div>
          <button className="back-button" onClick={() => backFunction(false)}>
            Cofnij
          </button>
          <button className="add-button">Dodaj</button>
        </div>
      </div>
    </form>
  );
};
