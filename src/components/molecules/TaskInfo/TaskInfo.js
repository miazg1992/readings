import { Images, Result, Results, Wrapper } from './TaskInfo.styles';
import question from 'assets/img/question.png';
import monster1 from 'assets/img/monster-blue.png';
import { Button } from 'components/atoms/Button/Button';
import { useContext } from 'react';
import { TasksContext } from 'providers/TasksProvider';
import { TaskStatus } from 'components/molecules/TaskStatus/TaskStatus';
const TaskInfo = () => {
  const { checkAnswer, results, activeIndex } = useContext(TasksContext);
  return (
    <Wrapper>
      <Results>
        {results.map((result, index) => (
          <Result
            key={index}
            $isCorrect={result === 'CORRECTANSWER' ? true : false}
          ></Result>
        ))}
      </Results>
      <TaskStatus taskStatus={results[activeIndex]}>
        {/* <img src={monster} alt="uroczy potwór" /> */}

        <img src={question} alt="" />
      </TaskStatus>
    </Wrapper>
  );
};

export default TaskInfo;
