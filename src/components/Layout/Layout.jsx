import { Outlet, NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav } from '../Layout/Layout.styled';
export function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}
