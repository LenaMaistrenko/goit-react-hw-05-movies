import styled from 'styled-components';
export const Main = styled.main`
  padding: 10px;
  font-size: 20px;
  color: black;
`;
export const Title = styled.p`
  font-size: 20px;
`;
export const StyledUl = styled.ul`
  & a {
    text-decoration: none;
  }
  & a:hover,
  & a:focus,
  & a:active {
    color: blue;
  }
`;
