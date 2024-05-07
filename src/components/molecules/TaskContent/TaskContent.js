import { useContext } from 'react';
import { ImgWrapper, Wrapper } from './TaskContent.styles';
import { TasksContext } from 'providers/TasksProvider';
import { Button } from 'components/atoms/Button/Button';
import { TaskStatus } from '../TaskStatus/TaskStatus';
export const TaskContent = () => {
  const { activeIndex, activeTask, checkAnswer, loading, results } =
    useContext(TasksContext);

  return (
    <Wrapper>
      <ImgWrapper>
        {activeTask ? <img src={`${activeTask.img}`} alt="" /> : null}
      </ImgWrapper>

      <TaskStatus taskStatus={results[activeIndex]}></TaskStatus>
    </Wrapper>
  );
};
