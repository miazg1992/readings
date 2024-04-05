import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  border: 2px solid black;
  width: 100px;
  height: 50px;
  color: black;
  font-weight: bold;
  opacity: 0.8;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }
`;
