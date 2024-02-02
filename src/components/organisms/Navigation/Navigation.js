import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-product">Dodaj produkt</StyledLink>
      <StyledLink to="/add-product-admin">
        Dodaj produkt do bazy Admin
      </StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
