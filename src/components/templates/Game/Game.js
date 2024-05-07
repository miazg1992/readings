import React, { useContext } from 'react';
import Task from 'components/templates/Task/Task';
import Monster from 'components/molecules/Monster/Monster';
import { Result, Results, Wrapper } from './Game.styles';
import { TasksContext } from 'providers/TasksProvider';

const Game = () => {
  const { results } = useContext(TasksContext);
  console.log(results, 'w game results');
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

export default Game;
