import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserAuthorized } from '../../redux/auth/authSelectors';

const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsUserAuthorized);
  return !isAuthorized ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
