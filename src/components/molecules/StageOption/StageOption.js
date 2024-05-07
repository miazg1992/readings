import React from 'react';
import { Wrapper } from './StageOption.styles';
import sylaby from 'assets/sylaby.jpg';
import zdania from 'assets/zdania.jpg';

const StageOption = ({ children, img, onClick }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      {children}
      onClick={onClick}
    </Wrapper>
  );
};

export default StageOption;
