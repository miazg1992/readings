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
import Navigation from 'components/organisms/Navigation/Navigation';
import DropdownCombobox from 'components/molecules/DropdownCombobox/DropdownCombobox';
import ComboBoxExample from 'components/molecules/Downshift/Downshift';

export const products = [];

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ProductsProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-product-admin" element={<Admin />}></Route>
                <Route path="/" element={<UserDashboard />}></Route>
                <Route path="/test1" element={<ComboBoxExample />}></Route>
              </Routes>
            </Wrapper>
          </ProductsProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
