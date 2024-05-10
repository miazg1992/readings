import React, { useEffect, useMemo, useState } from 'react';
import {
  addToLocalStorage,
  getFromLocalStorage,
} from 'helpers/handleLocalStorage';

export const taskStatus = {
  toDo: 'TODO',
  inProgress: 'INPROGRESS',
  correctAnswer: 'CORRECTANSWER',
  incorrectAnswer: 'INCORRECTANSWER',
};
export const STAGE_TYPES = {
  syllables: 'SYLLABLES',
  sentences: 'SENTENCES',
};

// export const defaultStage = {
//   stage: STAGE_TYPES.syllables,
//   level: 0,
//   index: 0,
// };

export const defaultStage = {
  stage: STAGE_TYPES.syllables,
};

const dataSyllables = [
  // {
  //   word: 'maliny',
  //   syllables: ['ma', 'li', 'ny'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/maliny.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/maliny.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'rakieta',
  //   syllables: ['ra', 'kie', 'ta'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/rakieta.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/rakieta.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'morze',
  //   syllables: ['mo', 'rze'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/morze.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/morze.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'balony',
  //   syllables: ['ba', 'lo', 'ny'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/balony.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/balony.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'fala',
  //   syllables: ['fa', 'la'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/fala.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/fala.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'mama',
  //   syllables: ['ma', 'ma'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/mama.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/mama.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'tata',
  //   syllables: ['ta', 'ta'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/tata.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/tata.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'lody',
  //   syllables: ['lo', 'dy'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/lody.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/lody.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // // ma li ny lo dy bu ty au to ry ba ka wa ku ra ta ta ko ty
  // // maliny lody koty mama tata
  // // dom ryba kawa kura buty zebra
  // {
  //   word: 'zebra',
  //   syllables: ['ze', 'bra'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/zebra.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/zebra.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'koty',
  //   syllables: ['ko', 'ty'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/koty.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/koty.mp3}`,
  //   status: taskStatus.toDo,
  // },
  {
    word: 'auto',
    syllables: ['au', 'to'],
    img: `${process.env.PUBLIC_URL}assets/data/img/auto.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/auto.mp3}`,
    status: taskStatus.toDo,
    id: '01',
  },
  {
    word: 'lampa',
    syllables: ['lam', 'pa'],
    img: `${process.env.PUBLIC_URL}assets/data/img/lampa.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/lampa.mp3}`,
    status: taskStatus.toDo,
    id: '02',
  },
  {
    word: 'buty',
    syllables: ['bu', 'ty'],
    img: `${process.env.PUBLIC_URL}assets/data/img/buty.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/buty.mp3}`,
    status: taskStatus.toDo,
    id: '03',
  },
  {
    word: 'ryba',
    syllables: ['ry', 'ba'],
    img: `${process.env.PUBLIC_URL}assets/data/img/ryba.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/ryba.mp3}`,
    status: taskStatus.toDo,
    id: '04',
  },
  // {
  //   word: 'kawa',
  //   syllables: ['ka', 'wa'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/kawa.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/kawa.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'kura',
  //   syllables: ['ku', 'ra'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/kura.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/kura.mp3}`,
  //   status: taskStatus.toDo,
  // },
  // {
  //   word: 'maliny',
  //   syllables: ['ma', 'li', 'ny'],
  //   img: `${process.env.PUBLIC_URL}assets/data/img/maliny.jpg`,
  //   sound: `${process.env.PUBLIC_URL}assets/data/maliny.mp3}`,
  //   status: taskStatus.toDo,
  // },
];

const dataSentences = [
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
    id: '1.1',
  },
];

//maliny rakieta morze balony fala mama tata lody zebra koty auto lampa buty ryba kawa kura maliny
export const TasksContext = React.createContext({
  stageGame: null,
  tasks: [],
  activeTask: null,
  results: [],
  activeIndex: null,
  loading: null,
  generateActiveTask: () => {},
  updateResult: () => {},
  changeTaskStatus: () => {},
  changeTaskStatusII: () => {},

  selectStageGame: () => {},
  updateActiveIndex: () => {},
  updateActiveTaskStatus: () => {},
});

const TasksProvider = ({ children }) => {
  const [stageGame, setStageGame] = useState(null);

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
  const [loading, setLoading] = useState(true);

  const selectStageGame = (stage) => {
    let newStage = { stage: null, level: null, index: null };
    if (stage.stage === STAGE_TYPES.sentences) {
      newStage.stage = STAGE_TYPES.sentences;
    } else {
      newStage.stage = STAGE_TYPES.syllables;
    }
    if (stage.level) {
      newStage.level = stage.level;
    } else {
      newStage.level = 0;
    }
    if (stage.index) {
      newStage.index = stage.index;
    } else {
      newStage.index = 0;
    }

    generateTasks(newStage);
    if (stage) addToLocalStorage('stage', JSON.stringify(newStage));
    setStageGame(newStage);
    // let stageInLocalStorageII = getFromLocalStorage('stage');
  };

  useEffect(() => {
    let storedStageGame = JSON.parse(localStorage.getItem('stage'));
    if (storedStageGame) {
      selectStageGame(storedStageGame);
    } else {
      selectStageGame(defaultStage);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      generateResults();
      // generateActiveTask(activeIndex);
    }
  }, [tasks]);

  const generateTasks = (newStage) => {
    let stage = newStage.stage;
    let index = newStage.index;
    let data;
    if (stage) {
      if (stage === STAGE_TYPES.sentences) {
        data = dataSentences;
      } else {
        data = dataSyllables;
      }
      const max = level * amountTasksInLevel;
      const min = max - amountTasksInLevel;
      const tasks = data.slice(min, max);
      setTasks(tasks);
      generateActiveTask(tasks, index);
    } else return;
  };

  const generateActiveTask = (tasks, index) => {
    const activeTask = tasks[index];
    activeTask.status = taskStatus.inProgress;
    setActiveTask(activeTask);
    setLoading(false);
  };

  const updateActiveTaskStatus = (status) => {
    setActiveTask((task) => {
      task.status = status;
      return task;
    });
  };

  const generateResults = () => {
    const results = tasks.map((task) => task.status);
    setResults([...results]);
  };
  const updateStoredStage = (stage) => {
    const updateStage = stage;
    localStorage.setItem('stage', JSON.stringify(updateStage));
  };

  const updateActiveIndex = ({ id }) => {
    const activeIndex = tasks.findIndex((task) => (task.id = id));
    let newStageGame;
    setStageGame(({ index, level, stage }) => {
      if (index < amountTasksInLevel - 1 && index < tasks.length - 1) {
        index = index + 1;
        generateActiveTask(tasks, index);
        newStageGame = { stage, level, index };
        updateStoredStage(newStageGame);
      } else {
        level = level * 1 + 1;
        index = 0;
        newStageGame = { stage, level, index };
        updateStoredStage(newStageGame);
        alert('koniec poziomu, gratulujemy ', level);
      }

      return newStageGame;
    });
  };

  const changeTaskStatus = (activeTask, isCorrect) => {
    const index = tasks.findIndex((task) => task.id === activeTask.id);
    if (isCorrect) {
      tasks[index].status = taskStatus.correctAnswer;
      setTasks([...tasks]);
    } else {
      tasks[index].status = taskStatus.incorrectAnswer;
      setTasks([...tasks]);
    }
  };

  const changeTaskStatusII = (activeTask, status) => {
    const index = tasks.findIndex((task) => task.id === activeTask.id);
    if (status) {
      tasks[index].status = taskStatus.inProgress;
      setTasks([...tasks]);
    } else {
      tasks[index].status = taskStatus.incorrectAnswer;
      setTasks([...tasks]);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeTask,
        activeIndex,
        results,
        loading,
        changeTaskStatus,
        changeTaskStatusII,
        selectStageGame,
        updateActiveIndex,
        updateActiveTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
