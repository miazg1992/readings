import React from 'react';
import { Wrapper } from './ProductsListItemAdmin.styles';

const ProductsListItemAdmin = ({ name, description, id, foodNutrients }) => {
  const markup = { __html: name };
  return (
    <Wrapper>
      {name ? <div dangerouslySetInnerHTML={markup} /> : null}
      {description ? <p> {description} </p> : null}
      <p>Liczba składników odżywczych: {foodNutrients.length}</p>
    </Wrapper>
  );
};

export default ProductsListItemAdmin;
