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
    img: `${process.env.PUBLIC_URL}assets/data/img/kura.jpg`,
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

const dataSentences = [
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
  {
    word: 'Dzieci robią zamek z piasku',
    syllables: ['Dzieci', 'robią', 'zamek', 'z', 'piasku'],
    img: `${process.env.PUBLIC_URL}assets/data/img/dzieci robią zamek.jpg`,
    sound: `${process.env.PUBLIC_URL}assets/data/dzieci robią zamek.mp3}`,
    status: taskStatus.toDo,
  },
];

export const STAGE_TYPES = {
  syllables: 'SYLLABLES',
  sentences: 'SENTENCES',
};
//maliny rakieta morze balony fala mama tata lody zebra koty auto lampa buty ryba kawa kura maliny
export const TasksContext = React.createContext({
  stage: null,
  tasks: [],
  activeTask: null,
  results: [],
  activeIndex: null,
  loading: null,
  generateActiveTask: () => {},
  updateResult: () => {},
  changeTaskStatus: () => {},
  selectStage: () => {},
  updateActiveIndex: () => {},
});

const TasksProvider = ({ children }) => {
  const [stage, setStage] = useState(null);

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

  const selectStage = (stage) => {
    let stageName;
    console.log(stage, 'w SelectStage');
    if (stage === STAGE_TYPES.sentences) {
      setStage(STAGE_TYPES.sentences);
      stageName = stage;
    } else {
      setStage(STAGE_TYPES.syllables);
      stageName = stage;
    }
    generateTasks(stageName);
    if (stageName) addToLocalStorage('stage', stageName);

    // let stageInLocalStorageII = getFromLocalStorage('stage');
    // console.log(stageInLocalStorageII, 'w storage II yyy');
  };
  // const selectStage = (stage) => {
  //   let stageName;
  //   if (stage === STAGE_TYPES.sentences) {
  //     setStage(STAGE_TYPES.sentences);
  //     generateTasks(dataSentences);
  //     stageName = stage;
  //   } else {
  //     setStage(STAGE_TYPES.syllables);
  //     generateTasks(dataSyllables);
  //     stageName = stage;
  //   }
  //   if (stageName) addToLocalStorage('stage', stageName);

  //   let stageInLocalStorageII = getFromLocalStorage('stage');
  //   console.log(stageInLocalStorageII, 'w storage II yyy');
  // };

  useEffect(() => {
    let stageInLocalStorage = localStorage.getItem('stage');
    console.log(stageInLocalStorage, 'stageInLocalStorage, po odświeżeniu');
    if (stageInLocalStorage) {
      selectStage(stageInLocalStorage);
    }
    let activeIndexInLocalStorage = localStorage.getItem('activeIndex');
    console.log(
      activeIndexInLocalStorage,
      'activeIndexInLocalStorage, po odświeżeniu',
    );
    if (activeIndexInLocalStorage) {
      setActiveIndex(activeIndexInLocalStorage);
    } else setActiveIndex(0);
  }, []);

  // useEffect(() => {
  //   console.log('generuję zadania bp stan', stage);
  //   console.log(activeTask, 'actTask');
  //   // generateTasks();
  // }, [stage]);

  useEffect(() => {
    if (tasks.length > 0) {
      generateResults();
      // generateActiveTask(activeIndex);
    }
  }, [tasks]);

  const generateTasks = (newStage) => {
    let stage = newStage;
    let data;
    console.log('generowanie zadań');
    if (stage) {
      console.log(stage, 'generateTasks');
      if (stage === STAGE_TYPES.sentences) {
        data = dataSentences;
      } else {
        data = dataSyllables;
      }
      const max = level * amountTasksInLevel;
      const min = max - amountTasksInLevel;
      const tasks = data.slice(min, max);
      setTasks(tasks);
      generateActiveTask(tasks, activeIndex);
    } else return;
  };

  const generateActiveTask = (tasks, index) => {
    console.log(tasks, 'actTasks');
    console.log(index, 'i');
    const activeTask = tasks[index];
    console.log(activeTask, 'aT');
    activeTask.status = taskStatus.inProgress;
    setActiveTask(activeTask);
    setLoading(false);
  };

  const generateResults = () => {
    const results = tasks.map((task) => task.status);
    setResults([...results]);
  };

  const updateActiveIndex = () => {
    console.log(results);
    console.log('updateAInd');
    console.log(activeIndex, 'w state');
    setActiveIndex((activeIndex) => {
      if (
        activeIndex < amountTasksInLevel - 1 &&
        activeIndex < tasks.length - 1
      ) {
        activeIndex = activeIndex * 1 + 1;
        generateActiveTask(tasks, activeIndex);
        addToLocalStorage('activeIndex', activeIndex);
      } else {
        addToLocalStorage('activeIndex', 0);
        addToLocalStorage('level', level + 1);
        alert('koniec poziomu, gratulujemy ', level);
        setLevel((level) => level + 1);
      }

      return activeIndex;
    });
  };

  const changeTaskStatus = (isCorrect) => {
    if (isCorrect) {
      tasks[activeIndex].status = taskStatus.correctAnswer;
      console.log(tasks[activeIndex].status);
      console.log(taskStatus.correctAnswer);
      console.log(tasks, 'w change');
      setTasks([...tasks]);
    } else {
      tasks[activeIndex].status = taskStatus.incorrectAnswer;
      console.log(tasks[activeIndex].status);
      console.log(taskStatus.incorrectAnswer);
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
        selectStage,
        updateActiveIndex,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
