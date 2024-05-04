import styled from 'styled-components';

export const SyllableWrapper = styled.div`
  width: 100px;
  height: 30px;
  flex-shrink: 0;
  cursor: grab;
  background-color: white;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-height: 1000px) {
    height: 50px;
  }
`;
