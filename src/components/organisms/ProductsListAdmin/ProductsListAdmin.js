import { Title } from 'components/atoms/Title/Title';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledList } from '../ProductsList/ProductsList.styles';
import ProductsListItemAdmin from 'components/molecules/ProductsListItemAdmin/ProductsListItemAdmin.js';
import { ProductsContext } from 'providers/ProductsProvider';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Input } from 'components/atoms/Input/Input';
import { AddProductToDB } from 'components/organisms/AddProductToDB/AddProductToDB';

const ProductsListAdmin = () => {
  const { foundProducts } = useContext(ProductsContext);
  console.log(foundProducts);
  return (
    <ViewWrapper>
      <Title>Lista Produktów</Title>
      <StyledList>
        {foundProducts.map(({ allHighlightFields, description, fdcId }) => (
          <>
            <ProductsListItemAdmin
              key={fdcId}
              name={allHighlightFields}
              description={description}
              id={fdcId}
            />
            <AddProductToDB
              namEN={allHighlightFields}
              description={description}
              fdcId={fdcId}
            ></AddProductToDB>
          </>
        ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default ProductsListAdmin;
