import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  border: solid 1px ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    width: 60%;
    min-height: 60vh;
  }
`;
