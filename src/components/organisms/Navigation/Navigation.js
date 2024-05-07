import React, { useContext } from 'react';
import {
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';
import syllables from 'assets/sylaby.jpg';
import sentences from 'assets/zdania.jpg';
import TasksProvider, {
  STAGE_TYPES,
  TasksContext,
} from 'providers/TasksProvider';

const Navigation = () => {
  const { selectStage } = useContext(TasksContext);
  return (
    <Wrapper>
      <StyledLink
        to="/syllables"
        onClick={() => selectStage(STAGE_TYPES.syllables)}
      >
        <img src={syllables}></img>
        <h2>Sylaby</h2>
      </StyledLink>
      <StyledLink
        to="/sentences"
        onClick={() => selectStage(STAGE_TYPES.sentences)}
      >
        <img src={sentences}></img>
        <h2>Czytam zdania</h2>
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
