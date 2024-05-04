import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  /* background-color: ${({ theme }) => theme.colors.whiteOpacity}; */
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: 576px) and (orientation: landscape) {
    min-height: 80vh;
    background-color: ${({ theme }) => theme.colors.whiteOpacity};
  }

  @media (min-width: 768px) {
    width: 80%;
    min-height: 60vh;
  }
  @media (min-width: 992px) {
    width: 65%;
    min-height: 60vh;
  }
`;
