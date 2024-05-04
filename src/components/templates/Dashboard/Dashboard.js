import React, { useContext } from 'react';
import Task from 'components/templates/Task/Task';
import Monster from 'components/molecules/Monster/Monster';
import { Result, Results, Wrapper } from './Dashboard.styles';
import { TasksContext } from 'providers/TasksProvider';

const Dashboard = () => {
  const { results } = useContext(TasksContext);
  console.log(results, 'res');
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
      <Task />
    </Wrapper>
  );
};

export default Dashboard;
