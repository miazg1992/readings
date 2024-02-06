import React from 'react';

const ProductsListItemAdmin = ({ name, description, id }) => {
  const markup = { __html: name };
  return (
    <>
      {name ? <div dangerouslySetInnerHTML={markup} /> : null}
      {description ? <p> {description} </p> : null}
    </>
  );
};

export default ProductsListItemAdmin;
