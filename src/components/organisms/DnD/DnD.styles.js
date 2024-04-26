import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
export const Wrapper = styled.div`
  width: 100%;
  min-height: 25vh;
  padding: 2vw;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (min-width: 576px) {
    flex-direction: row;
    min-height: 25vh;
  }

  ${Button} {
    position: absolute;
    right: 0;
    top: 0px;
    &:first-of-type {
      right: 0;
    }
  }
`;

export const DnDWrapper = styled.div`
  width: 75%;
  min-height: 30vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  position: relative;

  @media (orientation: portrait) {
    min-height: 20vh;
  }
`;
