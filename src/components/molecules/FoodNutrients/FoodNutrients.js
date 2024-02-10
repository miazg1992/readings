import { ProductsContext } from 'providers/ProductsProvider';
import { useContext } from 'react';

export const FoodNutrients = () => {
  const { productsFromAPI } = useContext(ProductsContext);
  return productsFromAPI.map((product) => <p> {product.fdcId}</p>);
};
