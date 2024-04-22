import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    min-height: 40vh;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  min-height: 25vh;
  position: relative;
  background-color: green;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 75vw;
    max-height: 20vh;
  }
`;
