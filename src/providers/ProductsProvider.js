import React, { useState } from 'react';
// import { users as usersData } from 'data/users';
import { downloadVitaminsByProductId } from 'helpers/downloadProductVitamins';

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
    // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;

    // fetch(url)
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       throw Error('To nie jest odpowedź 200');
    //     } else {
    //       return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
    //     }
    //   })
    //   .then((json) => {
    //     const products = json;
    //     products.foods.forEach((product, index) => {});
    //     console.log(products.foods);
    //     setFoundProducts(products.foods, ...foundProducts);
    //     return products.foods;
    //   })
    //   //wykonuje gdy rozstrzygnięcie - odrzucona
    //   .catch((err) => console.log(err));
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;
    // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=kale`;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error('To nie jest odpowedź 200');
        } else {
          return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
        }
      })
      .then((json) => {
        const products = json.foods;
        setFoundProducts(products, ...foundProducts);

        console.log(products.foods);
        // handleFoundProducts(products.foods);

        return products.foods;
      })
      .catch((err) => console.log(err));
  };

  const handleAddProductToAvailableProducts = (values) => {
    console.log('admin dodaje produkt ');
    console.log(availableProducts);
    const newProduct = {
      description: values.description,
      nameEN: values.description,
      namePL: values.name,
      fdcId: values.fdcId,
    };
    setAvailableProducts([newProduct, ...availableProducts]);
    console.log(availableProducts);
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
