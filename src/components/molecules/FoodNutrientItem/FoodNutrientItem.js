import { ProductsContext } from 'providers/ProductsProvider';
import { useContext, useEffect } from 'react';
import { FoodNutrientProgress } from './FoodNutrientItem.styles';

const FoodNutrientItem = ({
  foodNutrient: { name, amount, id, unitName, demand },
}) => {
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
  const demandPercent = ((amount / demand) * 100).toFixed(2);

  return (
    <>
      <p>
        {name} {amount} {unitName} {demandPercent}%
      </p>
      <FoodNutrientProgress value={amount} max={demand}></FoodNutrientProgress>
    </>
  );
};

export default FoodNutrientItem;
