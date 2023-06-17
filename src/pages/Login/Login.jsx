import { Formik, Field, Form, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectIsUserAuthorized } from '../../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isAuth = useSelector(selectIsUserAuthorized);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      {isAuth && <Navigate to="/library" />}
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Login</button>
          <Link to="registration">Register</Link>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
