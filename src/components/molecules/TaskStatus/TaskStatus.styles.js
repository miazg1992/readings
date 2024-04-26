import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: transparent; */
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  img {
    width: 35%;
    height: auto;
    margin: 20px;

    &:nth-child(2) {
      width: 20%;
      height: auto;
    }
  }
`;
