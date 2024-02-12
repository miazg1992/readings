import styled from 'styled-components';
import theme from 'assets/styles/theme';

export const Wrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
`;
