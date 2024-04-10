import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 50vh;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 70%;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
