import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  max-width: 200px;
  max-height: 50px;
`;
