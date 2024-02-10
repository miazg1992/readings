import React from 'react';

import { ProductsContext } from 'providers/ProductsProvider';
import { useContext } from 'react';

export const downloadFoodNutrientsByProductId = (fdcId) => {
  const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;
  // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=kale`;
  console.log(fdcId);

  fetch(url) //obietnica - oczekujący (pending)
    // obietnica - rozstrzygnieta (spełnione | odrzucone)
    //wykonuje się then - pozytywnie
    .then((response) => {
      if (response.status !== 200) {
        throw Error('To nie jest odpowedź 200');
      } else {
        return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
      }
    })
    .then((json) => {
      const product = json;
      //   products.foods.forEach((product, index) => {
      //     // console.log(product.foodNutrients.length, index);
      //     // console.log(product.description);
      //     // const description = product.description;
      //     // const opis = description.includes == 'raw' ? 'surowy' : 'inny';
      //     console.log(product);
      //   });
      console.log(product.foodNutrients);
      console.log(product);
      return product;
    })

    //wykonuje gdy rozstrzygnięcie - odrzucona
    .catch((err) => console.log(err));
};

export const downloadVitaminsByProductName = (name) => {
  // const { handleFoundProducts } = useContext(ProductsContext);
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;
  // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=kale`;

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
      products.foods.forEach((product, index) => {
        // console.log(product.foodNutrients.length, index);
        // console.log(product.description);
        // console.log(product);
        // console.log(product.ingredients);
        // if (
        //   !product.ingredients &&
        //   product.description.toLowerCase() === name.toLowerCase()
        // )
        if (!product.ingredients) {
          // console.log('czysty produkt');
          // console.log(product);
        } else {
          // console.log('produkt nie spłenia założeń');
          // console.log(product);
        }
        // const description = product.description;
        // const opis = description.includes == 'raw' ? 'surowy' : 'inny';
      });
      console.log(products.foods);
      // handleFoundProducts(products.foods);

      return products.foods;
    })
    //wykonuje gdy rozstrzygnięcie - odrzucona
    .catch((err) => console.log(err));
};
