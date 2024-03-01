import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/add-product-admin">Panel Administratora</StyledLink>
      <StyledLink to="/test">Downshift</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
