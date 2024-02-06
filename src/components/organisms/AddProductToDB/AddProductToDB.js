import FormField from 'components/molecules/FormField/FormField';
import { Wrapper } from './AddProducyToDB.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem';
import { useForm } from 'hooks/useForm';
import { Button } from 'components/atoms/Button/Button';
import { useContext, useEffect } from 'react';
import { ProductsContext } from 'providers/ProductsProvider';

const initialFormState = {
  name: '',
};

export const AddProductToDB = ({ nameEN, description, fdcId }) => {
  const { handleAddProductToAvailableProducts } = useContext(ProductsContext);
  const { formValues, handleInputChange } = useForm(initialFormState);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (formValues.name) {
      handleAddProductToAvailableProducts({
        nameEN: nameEN,
        description: description,
        name: formValues.name,
        fdcId: fdcId,
      });
      console.log(
        `Dodawanie do bazy danych ${nameEN}${description} ${fdcId} ${formValues.name}`,
      );
    }
  };

  return (
    <Wrapper as="form" onSubmit={handleSubmitProduct}>
      <FormField
        label="Nazwa po polsku"
        name="name"
        value={formValues.name}
        id="product"
        onChange={handleInputChange}
      ></FormField>
      <Button type="submit">Dodaj do bazy danych</Button>
    </Wrapper>
  );
};
