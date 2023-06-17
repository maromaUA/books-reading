import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const BoxStyled = styled.div`
  background-color: #272d79;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  @media (min-width: 1440px) {
  }
`;

export const WrapperStyled = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 44px;

  @media (min-width: 768px) {
    padding: 40px;
    background-color: #ffffff;
  }
  @media (min-width: 1440px) {
  }
`;

export const GoogleLinkStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;
  padding: 1px 14px;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.38;
  text-align: center;
  color: #707375;
  background-color: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
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

  @media (min-width: 768px) {
    color: #898f9f;
  }
  @media (min-width: 1440px) {
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const InputStyled = styled(Field)`
  padding: 13px 8px 12px;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.22;
  color: #242a37;
  background-color: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  border: none;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const RegisterBtnStyled = styled.button`
  margin-bottom: 20px;
  padding: 20px 70px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #ffffff;
  background-color: #ff6b08;
  border: none;

  @media (min-width: 768px) {
    margin-top: 15px;
  }
  @media (min-width: 1440px) {
  }
`;

export const TextStyled = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  text-align: center;
  color: #898f9f;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const LinkStyled = styled(Link)`
  color: #ff6b08;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
