import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  LiStyled,
  MainStyled,
  NavStyled,
  SpanStyled,
  UlStyled,
  HeaderStyled,
} from './Layout.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthName } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';

const Layout = () => {
  const name = useSelector(selectAuthName);
  // const nameMobile = name[0];
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  console.log('location:', location);
  if (location.pathname === '/' || location.pathname === '/registration') {
    return (
      <>
        <HeaderStyled>
          <span>BR</span>
        </HeaderStyled>
        <MainStyled>
          <Suspense>
            <Outlet></Outlet>
          </Suspense>
        </MainStyled>
      </>
    );
  } else {
    return (
      <>
        <HeaderStyled>
          <SpanStyled>BR</SpanStyled>
          <NavStyled>
            <UlStyled>
              <LiStyled>Book</LiStyled>
              <LiStyled>Home</LiStyled>
              <LiStyled>|</LiStyled>
              <LiStyled>{name}</LiStyled>
              <LiStyled onClick={handleLogout}>Logout</LiStyled>
            </UlStyled>
          </NavStyled>
        </HeaderStyled>
        <MainStyled>
          <Suspense>
            <Outlet></Outlet>
          </Suspense>
        </MainStyled>
      </>
    );
  }
};

export default Layout;
