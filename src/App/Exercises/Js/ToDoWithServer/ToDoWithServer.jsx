import './styles.css';
import { fetchData, sendData } from './api/todoListApi';
import { useEffect, useState } from 'react';
import { ToDoItem } from './ToDoItem';
import { Congrats } from './Congrats';
import { ErrorView } from './ErrorView';
import { Loader } from './Loader';
import { CreateNewReminder } from './CreateNewReminder';

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
  const [isFormVisible, setIsFormVisible] = useState(false); //
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

  const showNewReminderView = () => setIsFormVisible(true);

  // function handleDelete(paramId) {
  //   sendData(`api/todo/${paramId}`, [], 'DELETE').then((response) =>
  //     setGetKickComponent(response)
  //   );
  // }

  if (getError) {
    return <ErrorView />;
  }

  if (getIsLoading) {
    return <Loader />;
  }

  if (isFormVisible) {
    return <CreateNewReminder backFunction={setIsFormVisible} />;
  }

  return (
    <div>
      <div className="all-reminder">
        {getError && getError}
        {getTodoData.map((obj) => {
          return (
            <ToDoItem
              key={obj.id}
              obj={obj}
              refreshFunction={setGetKickComponent}
            />
          );
        })}
      </div>
      <button className="add-button" onClick={() => showNewReminderView()}>
        Dodaj
      </button>
      <Congrats />
    </div>
  );
};
