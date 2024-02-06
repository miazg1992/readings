import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './App.styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UserDashboard from 'components/templates/UserDashboard/UserDashboard';
import AddProduct from 'components/organisms/AddProduct/AddProduct';
import Admin from 'views/Admin';
import ProductsList from 'components/organisms/ProductsList/ProductsList';
// import Dashboard from 'views/Dashboard';
import ProductsProvider from 'providers/ProductsProvider';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import Navigation from 'components/organisms/Navigation/Navigation';

export const products = [
  {
    name: 'marchewka',
    amount: 50,
    id: 1,
  },
  {
    name: 'groch',
    amount: 20,
    id: 3,
  },
];

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ProductsProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-product" element={<UserDashboard />}></Route>
                <Route path="/add-product-admin" element={<Admin />}></Route>
                <Route
                  path="/"
                  element={<ProductsList products={products} />}
                ></Route>
              </Routes>
            </Wrapper>
          </ProductsProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
