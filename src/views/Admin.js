import AddProductAdmin from 'components/organisms/AddProductAdmin/AddProductAdmin';
import ProductsListAdmin from 'components/organisms/ProductsListAdmin/ProductsListAdmin';
import ProductsProvider from 'providers/ProductsProvider';
import React, { useContext } from 'react';
import { Wrapper } from './Admin.styles';

const Admin = () => {
  return (
    <Wrapper>
      <AddProductAdmin></AddProductAdmin>
      <ProductsListAdmin></ProductsListAdmin>
    </Wrapper>
  );
};

export default Admin;
