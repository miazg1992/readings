import styled from 'styled-components';
export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  z-index: 1000;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  list-style: none;
  border-radius: 15px;
  max-height: 400px;
  overflow-y: scroll;
  padding: 10px;

  visibility: ${({ isvisible }) => (isvisible ? 'visible' : 'hidden')};
`;
export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, ishighlighted }) =>
    ishighlighted ? theme.colors.lightPurple : theme.colors.white};
  width: 100%;
  padding: 20px 5px;

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
