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
    demand: 1000,
  },
  {
    name: 'Witamina E',
    id: 1109,
    amount: 0,
    unitName: 'mg',
    demand: 1000,
  },
  {
    name: 'Witamina B1 (Tiamina)',
    id: 1165,
    amount: 0,
    unitName: 'mg',
    demand: 1000,
  },
  {
    name: 'Witamina B2 (Ryboflawina)',
    id: 1166,
    amount: 0,
    unitName: 'mg',
    demand: 1000,
  },
  {
    name: 'Cynk',
    id: 1095,
    amount: 0,
    unitName: 'mg',
    demand: 1000,
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

  const handleAddProductsFromAPI = (product, fdcId, amount = '1') => {
    console.log(product, fdcId, amount);
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
          // ...json.foodNutrients,
        };
        console.log(newProduct, 'dodawany produkt');
        handleFoodNutrientsTotal(product);
        setProductsFromAPI([product, ...productsFromAPI]);
      })
      .catch((err) => console.log(err));
  };
  const handleFoodNutrientsTotal = (productInfo = { foodNutrients: [] }) => {
    // products.map((product) => {
    //   productsFromAPI.find((productFromAPI) =>
    //     productFromAPI.fdcId === product.fdcId);
    //     console.log("Zgadza się ID, trzeba sumować")
    //     return productFromAPI
    //   )}
    // )
    console.log(productInfo, 'productInfo');
    // foodNutrientsTotal.map((foodNutrient) => {
    //   // const products = productsFromAPI.filter(
    //   //   (product) => product.foodNutrients.id === foodNutrient.id,
    //   // );
    //   // productsFromAPI.map((product) => product.foodNutrients
    //   )
    //   console.log(products, 'handlerTotal');
    //   return products;
    // });
    const noweWitaminy = foodNutrientsTotal.map((foodNutrientTotal) => {
      let { name, id, amount, unitName, demand } = foodNutrientTotal;
      let element = { ...foodNutrientTotal };
      console.log(element, 'Element');

      for (const productNutrient of productInfo.foodNutrients) {
        if (id === productNutrient.nutrient.id) {
          // console.log('Pasuje witamina', name);
          // console.log(productNutrient.amount, 'Ilość');
          // console.log(productNutrient.nutrient.unitName, 'Jednostki');
          let counter = (amount += productNutrient.amount);
          amount = counter;

          element = {
            ...foodNutrientTotal,
            amount: counter,
          };
          console.log(element, 'z ifa');
          return element;
          // element = [...foodNutrientsTotal, newfoodNutrientTotal];
          // console.log(element, 'tabela');
          // return element;
        }
      }

      return element;
    });

    console.log(noweWitaminy, 'nowe witaminy');

    // productsFromAPI.map((product) => {
    //   // const sk = product.foodNutrients.find(
    //   //   (foodNutrient) => foodNutrient.nutrient.id === foodNutrient.id,
    //   // );
    //   // console.log(sk, 'SK');

    //   for (const food of product.foodNutrients) {
    //     // console.log(food, 'food');
    //     // console.log(food.nutrient, 'foodNutrient');
    //     if (food.nutrient.id === id) {
    //       console.log('Pasuje witamina', name);
    //       console.log(food.amount, 'Ilość');
    //       console.log(food.nutrient.unitName, 'Jednostki');
    //     }
    //   }

    // if (product.foodNutrients) {
    //   if (product.foodNutrients.nutrient.id === id) {
    //     console.log(
    //       product.foodNutrients.nutrient,
    //       'metoda kalkulująca witaminę',
    //     );
    //     const obliczenie = product.food;
    //     console.log(product.amount);
    //     return product.amount;
    //   }
    // }
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

// const handleFoodNutrientsTotal = (productInfo = { foodNutrients: [] }) => {
//   // products.map((product) => {
//   //   productsFromAPI.find((productFromAPI) =>
//   //     productFromAPI.fdcId === product.fdcId);
//   //     console.log("Zgadza się ID, trzeba sumować")
//   //     return productFromAPI
//   //   )}
//   // )
//   console.log('obliczenia witamin');
//   console.log(productInfo, 'productInfo');
//   // foodNutrientsTotal.map((foodNutrient) => {
//   //   // const products = productsFromAPI.filter(
//   //   //   (product) => product.foodNutrients.id === foodNutrient.id,
//   //   // );
//   //   // productsFromAPI.map((product) => product.foodNutrients
//   //   )
//   //   console.log(products, 'handlerTotal');
//   //   return products;
//   // });
//   const noweWitaminy = foodNutrientsTotal.map((foodNutrientTotal) => {
//     let { name, id, amount, unitName, demand } = foodNutrientTotal;
//     const element = [...foodNutrientTotal];
//     console.log(element);

//     for (const productNutrient of productInfo.foodNutrients) {
//       if (id === productNutrient.nutrient.id) {
//         console.log('Pasuje witamina', name);
//         console.log(productNutrient.amount, 'Ilość');
//         console.log(productNutrient.nutrient.unitName, 'Jednostki');
//         let counter = (amount += productNutrient.amount);
//         amount = counter;

//         const newfoodNutrientTotal = {
//           ...foodNutrientTotal,
//           amount: counter,
//         };
//         element = [...foodNutrientsTotal, newfoodNutrientTotal];
//         console.log(element, 'tabela');
//         return element;
//       }
//     }
//   });

//   console.log(noweWitaminy, 'nowe witaminy');

//   // productsFromAPI.map((product) => {
//   //   // const sk = product.foodNutrients.find(
//   //   //   (foodNutrient) => foodNutrient.nutrient.id === foodNutrient.id,
//   //   // );
//   //   // console.log(sk, 'SK');

//   //   for (const food of product.foodNutrients) {
//   //     // console.log(food, 'food');
//   //     // console.log(food.nutrient, 'foodNutrient');
//   //     if (food.nutrient.id === id) {
//   //       console.log('Pasuje witamina', name);
//   //       console.log(food.amount, 'Ilość');
//   //       console.log(food.nutrient.unitName, 'Jednostki');
//   //     }
//   //   }

//   // if (product.foodNutrients) {
//   //   if (product.foodNutrients.nutrient.id === id) {
//   //     console.log(
//   //       product.foodNutrients.nutrient,
//   //       'metoda kalkulująca witaminę',
//   //     );
//   //     const obliczenie = product.food;
//   //     console.log(product.amount);
//   //     return product.amount;
//   //   }
//   // }
//   setFoodNutrientsTotal(noweWitaminy);
// };
