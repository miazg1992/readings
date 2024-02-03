import FormField from 'components/molecules/FormField/FormField';
import { Wrapper } from './AddProducyToDB.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem';
import { useForm } from 'hooks/useForm';
import { Button } from 'components/atoms/Button/Button';

export const AddProductToDB = ({ allHighlightFields, description, fdcId }) => {
  const { handleInputChange } = useForm;
  return (
    <Wrapper as="form">
      <FormField
        label="Nazwa po polsku"
        name="name"
        id="product"
        onChange={handleInputChange}
      ></FormField>
      <FormField
        onChange={console.log('Dodawanie do bazy')}
        label="Nazwa po polsku II"
        name="name"
        id="product"
      ></FormField>
      <Button type="submit">Dodaj do bazy danych</Button>
    </Wrapper>
  );
};
