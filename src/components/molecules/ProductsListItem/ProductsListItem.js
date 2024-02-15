import React from 'react';

const ProductsListItem = ({ name, amount, id }) => {
  return (
    <p>
      Nazwa produktu: {name} {amount} [g] {id}
    </p>
  );
};

export default ProductsListItem;
