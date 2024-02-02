import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './AddProductAdmin.styles';
import { useForm } from 'hooks/useForm';
import { DBProductsContext } from 'providers/DBProductsProvider';
import { downloadVitaminsByProductName } from 'helpers/downloadProductVitamins';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
  name: '',
  amount: '',
  error: '',
};

const AddProductAdmin = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const { handleAddProduct } = useContext(DBProductsContext);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    handleAddProduct(formValues);
    downloadVitaminsByProductName(formValues.name);
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

      <Button type="submit">Dodaj produkt do bazy</Button>
    </ViewWrapper>
  );
};

export default AddProductAdmin;
