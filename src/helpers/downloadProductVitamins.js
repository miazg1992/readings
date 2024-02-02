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

export const downloadVitaminsByProductId = (fdcId) => {
  // const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=flaxseed`;
  // const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=kale`;
  console.log(url);

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
      const products = json;
      //   products.foods.forEach((product, index) => {
      //     // console.log(product.foodNutrients.length, index);
      //     // console.log(product.description);
      //     // const description = product.description;
      //     // const opis = description.includes == 'raw' ? 'surowy' : 'inny';
      //     console.log(product);
      //   });
      console.log(products.foodNutrients);
      console.log(products);
      return products;
    })
    //wykonuje gdy rozstrzygnięcie - odrzucona
    .catch((err) => console.log(err));
};

export const downloadVitaminsByProductName = (name) => {
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
          console.log('czysty produkt');
          console.log(product);
        } else {
          console.log('produkt nie spłenia założeń');
          console.log(product);
        }
        // const description = product.description;
        // const opis = description.includes == 'raw' ? 'surowy' : 'inny';
      });

      return products;
    })
    //wykonuje gdy rozstrzygnięcie - odrzucona
    .catch((err) => console.log(err));
};
