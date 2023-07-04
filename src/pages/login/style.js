import styled from 'styled-components';
import { Link } from "next/link";

export const StyledCenterContainer = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledAuthContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 850px;
  height: ${props => (props.isLogin ? 'calc(100vh - 54px)' : 'auto')};
`;

export const StyledForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  a,
  button {
    display: block;
    margin: 0 auto;
  }
`;

export const StyledSignUpButton = styled(Link)`
  color: #212121;
  font-size: 16px;
  width: 40px;
  margin: 24px auto 0 auto !important;
  text-decoration: underline;
`;

export const StyledDescriptionTopText = styled.div`
  font-family: 'tmoneyBo';
  font-size: 54px;
  line-height: 58px;
  color: ${props => (props.color === 'red' ? '#C32020'  : '#212121')};
  margin-top: ${props => (props.color === 'red' ? '4px' : 0)};
  @media (max-width: 800px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const StyledDescriptionBottomText = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: #212121;
  margin: 20px 0 84px 0;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-height: 900px) {
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0 10% 0;
  }
`;
