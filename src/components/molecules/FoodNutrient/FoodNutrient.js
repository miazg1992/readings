import { ProductsContext } from 'providers/ProductsProvider';
import { useContext, useEffect } from 'react';

const FoodNutrient = ({ foodNutrient: { name, amount, id, unitName } }) => {
  const { productsFromAPI, products } = useContext(ProductsContext);

  // useEffect(() => {
  //   // console.log('obliczenie witaminy', foodNutrient.id);
  //   productsFromAPI.map((product) => {
  //     for (const food of product.foodNutrients) {
  //       if (food.nutrient.id === id) {
  //         console.log('Pasuje witamina', name);
  //         console.log(food.amount, 'Ilość');
  //         console.log(food.nutrient.unitName, 'Jednostki');
  //       }
  //     }

  //     return product;
  //   });
  // }, [productsFromAPI]);

  return (
    <p>
      {/* Witamina z tabeli {id} {name} {amount} */}
      {name} {amount} {unitName}
    </p>
  );
};

export default FoodNutrient;
