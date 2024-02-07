import styled from 'styled-components';
import f2 from 'assets/f2.jpg';

export const Header = styled.div`
  width: 100%;
  padding: 2vw;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 5px black;
  font-size: ${({ theme }) => theme.fontSize.xl};

  h1 {
    /* color: ${({ theme }) => theme.colors.white}; */
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-shadow: 1px 1px 5px black;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* max-height: 200vh; */
  /* overflow-y: scroll; */
  position: relative;
  margin: 0;
  padding: 0;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  background-image: url(${f2});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
