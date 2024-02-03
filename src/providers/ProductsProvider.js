import React, { useState } from 'react';
// import { users as usersData } from 'data/users';

export const ProductsContext = React.createContext({
  products: [],
  witamins: [],
  availableProducts: [],
  foundProducts: [],
  handleAddProduct: () => {},
  deleteProduct: () => {},
  handleAddProductToAvailableProducts: () => {},
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);

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

  const handleFoundProducts = (name) => {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;

    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error('To nie jest odpowedź 200');
        } else {
          return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
        }
      })
      .then((json) => {
        const products = json;
        products.foods.forEach((product, index) => {});
        console.log(products.foods);
        setFoundProducts(products.foods);
        return products.foods;
      })
      //wykonuje gdy rozstrzygnięcie - odrzucona
      .catch((err) => console.log(err));
  };

  const handleAddProductToAvailableProducts = (values) => {
    console.log('admin dodaje produkt ');
    console.log(availableProducts);
    const newProduct = {
      name: values.name,
      fdcId: values.amount,
    };
    setAvailableProducts([newProduct, ...availableProducts]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        availableProducts,
        foundProducts,
        handleAddProduct,
        deleteProduct,
        handleAddProductToAvailableProducts,
        handleFoundProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
