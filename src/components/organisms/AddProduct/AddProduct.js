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
  const { formValues, handleInputChange, handleThrowError, handleClearForm } =
    useForm(initialFormState);
  const {
    products,
    availableProducts,
    productFromAPI,
    handleAddProduct,
    handleAddProductsFromAPI,
  } = useContext(ProductsContext);

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
          handleAddProductsFromAPI(product, fdcId);
          return product;
        })
        .catch((err) => console.log(err));
    }
  }, [products]);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (formValues.name) {
      const name = formValues.name.toString().toLowerCase();
      const product = findProductInAvailableProducts(name);
      if (product) {
        const { fdcId } = product;
        handleAddProduct(formValues, fdcId);
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
      <FormField
        label="Nazwa produktu"
        name="name"
        id="product"
        onChange={handleInputChange}
        value={formValues.name}
      ></FormField>
      <FormField
        label="Ilość"
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

// import React, { useContext, useEffect } from 'react';
// import { Title } from 'components/atoms/Title/Title';
// import FormField from 'components/molecules/FormField/FormField';
// import { Button } from 'components/atoms/Button/Button';
// import { Wrapper } from './AddProduct.styles';
// import { useForm } from 'hooks/useForm';
// import { ProductsContext } from 'providers/ProductsProvider';
// import { downloadVitaminsByProductName } from 'helpers/downloadProductVitamins';
// import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
// import axios from 'axios';
// import { downloadVitaminsByProductId as downloadFoodNutrientsByProductId } from 'helpers/downloadProductVitamins';
// import FormFieldSelect from 'components/molecules/FormField/FormFieldSelect';

// const initialFormState = {
//   name: '',
//   amount: '',
//   error: '',
// };

// const query = {
//   query: 'milk',
//   // dataType: ['Foundation', 'SR Legacy'],
//   pageSize: 25,
//   // pageNumber: 2,
//   // sortBy: 'fdcId',
//   sortOrder: 'asc',

//   // brandOwner: 'Kar Nut Products Company',
//   // tradeChannel: ['“CHILD_NUTRITION_FOOD_PROGRAMS”', '“GROCERY”'],
//   // startDate: '2021-01-01',
//   // endDate: '2021-12-30',
// };

// // const query = {
// //   query: 'Cheddar cheese',
// // };

// const AddProduct = () => {
//   const { formValues, handleInputChange, handleThrowError, handleClearForm } =
//     useForm(initialFormState);
//   const { availableProducts, handleAddProduct, handleAddProductsFromAPI } =
//     useContext(ProductsContext);

//   // const getFdcId = (name) => {
//   //   const product = availableProducts.find(
//   //     (product) => product.namePL === name,
//   //   );
//   //   return product.fdcId;
//   // };

//   const findProductInAvailableProducts = (name) => {
//     const product = availableProducts.find(
//       (product) => product.namePL === name,
//     );
//     return product;
//   };

//   const handleSubmitProduct = (e) => {
//     e.preventDefault();
//     if (formValues.name) {
//       const name = formValues.name.toString().toLowerCase();
//       const product = findProductInAvailableProducts(name);
//       if (product) {
//         const { fdcId } = product;
//         const productFromAPI = downloadFoodNutrientsByProductId(fdcId);
//         console.log(productFromAPI);
//         handleAddProduct(formValues, fdcId);
//         handleAddProductsFromAPI(productFromAPI, fdcId);
//         console.log('dodaję produkt do zjedzonych');
//         handleClearForm(initialFormState);
//         console.log(formValues);
//       } else {
//         handleThrowError(
//           'Podany produkt nie istnieje w naszej bazie. Spróbuj wprowadzić inną nazwę...',
//         );
//       }
//     } else {
//       handleThrowError('Podaj nazwę szukanego produktu');
//     }
//   };

//   // const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
//   // const URL = `https://api.nal.usda.gov/fdc/v1/foods?api_key=${process.env.REACT_APP_FDC_TOKEN}`;
//   const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FDC_TOKEN}`;

//   // useEffect(() => {
//   //   axios
//   //     .post(URL, query)
//   //     .then((data) => {
//   //       console.log(data);
//   //       // setArticles(data.allArticles);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       // setError('Przepraszamy, nie mogliśmy pobrać artykułów');
//   //     });
//   // }, []);

//   return (
//     <Wrapper as="form" onSubmit={handleSubmitProduct}>
//       <Title>Ile witamin ma dany produkt?</Title>
//       {/* <FormFieldSelect
//         label="Posiłek"
//         name="meals"
//         id="meals"
//         type="select"
//         // onChange={handleInputChange}
//       ></FormFieldSelect> */}
//       <FormField
//         label="Nazwa produktu"
//         name="name"
//         id="product"
//         onChange={handleInputChange}
//         value={formValues.name}
//       ></FormField>
//       <FormField
//         label="Ilość"
//         name="amount"
//         id="amount"
//         onChange={handleInputChange}
//         value={formValues.amount}
//       ></FormField>
//       <Button type="submit">Dodaj produkt</Button>
//       {formValues.error ? <p>{formValues.error}</p> : null}
//     </Wrapper>
//   );
// };

// export default AddProduct;
