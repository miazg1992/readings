import { Title } from 'components/atoms/Title/Title';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledList } from '../ProductsList/ProductsList.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem.js';
import { ProductsContext } from 'providers/ProductsProvider';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ViewWrapper>
      <Title>Lista Produktów</Title>
      <StyledList>
        {products.map(({ name, amount, id }) => (
          <ProductsListItem key={id} name={name} amount={amount} id={id} />
        ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default ProductsList;
