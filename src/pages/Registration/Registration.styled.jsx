import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const BoxStyled = styled.div`
  background-color: #272d79;
`;

export const WrapperStyled = styled.div`
  padding: 32px 20px 44px;
`;

export const GoogleLinkStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  margin-bottom: 28px;
  padding: 1px;
  background-color: #fff;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.38;
  text-align: center;
  color: #707375;
`;

export const LabelStyled = styled.label`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.22;
  color: #ffffff;

  &:after {
    content: '*';
    color: #f25137;
    margin-left: 5px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled(Field)`
  margin-bottom: 20px;
`;

export const RegisterBtnStyled = styled.button`
  margin-bottom: 20px;
`;

export const TextStyled = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  text-align: center;
  color: #898f9f;
`;

export const LinkStyled = styled(Link)`
  color: #ff6b08;
  margin-left: 5px;
`;
