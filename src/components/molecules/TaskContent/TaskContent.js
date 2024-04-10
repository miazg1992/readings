import { useContext } from 'react';
import { ImgWrapper, Wrapper } from './TaskContent.styles';
import { TasksContext } from 'providers/TasksProvider';
import TaskInfo from 'components/molecules/TaskInfo/TaskInfo';
import { Button } from 'components/atoms/Button/Button';
export const TaskContent = () => {
  const { activeTask } = useContext(TasksContext);
  return (
    <Wrapper>
      <ImgWrapper>
        {activeTask ? <img src={`${activeTask.img}`} alt="" /> : null}
      </ImgWrapper>

      <TaskInfo />
    </Wrapper>
  );
};
