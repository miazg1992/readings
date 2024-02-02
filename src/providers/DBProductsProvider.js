import React, { useState } from 'react';
// import { users as usersData } from 'data/users';

export const DBProductsContext = React.createContext({
  availableProducts: [],
  handleAddProduct: () => {},
  deleteProduct: () => {},
});

const DBProductsProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);

  const deleteProduct = (name) => {
    const filteredProducts = availableProducts.filter(
      (product) => product.name !== name,
    );
    setAvailableProducts(filteredProducts);
  };

  const handleAddProduct = (values) => {
    const newProduct = {
      name: values.name,
      fdcId: values.amount,
    };
    setAvailableProducts([newProduct, ...availableProducts]);
  };
  return (
    <DBProductsContext.Provider
      value={{
        availableProducts,
        handleAddProduct,
        deleteProduct,
      }}
    >
      {children}
    </DBProductsContext.Provider>
  );
};

export default DBProductsProvider;
