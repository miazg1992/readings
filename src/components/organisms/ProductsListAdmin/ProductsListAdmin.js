import { Title } from 'components/atoms/Title/Title';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledList } from '../ProductsList/ProductsList.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem.js';
import { ProductsContext } from 'providers/ProductsProvider';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Input } from 'components/atoms/Input/Input';

const ProductsListAdmin = () => {
  const { foundProducts } = useContext(ProductsContext);
  console.log(foundProducts);
  return (
    <ViewWrapper>
      <Title>Lista Produktów</Title>
      <StyledList>
        {foundProducts.map(({ allHighlightFields, description, fdcId }) => (
          <>
            <ProductsListItem
              key={fdcId}
              name={allHighlightFields}
              amount={description}
              id={fdcId}
            />
            <Input></Input>
            <Button
              onClick={() =>
                console.log(
                  `Dodawanie do bazy ${allHighlightFields}  ${description} ${fdcId}`,
                )
              }
            >
              Dodaj produkt do bazy
            </Button>
          </>
        ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default ProductsListAdmin;
