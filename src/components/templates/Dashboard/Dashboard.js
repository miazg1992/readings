import React, { useContext } from 'react';
import Task from 'components/templates/Task/Task';
import Monster from 'components/molecules/Monster/Monster';
import { Result, Results, Wrapper } from './Dashboard.styles';
import { TasksContext } from 'providers/TasksProvider';
import StageOption from 'components/molecules/StageOption/StageOption';
import Navigation from 'components/organisms/Navigation/Navigation';

const Dashboard = () => {
  return (
    <Wrapper>
      <Navigation />
      <Monster />
    </Wrapper>
  );
};

export default Dashboard;
