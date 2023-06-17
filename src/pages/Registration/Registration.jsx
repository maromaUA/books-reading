import { Formik, useFormik } from 'formik';
import { registerUser } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import {
  BoxStyled,
  WrapperStyled,
  GoogleLinkStyled,
  LabelStyled,
  FormStyled,
  InputStyled,
  RegisterBtnStyled,
  TextStyled,
  LinkStyled,
} from '../Registration/Registration.styled';

const Registration = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
    },
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });
  return (
    <BoxStyled>
      <WrapperStyled>
        <GoogleLinkStyled>
          <FcGoogle size={18} />
          Google
        </GoogleLinkStyled>
        <Formik>
          <FormStyled onSubmit={formik.handleSubmit}>
            <LabelStyled htmlFor="name">Name</LabelStyled>
            <InputStyled
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="..."
            />
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputStyled
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="your@email.com"
            />
            <LabelStyled htmlFor="password">Password</LabelStyled>
            <InputStyled
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="..."
            />
            <LabelStyled htmlFor="confirmPass">Confirm password</LabelStyled>
            <InputStyled
              name="confirmPass"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPass}
              placeholder="..."
            />
            <RegisterBtnStyled type="submit">Register</RegisterBtnStyled>
            <TextStyled>
              Already have an account?<LinkStyled to="/">Log in</LinkStyled>
            </TextStyled>
          </FormStyled>
        </Formik>
      </WrapperStyled>
    </BoxStyled>
  );
};

export default Registration;
