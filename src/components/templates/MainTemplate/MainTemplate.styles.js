import styled from 'styled-components';
import f1280 from 'assets/f1280.png';

export const Header = styled.div`
  width: 100%;
  position: relative;
  padding: 50px;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 5px black;
  font-size: ${({ theme }) => theme.fontSize.xl};

  h1 {
    /* color: ${({ theme }) => theme.colors.white}; */
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-shadow: 1px 1px 5px black;
    margin: 0;
    line-height: 0.75;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* max-height: 200vh; */
  /* overflow-y: scroll; */
  margin: 0;
  padding: 0;
  background-image: url(${f1280});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
