import checkGreenIcon from './checkGreenIcon.svg';
import checkIcon from './checkIcon.svg';
import binIcon from './binIcon.svg';
import redBinIcon from './redBinIcon.svg';
import pencilIcon from './pencilIcon.svg';
import { useState } from 'react';
import { sendData } from './api/todoListApi';

export const ToDoItem = ({ obj, handleDelete, refreshFunction }) => {
  async function handleDelete(paramId) {
    await sendData(`api/todo/${paramId}`, [], 'DELETE')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setGetError(error);
      });
  }

  const [getError, setGetError] = useState(null);
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
            {obj.isDone ? '' : <img src={checkIcon} alt="checkIcon" />}
            <img src={pencilIcon} alt="pencilIcon" />
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
