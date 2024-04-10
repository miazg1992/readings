import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;

  @media (min-width: 768px) {
    width: 60%;
    min-height: 60vh;
  }
`;
