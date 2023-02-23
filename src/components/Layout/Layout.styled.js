import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  color: black;
  & a {
    text-decoration: none;
    display: flex;
    gap: 40 px;
  }

  & a.active {
    text-decoration: underline;
    color: blue;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: #6c5ce7;
  font-weight: bold;
`;
