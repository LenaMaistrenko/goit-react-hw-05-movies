import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Main = styled.main`
  padding: 10px;
  font-size: 20px;
  color: black;
`;
export const Title = styled.p`
  font-size: 20px;
  color: blue;
  text-align: center;
`;
export const StyledUl = styled.ul`
   {
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
