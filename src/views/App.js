import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './App.styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import Game from 'components/templates/Game/Game';
import Modal from 'components/organisms/Modal/Modal.js';

export const products = [];

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Modal />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/syllables" element={<Game />}></Route>
              <Route path="/sentences" element={<Game />}></Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
