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
import { downloadVitaminsByProductId as downloadFoodNutrientsByProductId } from 'helpers/downloadProductVitamins';
import FormFieldSelect from 'components/molecules/FormField/FormFieldSelect';
import ComboBox from 'components/molecules/ComboBox/ComboBox';

const initialFormState = {
  name: '',
  amount: '',
  error: '',
};

const query = {
  query: 'milk',
  pageSize: 25,
  sortOrder: 'asc',
};

// const query = {
//   query: 'Cheddar cheese',
// };

const AddProduct = () => {
  const {
    formValues,
    handleInputChange,
    handleComboboxChange,
    handleThrowError,
    handleClearForm,
  } = useForm(initialFormState);
  const {
    products,
    availableProducts,
    productFromAPI,
    handleAddProduct,
    handleAddProductsFromAPI,
  } = useContext(ProductsContext);

  const getInputValue = (value) => {
    console.log(value, 'inputValue przekazana do AddProd');
    handleComboboxChange(value);
  };

  const findProductInAvailableProducts = (name) => {
    const product = availableProducts.find(
      (product) => product.namePL === name,
    );
    return product;
  };

  useEffect(() => {
    const length = products.length;
    if (length > 0) {
      const fdcId = products[0].fdcId;
      const amount = products[0].amount;
      const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=z3wgSSS9b0SU2IegGYbDKhBjnsUbSQUroSZblG6z`;
      console.log(url);

      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw Error('To nie jest odpowedź 200');
          } else {
            return response.json(); //Fetch API = json() z body wyodrębnia json i parsuje na obiekt
          }
        })
        .then((json) => {
          const product = json;
          handleAddProductsFromAPI(product, fdcId, amount);
          return product;
        })
        .catch((err) => console.log(err));
    }
  }, [products]);

  const validationName = () => {
    const name = formValues.name.toString().toLowerCase();
    return name;
  };

  const validationAmount = () => {
    let amount;
    if (formValues.amount) {
      amount = parseInt(formValues.amount);
      if (isNaN(amount)) {
        console.log('nan');
        amount = 100;
      }
    } else {
      amount = 100;
    }
    return amount;
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (formValues.name) {
      const name = validationName();
      const amount = validationAmount();
      const product = findProductInAvailableProducts(name);
      if (product) {
        const { fdcId } = product;
        handleAddProduct({ name, amount }, fdcId);
        handleClearForm(initialFormState);
      } else {
        handleThrowError(
          'Podany produkt nie istnieje w naszej bazie. Spróbuj wprowadzić inną nazwę...',
        );
      }
    } else {
      handleThrowError('Podaj nazwę szukanego produktu');
    }
  };

  // const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  // const URL = `https://api.nal.usda.gov/fdc/v1/foods?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;

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
      <ComboBox
        availableProducts={availableProducts}
        getInputValue={getInputValue}
        onChange={handleComboboxChange}
        // onChange={handleInputChange}
        value={formValues.name}
        name="name"
      />
      {/* <FormField
        label="Nazwa produktu"
        name="name"
        id="product"
        onChange={handleInputChange}
        value={formValues.name}
      ></FormField> */}
      <FormField
        label="Ilość [g]"
        name="amount"
        id="amount"
        onChange={handleInputChange}
        value={formValues.amount}
      ></FormField>
      <Button type="submit">Dodaj produkt</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </Wrapper>
  );
};

export default AddProduct;
