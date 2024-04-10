import { Images, Results, Wrapper } from './TaskInfo.styles';
import question from 'assets/img/question.png';
import monster1 from 'assets/img/monster1_640.png';
import { Button } from 'components/atoms/Button/Button';
import { useContext } from 'react';
import { TasksContext } from 'providers/TasksProvider';
const TaskInfo = () => {
  const { checkAnswer, results } = useContext(TasksContext);
  return (
    <Wrapper>
      <Results>
        {results.map((result, index) => (
          <div key={index}></div>
        ))}
      </Results>
      <Images>
        <img src={question} alt="pytanie" />
        <img src={monster1} alt="uroczy potwór" />
      </Images>
    </Wrapper>
  );
};

export default TaskInfo;
