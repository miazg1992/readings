import { useContext } from 'react';
import { Wrapper } from './TaskContent.styles';
import { TasksContext } from 'providers/TasksProvider';
import TaskInfo from 'components/molecules/TaskInfo/TaskInfo';
export const TaskContent = () => {
  const { activeTask } = useContext(TasksContext);
  return (
    <Wrapper>
      {activeTask ? <img src={`${activeTask.img}`} alt="" /> : null}
      <TaskInfo />
    </Wrapper>
  );
};
