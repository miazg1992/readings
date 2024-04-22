import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Images = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 20vh;
  img {
    width: 30%;
    height: auto;
    margin: 20px;

    &:nth-child(2) {
      align-self: flex-start;
      width: 15%;
      height: auto;
    }
  }
`;
export const Results = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Result = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: ${({ $isCorrect }) => ($isCorrect ? 'yellow' : 'black')};
`;
