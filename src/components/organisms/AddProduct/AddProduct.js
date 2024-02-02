import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './AddProduct.styles';
import { useForm } from 'hooks/useForm';
import { ProductsContext } from 'providers/ProductsProvider';
import { downloadVitaminsByProductName } from 'helpers/downloadProductVitamins';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
  name: '',
  amount: '',
  error: '',
};

const AddProduct = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const { handleAddProduct } = useContext(ProductsContext);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    handleAddProduct(formValues);
    downloadVitaminsByProductName(formValues.name);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitProduct}>
      <Title>Dodawanie produktu</Title>
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
