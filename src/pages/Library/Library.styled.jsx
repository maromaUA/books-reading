import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldStyled = styled(Field)``;

export const ButtonStyled = styled.button`
  width: 25%;
  padding: 0.5em 1em;
  margin-top: 1em;
`;

export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
