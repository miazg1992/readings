import React, { useEffect, useState } from 'react';

const data = [
  {
    word: 'fala',
    syllables: ['fala', 'fa', 'la'],
    img: `${process.env.PUBLIC_URL}assets/data/img/1.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/d.mp3}`,
    isDone: false,
  },
  {
    word: 'mama',
    syllables: ['mama', 'ma', 'ma'],
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
    syllables: ['', 'bu', 'ty'],
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
    syllables: ['ka', 'ra'],
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
  generateTask: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  let counter = 0;

  const generateTask = () => {
    const activeTask = data[counter];
    console.log(activeTask, 'activeStasr');
    counter++;
    setActiveTask(activeTask);
  };

  useEffect(() => {
    generateTask();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeTask,
        generateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
