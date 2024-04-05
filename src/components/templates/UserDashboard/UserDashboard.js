import React from 'react';
import Task from 'components/templates/Task/Task';
import Monster from 'components/molecules/Monster/Monster';
import { Wrapper } from './UserDashboard.styles';

const UserDashboard = () => {
  return (
    <Wrapper>
      <Task />
      <Monster />
    </Wrapper>
  );
};

export default UserDashboard;
