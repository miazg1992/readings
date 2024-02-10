// import React, { useEffect } from 'react';

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
