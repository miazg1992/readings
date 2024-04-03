import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import {
  Header,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h1>Nowa aplikacja</h1>
          <p>Każdego dnia uczysz się więcej</p>
        </Header>
        <Navigation />
        {children}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
