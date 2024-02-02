import AddProductAdmin from 'components/organisms/AddProductAdmin/AddProductAdmin';
import ProductsListAdmin from 'components/organisms/ProductsListAdmin/ProductsListAdmin';
import ProductsProvider from 'providers/ProductsProvider';
import React, { useContext } from 'react';

const Admin = () => {
  return (
    <>
      <AddProductAdmin></AddProductAdmin>
      <ProductsListAdmin></ProductsListAdmin>
    </>
  );
};

export default Admin;
