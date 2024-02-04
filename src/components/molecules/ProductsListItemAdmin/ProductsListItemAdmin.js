import React from 'react';

const ProductsListItemAdmin = ({ key, name, description, id }) => {
  const markup = { __html: name };
  return <div dangerouslySetInnerHTML={markup} />;
};

export default ProductsListItemAdmin;
