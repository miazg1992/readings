import styled from 'styled-components';
import bgcS from 'assets/bgc_640.png';
import bgcL from 'assets/bgc_1280.png';

export const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  /* color: linear-gradient(to right, red, orange, yellow, lime, blue, purple, fuchsia) */
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 5px ${({ theme }) => theme.colors.black};
  z-index: 1;
  padding-bottom: 50px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-shadow: 1px 1px 5px black;
    margin: 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0;
    letter-spacing: 0.15em;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.black};
  /* background-image: url(${bgcS}); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
