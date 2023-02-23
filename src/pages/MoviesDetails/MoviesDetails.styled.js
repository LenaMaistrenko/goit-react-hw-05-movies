import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledGoBack = styled.main`
   {
    display: inline-block;
    background-color: #1e90ff;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
`;
export const StyledInfo = styled.div`
  display: flex;
  padding: 20px 20px;
`;
export const StyledInfoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;
export const StyleLink = styled(Link)`
   {
    font-size: 20px;
    text-decoration: none;
    color: #000080;
  }
  &:hover,
  &:active,
  &:focus {
    color: blue;
  }
`;
