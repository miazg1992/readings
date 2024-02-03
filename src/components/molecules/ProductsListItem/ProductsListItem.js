import React from 'react';

const ProductsListItem = ({ name, amount, id }) => {
  // const markup = { __html: amount };
  // return <div dangerouslySetInnerHTML={markup} />;
  return <p>{amount}</p>;
};

export default ProductsListItem;
