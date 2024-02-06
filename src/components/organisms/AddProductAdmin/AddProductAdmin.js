import React, { useContext, useEffect } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './AddProductAdmin.styles';
import { useForm } from 'hooks/useForm';
import { ProductsContext } from 'providers/ProductsProvider';
import { downloadVitaminsByProductName } from 'helpers/downloadProductVitamins';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
  name: '',
  error: '',
};

const AddProductAdmin = ({}) => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const {
    handleFoundProducts,
    handleAddProductToAvailableProducts,
    foundProducts,
  } = useContext(ProductsContext);

  // useEffect((name) => {
  //   const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z&query=${name}`;

  //   fetch(url)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw Error('To nie jest odpowedź 200');
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((json) => {
  //       const products = json;
  //       products.foods.forEach((product, index) => {
  //         console.log(product);
  //       });
  //       handleFoundProducts(products.foods);
  //     })
  //     //wykonuje gdy rozstrzygnięcie - odrzucona
  //     .catch((err) => console.log(err));
  //   console.log('Zmieniło się coś');
  // }, []);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    console.log(formValues);
    // const products = downloadVitaminsByProductName(formValues.name);
    console.log('Test foundProduct');
    handleFoundProducts(formValues.name);
    // handleAddProductToAvailableProducts(formValues);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitProduct}>
      <Title>Dodawanie produktu do bazy</Title>
      <FormField
        label="Nazwa produktu"
        name="name"
        id="product"
        onChange={handleInputChange}
      ></FormField>

      <Button type="submit">Wyszukaj produkt w bazie</Button>
    </ViewWrapper>
  );
};

export default AddProductAdmin;
