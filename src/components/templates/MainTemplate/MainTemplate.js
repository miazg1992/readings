import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import {
  Header,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import TasksProvider from 'providers/TasksProvider';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h1>Czytankowo</h1>
          <p>Nauka czytania dla najmłodszych</p>
        </Header>
        <Navigation />
        <TasksProvider>{children}</TasksProvider>
      </Wrapper>
    </>
  );
};

export default MainTemplate;
