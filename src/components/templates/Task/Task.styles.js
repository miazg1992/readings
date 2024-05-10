import styled from 'styled-components';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)`
  width: 90%;
  min-height: 50vh;

  @media (min-width: 576px) and (orientation: landscape) {
    min-height: 70vh;
    background-color: ${({ theme }) => theme.colors.whiteOpacity};
  }

  @media (min-width: 768px) {
    width: 80%;
    min-height: 50vh;
  }
  @media (min-width: 992px) {
    width: 65%;
    min-height: 60vh;
  }
`;
