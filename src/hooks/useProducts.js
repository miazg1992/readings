import React, { useEffect } from 'react';
import axios from 'axios';

// export const useDownloadFromAPI = (id) => {

//   useEffect(() => {
//     console.log(
//       'zmieniła się lista produków powinniśmy zaćżąć pobieranie z API',
//     );
//   }, [products]);

//   const fdcId = '174099';
//   const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;
//   // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=kale`;
//   // console.log(fdcId);

//   fetch(url) //obietnica - oczekujący (pending)
//     // obietnica - rozstrzygnieta (spełnione | odrzucone)
//     //wykonuje się then - pozytywnie
//     .then((response) => {
//       if (response.status !== 200) {
//         throw Error('To nie jest odpowedź 200');
//       } else {
//         return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
//       }
//     })
//     .then((json) => {
//       const product = json;
//       //   products.foods.forEach((product, index) => {
//       //     // console.log(product.foodNutrients.length, index);
//       //     // console.log(product.description);
//       //     // const description = product.description;
//       //     // const opis = description.includes == 'raw' ? 'surowy' : 'inny';
//       //     console.log(product);
//       //   });
//       console.log(product.foodNutrients);
//       console.log(product);
//       return product;
//     })
//     //wykonuje gdy rozstrzygnięcie - odrzucona
//     .catch((err) => console.log(err));
// };

export const useProducts = () => {
  //   const findProductById = async (fdcId, amount) => {
  //     const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;

  //     console.log(amount, 'ilość');
  //     console.log(url);
  //     // try {
  //     //   const newProduct = await axios.get(url);
  //     //   console.log(newProduct);
  //     //   return newProduct;
  //     // } catch (err) {
  //     //   console.log(err);
  //     // }

  //     //     const newProduct = {
  //     //       fdcId: json.fdcId,
  //     //       amount: amount,
  //     //       foodNutrients: json.foodNutrients,
  //     //     };

  //     //     return newProduct;
  //   };

  const findProductById = (fdcId, amount) => {
    const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;

    console.log(amount, 'ilość');
    console.log(url);
    // try {
    //   const newProduct = await axios.get(url);
    //   console.log(newProduct);
    //   return newProduct;
    // } catch (err) {
    //   console.log(err);
    // }

    //     const newProduct = {
    //       fdcId: json.fdcId,
    //       amount: amount,
    //       foodNutrients: json.foodNutrients,
    //     };

    //     return newProduct;
  };
  const findProduct = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, { searchPhrase });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  //   const findProductById = (fdcId, amount) => {
  //     const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;

  //     console.log(amount, 'ilość');
  //     fetch(url)
  //       .then((response) => {
  //         if (response.status !== 200) {
  //           throw Error('To nie jest odpowedź 200');
  //         } else {
  //           return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
  //         }
  //       })
  //       .then((json) => {
  //         const product = json;
  //         const arr = [...json.foodNutrients];
  //         console.log(arr);

  //         const newProduct = {
  //           fdcId: json.fdcId,
  //           amount: amount,
  //           foodNutrients: json.foodNutrients,
  //         };

  //         return newProduct;
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return findProductById;
};
