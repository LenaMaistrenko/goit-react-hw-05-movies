import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
   {
    font-size: 20px;
    padding: 30px 40px;
    font-size: 20px;
    list-style-type: none;
  }
`;
export const StyleLink = styled(Link)`
   {
    text-decoration: none;
    color: #000080;
  }
  &:hover,
  &:focus,
  &:active {
    color: blue;
  }
`;
