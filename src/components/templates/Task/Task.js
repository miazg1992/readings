import React, { useContext, useEffect, useState } from 'react';
import { TaskContent } from 'components/molecules/TaskContent/TaskContent';

import DnD from 'components/organisms/DnD/DnD';
import { Wrapper } from './Task.styles';
import { TasksContext } from 'providers/TasksProvider';
import { Button } from 'components/atoms/Button/Button';
const Task = () => {
  const { tasks, activeTask } = useContext(TasksContext);

  return (
    <Wrapper>
      <TaskContent></TaskContent>
      
      <DnD activeTask={activeTask}></DnD>
    </Wrapper>
  );
};

export default Task;
