import React, { useState } from 'react';
// import { users as usersData } from 'data/users';
import { downloadVitaminsByProductId } from 'helpers/downloadProductVitamins';

const data = [
  { name: 'Pomarańcza', fdcId: '2344665' },
  { name: 'Truskawki', fdcId: 'sss' },
  { name: 'Pomidor', fdcId: 'sss' },
  { name: 'Pietruszka', fdcId: 'sss' },
  { name: 'Siemię lniane', fdcId: '2339341' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Cytryna', fdcId: 'sss' },
  { name: 'Chleb bezglutenowy', fdcId: '174099' },
  { name: 'Ziemniaki gotowane', fdcId: '2344879' },
  { name: 'Jabłko', fdcId: '2124902' },
  { name: 'Marchew, surowa', fdcId: '2345173' },
  // marchew 170393
  { name: 'Mleko ryżowe', fdcId: '2340793' },
  { name: 'Mleko sojowe', fdcId: '2340784' },
];

export const ProductsContext = React.createContext({
  products: [],
  availableProducts: [],
  foundProducts: [],
  foodNutrientsTotal: [],
  handleAddProduct: () => {},
  deleteProduct: () => {},
  handleAddProductToAvailableProducts: () => {},
  handleAddProductsFromAPI: () => {},
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([
    {
      description: 'niby opis mleka',
      nameEN: 'milk',
      namePL: 'mleko',
      fdcId: '2340794',
    },
    {
      description: 'niby opis chleb',
      nameEN: 'chleb',
      namePL: 'chleb bezglutenowy',
      fdcId: '174099',
    },
    {
      description: 'jabłko opis',
      nameEN: 'jabłko',
      namePL: 'jabłko',
      fdcId: '2124902',
    },
    {
      description: 'pomarańcz',
      nameEN: 'pomarańcz',
      namePL: 'pomarańcz',
      fdcId: '2344665',
    },
  ]);
  const [foundProducts, setFoundProducts] = useState([]);
  const [productsFromAPI, setProductsFromAPI] = useState([]);
  const [foodNutrientsTotal, setFoodNutrientsTotal] = useState([
    {
      name: 'Witamina C',
      id: 1162,
      amount: 0,
      demand: 1000,
    },
    {
      name: 'Kaloryczność',
      id: 1008,
      amount: 0,
      demand: 2000,
    },
  ]);

  const deleteProduct = (name) => {
    const filteredProducts = products.filter(
      (product) => product.name !== name,
    );
    setProducts(filteredProducts);
  };

  const handleAddProduct = (values, id) => {
    const newProduct = {
      name: values.name,
      amount: values.amount,
      fdcId: id,
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
  };

  const handleAddProductsFromAPI = (product, fdcId) => {
    const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error('To nie jest odpowedź 200');
        } else {
          return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
        }
      })
      .then((json) => {
        const product = json;
        const newProduct = {
          fdcId: json.fdcId,
          foodNutrients: json.foodNutrients,
        };
        console.log(newProduct, 'dodawany produkt');
        setProductsFromAPI([product, ...productsFromAPI]);
      })
      .catch((err) => console.log(err));
  };
  const handleFoodNutrientsTotal = () => {
    // products.map((product) => {
    //   productsFromAPI.find((productFromAPI) =>
    //     productFromAPI.fdcId === product.fdcId);
    //     console.log("Zgadza się ID, trzeba sumować")
    //     return productFromAPI
    //   )}
    // )
    console.log('obliczenia witamin');
    // foodNutrientsTotal.map((foodNutrient) => {
    //   // const products = productsFromAPI.filter(
    //   //   (product) => product.foodNutrients.id === foodNutrient.id,
    //   // );
    //   // productsFromAPI.map((product) => product.foodNutrients
    //   )
    //   console.log(products, 'handlerTotal');
    //   return products;
    // });
    setFoodNutrientsTotal([
      {
        name: 'Witamina C',
        id: 1162,
        amount: 55,
        demand: 1000,
      },
      {
        name: 'Kaloryczność',
        id: 1008,
        amount: 88,
        demand: 2000,
      },
    ]);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        availableProducts,
        foundProducts,
        productsFromAPI,
        foodNutrientsTotal,
        handleAddProduct,
        deleteProduct,
        handleAddProductToAvailableProducts,
        handleFoundProducts,
        handleAddProductsFromAPI,
        handleFoodNutrientsTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
