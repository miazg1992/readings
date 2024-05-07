import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  /* color: ${({ theme }) => theme.colors.white}; */
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin: 15px 20px;
  position: relative;
  width: 35vw;
  min-height: 30vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  transition: 0.5s;
  img {
    width: 90%;
    height: auto;
    margin-bottom: 10px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
