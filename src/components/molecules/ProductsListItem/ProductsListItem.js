import React from 'react';

const ProductsListItem = ({ name, amount, id }) => {
  return (
    <p>
      {name} {amount} {id}
    </p>
  );
};

export default ProductsListItem;
