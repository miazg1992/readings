import styled from 'styled-components';

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export default ViewWrapper;
