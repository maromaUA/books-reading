import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const MainDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  background-color: #f6f7fb;
  width: 320px;
`;

export const FormStyled = styled(Form)`
  width: 87vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 87%;
  height: 20%;
`;

export const FieldStyled = styled(Field)`
  width: 99%;
  height: 62%;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: 500;
  height: 25%;
  text-align: start;
`;

export const ButtonStyled = styled.button`
  width: 53%;
  height: 6%;
  padding: 0.5em 1em;
  margin-top: 1em;
  background-color: white;
  border: 1px solid black;
`;

export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
