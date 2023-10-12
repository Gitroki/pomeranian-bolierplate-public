import './styles.css';
import { fetchData, sendData } from './api/todoListApi';
import { useEffect, useState } from 'react';
import { ToDoItem } from './ToDoItem';
import { Congrats } from './Congrats';
import { ErrorView } from './ErrorView';
import { Loader } from './Loader';
import { CreateNewReminder } from './CreateNewReminder';

export const ToDoWithServer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
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
