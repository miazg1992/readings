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
    align-self: flex-start;
    width: 50%;
    height: auto;
    margin: 20px;

    &:nth-child(2) {
      width: 20%;
      height: auto;
      align-self: center;
      margin-left: -30px;
    }

    @media (min-width: 576px) {
      width: 70%;
    }
    @media (min-width: 576px) and (orientation: landscape) {
      width: 60%;
    }
    @media (min-width: 768px) and (orientation: landscape) {
      width: 60%;
    }
  }
`;
