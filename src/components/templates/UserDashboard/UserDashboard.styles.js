import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
