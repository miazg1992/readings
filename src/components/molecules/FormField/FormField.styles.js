import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
// import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;

  ${Label} {
    display: block;
    text-align: center;
  }
`;
