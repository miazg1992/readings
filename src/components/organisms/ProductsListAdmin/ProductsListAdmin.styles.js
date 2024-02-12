import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)`
  overflow-y: scroll;
  min-height: 30vh;
  max-height: 70vh;
`;
export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
