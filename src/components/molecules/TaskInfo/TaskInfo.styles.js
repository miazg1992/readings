import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  img {
    width: 20%;
    height: auto;
    margin-right: 20px;

    &:first-child {
      width: 10%;
      height: 30%;
    }
  }
`;
export const Results = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: green;
  div {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid white;
  }
`;
