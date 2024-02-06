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
import { downloadVitaminsByProductId } from 'helpers/downloadProductVitamins';
import FormFieldSelect from 'components/molecules/FormField/FormFieldSelect';

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

  const matchEnglishVersion = (name) => {
    availableProducts.forEach((product) => {
      if (product.namePL === name) {
        console.log(
          'trzeba pobrać ten produkt' + product.namePL + product.nameEN,
        );
        downloadVitaminsByProductId(product.fdcId);
      }
    });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    handleAddProduct(formValues);
    matchEnglishVersion(formValues.name);
  };

  // const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  // const URL = `https://api.nal.usda.gov/fdc/v1/foods?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;

  // useEffect(() => {
  //   axios
  //     .post(URL, query)
  //     .then((data) => {
  //       console.log(data);
  //       // setArticles(data.allArticles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // setError('Przepraszamy, nie mogliśmy pobrać artykułów');
  //     });
  // }, []);

  return (
    <Wrapper as="form" onSubmit={handleSubmitProduct}>
      <Title>Ile witamin ma dany produkt?</Title>
      {/* <FormFieldSelect
        label="Posiłek"
        name="meals"
        id="meals"
        type="select"
        // onChange={handleInputChange}
      ></FormFieldSelect> */}
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
      <Button type="submit" isBig>
        Dodaj produkt
      </Button>
    </Wrapper>
  );
};

export default AddProduct;
