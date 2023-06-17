import { Formik, useFormik } from 'formik';
import { FormStyled } from './TrainingForm.styled';

const TrainingForm = () => {
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
    <>
      <Formik>
        <FormStyled onSubmit={formik.handleSubmit}>
          <LabelStyled htmlFor="startDate">Name</LabelStyled>
          <InputStyled
            name="startDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <LabelStyled htmlFor="endDate">Email Address</LabelStyled>
          <InputStyled
            name="endDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormStyled>
      </Formik>
    </>
  );
};

export default TrainingForm;
