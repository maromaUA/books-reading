import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserAuthorized } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsUserAuthorized);
  return isAuthorized ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
