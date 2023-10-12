import './styles.css';
import checkGreenIcon from './checkGreenIcon.svg';
import checkIcon from './checkIcon.svg';
import binIcon from './binIcon.svg';
import redBinIcon from './redBinIcon.svg';
import pencilIcon from './pencilIcon.svg';
import { fetchData, sendData } from './api/todoListApi';
import { useEffect, useState } from 'react';

// const data = [
//   {
//     id: 1,
//     title: 'Zamówić catering',
//     createdAt: '2021-05-22T11:20:22.935Z',
//     author: 'Wojtek',
//     isDone: false,
//     note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
//   },
//   {
//     id: 2,
//     title: 'Kupić spray na kleszcze',
//     createdAt: '2021-05-22T11:20:22.935Z',
//     author: 'Wojtek',
//     isDone: false,
//     note: 'Pamiętać, żeby sprawdzić skład i termin ważności preparatu. Zadzwonić do weta, żeby się upewnić, czy mają na stanie.',
//   },
//   {
//     id: 3,
//     title: 'Szczepienie kitku',
//     createdAt: '2021-05-22T11:20:22.935Z',
//     doneDate: '2022-05-22T11:20:22.935Z',
//     author: 'Wojtek',
//     isDone: true,
//     note: 'Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
//   },
// ];

export const ToDoWithServer = () => {
  const [getTodoData, setGetTodoData] = useState([]);
  const [getIsLoading, setGetIsLoading] = useState(true); //is bo Boolean
  const [getError, setGetError] = useState(null);
  const [getKickComponent, setGetKickComponent] = useState(null);

  const fetchTodoData = async () => {
    setGetIsLoading(true);
    try {
      const responseData = await fetchData('api/todo');
      setGetTodoData(responseData);
      setGetIsLoading(false);
    } catch (error) {
      setGetError(error);
      setGetIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, [getKickComponent]);

  function handleDelete(paramId) {
    sendData(`api/todo/${paramId}`, [], 'DELETE').then((response) =>
      setGetKickComponent(response)
    );
  }
  return (
    <div>
      <div className="all-reminder">
        {getError && getError}
        {getTodoData.map((obj) => {
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
        })}
      </div>

      <div className="window-alert">
        <h4 className="text-alert">
          <strong>
            Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.
          </strong>
        </h4>
        <button className="pink-buttons">ODŚWIEŻ WIDOK</button>
      </div>
    </div>
  );
};
