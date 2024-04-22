import React, { useEffect, useMemo, useState } from 'react';

export const taskStatus = {
  toDo: 'TODO',
  inProgress: 'INPROGRESS',
  correctAnswer: 'CORRECTANSWER',
  incorrectAnswer: 'INCORRECTANSWER',
};

const data = [
  {
    word: 'fala',
    syllables: ['fa', 'la'],
    img: `${process.env.PUBLIC_URL}assets/data/img/fala.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/fala.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'mama',
    syllables: ['ma', 'ma'],
    img: `${process.env.PUBLIC_URL}assets/data/img/mama.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/mama.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'tata',
    syllables: ['ta', 'ta'],
    img: `${process.env.PUBLIC_URL}assets/data/img/tata.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/tata.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'lody',
    syllables: ['lo', 'dy'],
    img: `${process.env.PUBLIC_URL}assets/data/img/lody.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/lody.mp3}`,
    status: taskStatus.toDo,
  },
  // ma li ny lo dy bu ty au to ry ba ka wa ku ra ta ta ko ty
  // maliny lody koty mama tata
  // dom ryba kawa kura buty zebra
  {
    word: 'zebra',
    syllables: ['ze', 'bra'],
    img: `${process.env.PUBLIC_URL}assets/data/img/zebra.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/zebra.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'koty',
    syllables: ['ko', 'ty'],
    img: `${process.env.PUBLIC_URL}assets/data/img/koty.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/koty.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'auto',
    syllables: ['au', 'to'],
    img: `${process.env.PUBLIC_URL}assets/data/img/auto.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/auto.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'lampa',
    syllables: ['lam', 'pa'],
    img: `${process.env.PUBLIC_URL}assets/data/img/lampa.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/lampa.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'buty',
    syllables: ['bu', 'ty'],
    img: `${process.env.PUBLIC_URL}assets/data/img/buty.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/buty.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'ryba',
    syllables: ['ry', 'ba'],
    img: `${process.env.PUBLIC_URL}assets/data/img/ryba.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/ryba.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'kawa',
    syllables: ['ka', 'wa'],
    img: `${process.env.PUBLIC_URL}assets/data/img/kawa.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/kawa.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'kura',
    syllables: ['ku', 'ra'],
    img: `${1}.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/kura.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'maliny',
    syllables: ['ma', 'li', 'ny'],
    img: `${process.env.PUBLIC_URL}assets/data/img/maliny.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/maliny.mp3}`,
    status: taskStatus.toDo,
  },
];

export const TasksContext = React.createContext({
  tasks: [],
  activeTask: null,
  results: [],
  activeIndex: null,
  generateActiveTask: () => {},
  updateResult: () => {},
  changeTaskStatus: () => {},
  updateActiveIndex: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  // const [results, setResults] = useMemo(
  //   () => tasks.map((task) => task.status),
  //   [tasks],
  // );
  const [results, setResults] = useState([]);
  let [activeIndex, setActiveIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const amountTasksInLevel = 10;

  const generateActiveTask = (index) => {
    console.log(data[index]);
    const activeTask = data[index];
    console.log(activeTask);
    activeTask.status = taskStatus.inProgress;
    setActiveTask(activeTask);
  };

  const generateTasks = () => {
    const max = level * amountTasksInLevel;
    const min = max - amountTasksInLevel;
    const tasks = data.slice(min, max);
    setTasks(tasks);
    // generateResults(tasks);
  };

  const generateResults = () => {
    const results = tasks.map((task) => task.status);
    setResults([...results]);
  };

  useEffect(() => {
    generateResults();
  }, [tasks]);

  const updateActiveIndex = () => {
    console.log('yyyyy aktualizowanie');

    setActiveIndex((activeIndex) => {
      // updateResult(taskStatus.inProgress);

      let newIndex = activeIndex;

      if (activeIndex < amountTasksInLevel - 1) {
        newIndex = activeIndex + 1;
        console.log(newIndex, activeIndex);
        generateActiveTask(newIndex);
      } else alert('koniec poziomu, gratulujemy ', level);
      return newIndex;
    });
  };

  // const generateNextTask = () => {
  //   const activeIndex = updateActiveIndex();
  //   generateActiveTask(activeIndex);
  //   updateResult(taskStatus.inProgress);
  // };

  // const generateResults = (tasks) => {
  //   const results = tasks.map((task) => task.status);
  //   console.log(results, 'results');
  //   setResults(results);
  // };

  const changeTaskStatus = (isCorrect) => {
    if (isCorrect === true) {
      tasks[activeIndex].status = taskStatus.correctAnswer;
      setTasks([...tasks]);
    } else if (isCorrect === false) {
      tasks[activeIndex].status = taskStatus.incorrectAnswer;
      setTasks([...tasks]);
    }
  };
  // const updateResult = (isCorrect) => {
  //   console.log(isCorrect, 'status w updateResult');
  //   if (isCorrect === true) console.log('ok', isCorrect);
  //   if (isCorrect === false) console.log('zle', isCorrect);
  //   else console.log(isCorrect);
  //   if (isCorrect !== taskStatus.inProgress) {
  //     updateActiveIndex();
  //   }
  //   setResults((results) => {
  //     results[activeIndex] = isCorrect;
  //     return [...results];
  //   });
  // };

  //generate first - initialization
  useEffect(() => {
    generateTasks();
    activeIndex = 0;
    generateActiveTask(activeIndex);
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeTask,
        activeIndex,
        results,
        changeTaskStatus,
        updateActiveIndex,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
