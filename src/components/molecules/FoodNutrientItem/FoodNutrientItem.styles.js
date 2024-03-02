import styled from 'styled-components';

export const FoodNutrientProgress = styled.progress`
  inline-size: 300px;
  background-color: #fff;
  border-radius: 5px;
  /* appearance: none; */
  /* -webkit-appearance: none; */

  background: ${({ theme, partofdemand }) => {
    if (partofdemand > 90) return theme.colors.success;
    if (partofdemand > 30) return theme.colors.warning;
    if (partofdemand > 0) return '#ff0000';
    return theme.colors.grey;
  }};

  &::-webkit-progress-bar {
    background-color: #fff;
    border-radius: 5px;
  }
  &::-webkit-progress-value {
    background: ${({ theme, partofdemand }) => {
      if (partofdemand > 90) return theme.colors.success;
      if (partofdemand > 30) return theme.colors.warning;
      if (partofdemand > 0) return '#ff0000';
      return theme.colors.grey;
    }};
    border-radius: 5px;
  }
  &::-moz-progress-bar {
    background-color: #fff;
    border-radius: 5px;
  }
  &::-moz-progress-value {
    background: ${({ theme, partofdemand }) => {
      if (partofdemand > 90) return theme.colors.success;
      if (partofdemand > 30) return theme.colors.warning;
      if (partofdemand > 0) return '#ff0000';
      return theme.colors.grey;
    }};
    border-radius: 5px;
  }
`;
