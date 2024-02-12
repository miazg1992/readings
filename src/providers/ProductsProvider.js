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

const initialAvailableProducts = [
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
];

const initialFoodNutrientsTotal = [
  {
    name: 'Kaloryczność',
    id: 1008,
    amount: 0,
    unitName: 'kcal',
    demand: 2000,
  },
  {
    name: 'Białko',
    id: 1003,
    amount: 0,
    unitName: 'g',
    demand: 1000,
  },

  {
    name: 'Tłuszcze',
    id: 1004,
    amount: 0,
    unitName: 'g',
    demand: 1000,
  },
  {
    name: 'Węglowodany',
    id: 1005,
    amount: 0,
    unitName: 'g',
    demand: 1000,
  },
  {
    name: 'Cukry ',
    id: 2000,
    amount: 0,
    unitName: 'g',
    demand: 1000,
  },
  {
    name: 'Witamina C',
    id: 1162,
    amount: 0,
    unitName: 'mg',
    demand: 80,
  },
  {
    name: 'Witamina E',
    id: 1109,
    amount: 0,
    unitName: 'mg',
    demand: 12,
  },
  {
    name: 'Witamina B1 (Tiamina)',
    id: 1165,
    amount: 0,
    unitName: 'mg',
    demand: 1.1,
  },
  {
    name: 'Witamina B2 (Ryboflawina)',
    id: 1166,
    amount: 0,
    unitName: 'mg',
    demand: 1.4,
  },
  {
    name: 'Cynk',
    id: 1095,
    amount: 0,
    unitName: 'mg',
    demand: 10,
  },
];

export const ProductsContext = React.createContext({
  products: [],
  availableProducts: [],
  foundProducts: [],
  foodNutrientsTotal: initialFoodNutrientsTotal,
  productsFromAPI: [],
  handleAddProduct: () => {},
  deleteProduct: () => {},
  handleAddProductToAvailableProducts: () => {},
  handleAddProductsFromAPI: () => {},
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(
    initialAvailableProducts,
  );
  const [foundProducts, setFoundProducts] = useState([]);
  const [productsFromAPI, setProductsFromAPI] = useState([]);
  const [foodNutrientsTotal, setFoodNutrientsTotal] = useState(
    initialFoodNutrientsTotal,
  );

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
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;
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
        return products.foods;
      })
      .catch((err) => console.log(err));
  };

  const handleAddProductToAvailableProducts = (values) => {
    const newProduct = {
      description: values.description,
      nameEN: values.description,
      namePL: values.name,
      fdcId: values.fdcId,
    };
    setAvailableProducts([newProduct, ...availableProducts]);
  };

  const handleAddProductsFromAPI = (product, fdcId, amount = '1') => {
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
        const arr = [...json.foodNutrients];

        const newProduct = {
          fdcId: json.fdcId,
          amount: amount,
          foodNutrients: json.foodNutrients,
        };
        handleFoodNutrientsTotal(product);
        setProductsFromAPI([product, ...productsFromAPI]);
      })
      .catch((err) => console.log(err));
  };
  const handleFoodNutrientsTotal = (productInfo = { foodNutrients: [] }) => {
    const noweWitaminy = foodNutrientsTotal.map((foodNutrientTotal) => {
      let { id, amount } = foodNutrientTotal;
      let element = { ...foodNutrientTotal };

      for (const productNutrient of productInfo.foodNutrients) {
        if (id === productNutrient.nutrient.id) {
          let counter = (amount += productNutrient.amount);
          amount = counter;

          element = {
            ...foodNutrientTotal,
            amount: counter,
          };
          return element;
        }
      }

      return element;
    });

    setFoodNutrientsTotal(noweWitaminy);
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
