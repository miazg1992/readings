import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import {
  Header,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import TasksProvider from 'providers/TasksProvider';
// import Canvas from 'components/organisms/Canvas/Canvas';
import Animation from 'components/organisms/Animation/Animation';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Animation></Animation>
        <Header>
          <h1>Czytankowo</h1>
          <p>Nauka czytania dla najmłodszych</p>
        </Header>

        {/* <Navigation /> */}
        <TasksProvider>{children}</TasksProvider>
      </Wrapper>
    </>
  );
};

export default MainTemplate;
