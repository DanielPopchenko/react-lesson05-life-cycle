import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './tasks.css';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
import Filter from './components/TaskList/Filter';

export default function SecondApp() {
  // ! В таски при перерендере сетится пустая строка, поэтому нужно передавать туда знач. из LocStor
  const [tasks, setTasks] = useState(
    [...JSON.parse(window.localStorage.getItem('tasks'))] ?? '',
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Сетим айтемы в локалсторэдж!');
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const persistedTasks = localStorage.getItem('tasks');

    if (!persistedTasks) {
      return;
    }

    console.log(JSON.parse(persistedTasks));
    setTasks(JSON.parse(persistedTasks));
  }, []);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const getVisibleTasks = () => {
    return tasks.filter((task) =>
      task.text.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  };

  const addTask = (text) => {
    // const task = createTask();

    const task = {
      id: uniqid(),
      text: text,
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
  };

  const removeTask = (taskId) => {
    setTasks((prev) => prev.filter(({ id }) => id !== taskId));
  };

  const updateCompleted = (taskId) => {
    // !Чтобы неявно вернуть обьект, оборачиваем его в выражение ({....})

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const visibleTasks = getVisibleTasks();

  return (
    <section>
      <TaskEditor onAddTask={addTask} />

      {visibleTasks.length > 1 && <Filter value={filter} onChangeFilter={changeFilter} />}

      {/* Рендер по условию */}

      {visibleTasks.length > 0 && (
        <TaskList
          // Передаем сюда отфильтрованные видимые таски и отрисовываем их
          // но технически все записанные таски остаются в стэйте
          tasks={visibleTasks}
          onRemoveTask={removeTask}
          onUpdateTask={updateCompleted}
        />
      )}
    </section>
  );
}

// class OldSecondApp extends Component {
//   state = {
//     tasks: [],
//     filter: '',
//   };

//   // ! Методы жизенного цикла пишутся после объявления state и статических методов класса

//   componentDidMount() {
//     console.log('Tasks componentDidMount');

//     // ! делаем это для проверки того есть ли у нас таски в локалсторедже
//     const persistedTasks = localStorage.getItem('tasks');

//     // ! Сохранение (персист) в localStorage
//     if (persistedTasks) {
//       this.setState({
//         // ! результат JSON.parse() - массив объектов
//         tasks: JSON.parse(persistedTasks),
//       });
//     }
//   }

//   // ! Передается предыдущие пропы и стэйт до обновдения
//   componentDidUpdate(prevProps, prevState) {
//     console.log('tasks componentDidUpdate');
//     if (prevState.tasks !== this.state.tasks) {
//       console.log('нужно в лс');

//       localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
//     }
//   }

//   changeFilter = (filter) => {
//     this.setState({ filter });
//   };

//   getVisibleTasks = () => {
//     const { tasks, filter } = this.state;
//     return tasks.filter((task) =>
//       task.text.toLocaleLowerCase().includes(filter.toLowerCase()),
//     );
//   };

//   addTask = (text) => {
//     // const task = createTask();

//     const task = {
//       id: uniqid(),
//       text: text,
//       completed: false,
//     };

//     this.setState((prevState) => {
//       // ! Создаем новый массив,
//       // ! Распыляем предыдущий и добавляем новый елемент
//       return {
//         tasks: [...prevState.tasks, task],
//       };
//     });
//   };

//   removeTask = (taskId) => {
//     this.setState((prevState) => {
//       return {
//         // ! Проверяем каждый елемент, когда совпадает
//         // ! id елемента при клике с id елмента с массива
//         // ! удаляем его с коллекции
//         // !!! В нашем случае, когда id елемента при клике с id елмента с массива не совпадают, то оставляем
//         tasks: prevState.tasks.filter(({ id }) => id !== taskId),
//         // ! не передаем туда массив потому что filter сам создает массив из прошедших проверку елементов
//       };
//     });
//   };

// updateCompleted = (taskId) => {
//   // !Чтобы неявно вернуть обьект, оборачиваем его в выражение ({....})
//   this.setState((prevState) => ({
//     tasks: prevState.tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task,
//     ),
//   }));
// };

//   render() {
//     const { filter } = this.state;

//     // ! Рисуем только те таски, которые прошли проверку в функции
//     // ! А в state будут оставаться все теже таски

//     const visibleTasks = this.getVisibleTasks();

//     return (
//       <section>
//         <TaskEditor onAddTask={this.addTask} />

//         {visibleTasks.length > 1 && (
//           <Filter value={filter} onChangeFilter={this.changeFilter} />
//         )}

//         {/* Рендер по условию */}

//         {visibleTasks.length > 0 && (
//           <TaskList
//             // Передаем сюда отфильтрованные видимые таски и отрисовываем их
//             // но технически все записанные таски остаются в стэйте
//             tasks={visibleTasks}
//             onRemoveTask={this.removeTask}
//             onUpdateTask={this.updateCompleted}
//           />
//         )}
//       </section>
//     );
//   }
// }
