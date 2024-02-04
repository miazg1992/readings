import React, { useContext, useEffect } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './AddProduct.styles';
import { useForm } from 'hooks/useForm';
import { ProductsContext } from 'providers/ProductsProvider';
import { downloadVitaminsByProductName } from 'helpers/downloadProductVitamins';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import axios from 'axios';

const initialFormState = {
  name: '',
  amount: '',
  error: '',
};

const query = {
  query: 'milk',
  // dataType: ['Foundation', 'SR Legacy'],
  pageSize: 25,
  // pageNumber: 2,
  // sortBy: 'fdcId',
  sortOrder: 'asc',

  // brandOwner: 'Kar Nut Products Company',
  // tradeChannel: ['“CHILD_NUTRITION_FOOD_PROGRAMS”', '“GROCERY”'],
  // startDate: '2021-01-01',
  // endDate: '2021-12-30',
};

// const query = {
//   query: 'Cheddar cheese',
// };

const AddProduct = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const { availableProducts, handleAddProduct } = useContext(ProductsContext);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    handleAddProduct(formValues);
    downloadVitaminsByProductName(formValues.name);
  };

  // const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  // const URL = `https://api.nal.usda.gov/fdc/v1/foods?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;

  useEffect(() => {
    axios
      .post(URL, query)
      .then((data) => {
        console.log(data);
        // setArticles(data.allArticles);
      })
      .catch((err) => {
        console.log(err);
        // setError('Przepraszamy, nie mogliśmy pobrać artykułów');
      });
  }, []);

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitProduct}>
      <Title>Dodawanie produktu</Title>
      <Title>Wybierz z dostępnych </Title>
      {availableProducts.map((product) => (
        <p>
          {product.name} {product.fdcId}
        </p>
      ))}
      <FormField
        label="Nazwa produktu"
        name="name"
        id="product"
        onChange={handleInputChange}
      ></FormField>
      <FormField
        label="Ilość"
        name="amount"
        id="amount"
        onChange={handleInputChange}
      ></FormField>
      <Button type="submit">Dodaj produkt</Button>
    </ViewWrapper>
  );
};

export default AddProduct;
