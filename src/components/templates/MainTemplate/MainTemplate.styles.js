import styled from 'styled-components';
import bgS from 'assets/moon_640.jpg';
import bgL from 'assets/moon_1280.jpg';

export const Header = styled.div`
  width: 100%;
  padding: 2vw;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 5px black;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 5vh;

  h1 {
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
  position: relative;
  margin: 0;
  padding: 0;
  background-image: url(${bgS});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media (min-width: 641px) {
    background-image: url(${bgL});
  }
`;
