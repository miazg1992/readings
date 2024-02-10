import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import {
  Header,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import { Input } from 'components/atoms/Input/Input';
// import bg from './assets/bg.svg';
import ww from 'assets/ww.svg';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h1>Kalkulator Witamin</h1>
          <p>Zadbaj o swoje zdrowie już dziś</p>
        </Header>
        <Navigation />
        {children}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
