import React, { useEffect, useState } from 'react';

const data = [
  {
    word: 'fala',
    syllables: ['fa', 'la'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'mama',
    syllables: ['ma', 'ma'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'tata',
    syllables: ['ta', 'ta'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'lody',
    syllables: ['lo', 'dy'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'zebra',
    syllables: ['ze', 'bra'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'koty',
    syllables: ['ko', 'ty'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'auto',
    syllables: ['au', 'to'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'lampa',
    syllables: ['lam', 'pa'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'buty',
    syllables: ['bu', 'ty'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'ryba',
    syllables: ['ry', 'ba'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'kawa',
    syllables: ['ka', 'wa'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'kura',
    syllables: ['ku', 'ra'],
    img: `${1}.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'maliny',
    syllables: ['ma', 'li', 'ny'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
];

export const TasksContext = React.createContext({
  tasks: [],
  activeTask: null,
  results: [],
  generateActiveTask: () => {},
  updateResult: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [results, setResults] = useState([]);
  const [counter, setCounter] = useState(0);
  const [level, setLevel] = useState(1);

  const generateActiveTask = () => {
    const activeTask = data[counter];
    setCounter((counter) => counter + 1);
    setActiveTask(activeTask);
  };

  const generateTasks = () => {
    const max = level * 10;
    const min = max - 10;
    const tasks = data.slice(min, max);
    setTasks(tasks);
    generateResults(tasks);
  };

  // const updateResult = (isCorrect) => {
  //   console.log('test');
  //   console.log('zmieniam wynik yyyy', isCorrect);
  //   console.log('zmieniam wynik yyyy2', isCorrect);
  //   console.log('z', isCorrect);
  //   console.log('dupa');
  //   console.log('zm', isCorrect);
  //   // setResult(isCorrect);
  //   return setTimeout(() => {
  //     console.log('a teraz');
  //   }, 3000);

  //   // generateActiveTask();
  // };

  const generateResults = (tasks) => {
    const results = tasks.map((task) => false);
    setResults(results);
  };
  const updateResult = (isCorrect, index) => {
    console.log('aktualizacja rezultatu', isCorrect);
    setResults((results) => {
      console.log(results, 'rezultaty przed');
      return [...results, isCorrect];
    });
    setTimeout(generateActiveTask, 2000);
  };

  useEffect(() => {
    generateTasks();
    generateActiveTask();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeTask,
        results,
        generateActiveTask,
        updateResult,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
