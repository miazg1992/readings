import { Title } from 'components/atoms/Title/Title';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledList } from '../ProductsList/ProductsList.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem.js';
import { DBProductsContext } from 'providers/DBProductsProvider';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Input } from 'components/atoms/Input/Input';

const ProductsListAdmin = () => {
  const { products } = useContext(DBProductsContext);
  return (
    <ViewWrapper>
      <Title>Lista Produktów</Title>
      <StyledList>
        {products.map(({ name, amount, id }) => (
          <>
            <ProductsListItem key={id} name={name} amount="100" id={id} />
            <Input></Input>
            <Button
              onClick={() => console.log(`Dodawanie do bazy ${name} ${id}`)}
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
