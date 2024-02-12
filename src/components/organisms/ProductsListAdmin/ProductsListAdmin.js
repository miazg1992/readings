import { Title } from 'components/atoms/Title/Title';
import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  StyledList,
} from '../ProductsListAdmin/ProductsListAdmin.styles';
import ProductsListItemAdmin from 'components/molecules/ProductsListItemAdmin/ProductsListItemAdmin.js';
import { ProductsContext } from 'providers/ProductsProvider';
import { Button } from 'components/atoms/Button/Button';
// import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Input } from 'components/atoms/Input/Input';
import { AddProductToDB } from 'components/organisms/AddProductToDB/AddProductToDB';

const ProductsListAdmin = () => {
  const { foundProducts } = useContext(ProductsContext);
  console.log(foundProducts);
  return (
    <Wrapper>
      <Title>Lista Produktów</Title>
      <StyledList>
        {foundProducts.map(
          ({ allHighlightFields, description, fdcId, foodNutrients }) => (
            <>
              <ProductsListItemAdmin
                key={fdcId}
                name={allHighlightFields}
                description={description}
                id={fdcId}
                foodNutrients={foodNutrients}
              />
              <AddProductToDB
                namEN={allHighlightFields}
                description={description}
                fdcId={fdcId}
              ></AddProductToDB>
            </>
          ),
        )}
      </StyledList>
    </Wrapper>
  );
};

export default ProductsListAdmin;
