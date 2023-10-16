import { useState } from 'react';
import { sendData } from './api/todoListApi';
export const ToDoEdit = ({
  refreshFunction,
  setGetError,
  backFunction,
  obj,
}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  async function editTodo() {
    const data = {
      title: title,
      note: note,
      author: obj.author,
    };
    await sendData(`api/todo/${obj.id}`, data, 'PUT')
      .then((response) => {
        backFunction(false);
        refreshFunction(response);
      })
      .catch((error) => {
        setGetError(error);
      });
  }

  return (
    <form onSubmit={editTodo}>
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
            <strong>Treść</strong>
          </h4>
          <textarea
            className="reminder-input"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>

        <div className="buttons-add-back">
          <button className="back-button" onClick={() => backFunction(false)}>
            Cofnij
          </button>
          <button className="add-button">Zapisz</button>
        </div>
      </div>
    </form>
  );
};
