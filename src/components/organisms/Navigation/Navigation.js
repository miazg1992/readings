import React from 'react';
import {
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
