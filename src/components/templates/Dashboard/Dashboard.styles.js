import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const Results = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  height: 25px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    top: 10vh;
    right: 50px;
    width: 50%;
    justify-self: flex-end;
    align-self: flex-end;
  }
`;

export const Result = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: ${({ $isCorrect }) =>
    $isCorrect ? ({ theme }) => theme.colors.primary : 'black'};
`;
