import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  ${Button} {
    position: absolute;
    width: 50px;
    right: 0;
    bottom: 0px;
    &:first-of-type {
      right: 0;
      bottom: 38px;
    }
  }
`;

export const DnDWrapper = styled.div`
  width: 95%;
  min-height: 25vh;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 20px;

  @media (min-width: 576px) {
    width: 80%;
    min-height: 30vh;
  }
  @media (min-width: 992px) {
    min-height: 25vh;
  }
`;
