import React, { useState } from 'react';
// import { users as usersData } from 'data/users';

export const ProductsContext = React.createContext({
  products: [],
  witamins: [],
  allProducts: [],
  handleAddProduct: () => {},
  deleteProduct: () => {},
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (name) => {
    const filteredProducts = products.filter(
      (product) => product.name !== name,
    );
    setProducts(filteredProducts);
  };

  const handleAddProduct = (values) => {
    const newProduct = {
      name: values.name,
      amount: values.amount,
    };
    setProducts([newProduct, ...products]);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        handleAddProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
