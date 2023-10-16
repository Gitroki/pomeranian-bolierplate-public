import checkGreenIcon from './checkGreenIcon.svg';
import checkIcon from './checkIcon.svg';
import binIcon from './binIcon.svg';
import redBinIcon from './redBinIcon.svg';
import pencilIcon from './pencilIcon.svg';
import { useState } from 'react';
import { sendData } from './api/todoListApi';

// [
//   {
//     "id": 0,
//     "title": "string",
//     "createdAt": "2023-10-13T15:26:30.463Z",
//     "author": "string",
//     "isDone": true,
//     "note": "string",
//     "doneDate": "2023-10-13T15:26:30.463Z"
//   }
// ]

export const ToDoItem = ({
  obj,
  handleDelete,
  refreshFunction,
  setIsTodoEditVisible,
  setEditedObject,
}) => {
  async function handleDelete(paramId) {
    await sendData(`api/todo/${paramId}`, [], 'DELETE')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setGetError(error);
      });
  }
  async function reminderIsDone(paramId) {
    await sendData(`api/todo/${paramId}/markAsDone`, [], 'PUT')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setGetError(error);
      });
  }

  const [getError, setGetError] = useState(null);

  function showEditView() {
    setIsTodoEditVisible(true);
    setEditedObject(obj);
  }

  return (
    <div className={obj.isDone ? 'reminder-done' : 'reminder'}>
      <div className="reminder-container">
        <div className="left-side">
          <h4 className="reminder-title">
            <strong>{obj.title}</strong>
          </h4>
          <div className="reminder-data">
            <p2>{obj.author}</p2>
            <p2>{obj.createdAt}</p2>
          </div>
          <div className="reminder-content">
            <p>{obj.note}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="click-icon">
            {obj.isDone ? (
              ''
            ) : (
              <img
                onClick={() => reminderIsDone(obj.id)}
                src={checkIcon}
                alt="checkIcon"
              />
            )}
            <img
              onClick={() => showEditView()}
              src={pencilIcon}
              alt="pencilIcon"
            />
            <img src={binIcon} alt="binIcon" />
            <img
              src={redBinIcon}
              alt="redBinIcon"
              onClick={() => handleDelete(obj.id)}
            />
          </div>
          {getError && <p className="error-message">nie udało się usunąć</p>}
          {obj.isDone && (
            <div className="green-check-icon">
              <img src={checkGreenIcon} alt="checkGreenIcon" />
              <p2 className="reminder-data">{obj.doneDate}</p2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
