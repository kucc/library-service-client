import styled from 'styled-components';


export const StyledFooterContainer = styled.div`
  background-color: #EBEBEB;
  color: black;
  padding: 84px 0px 10px 0px;
  @media (max-width: 800px) {
    padding: 28px 24px 38px 24px;
  }
`;

export const StyledFooter = styled.div`
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledRow = styled.div`
  font-family: 'Abel';
  font-size: 15px;
  font-weight: 400;
  display: flex;
  margin-bottom: 23.57px;
  
  justify-content: center;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.div`
  flex-basis: 165px;
  flex-shrink: 0;
  font-family: 'Abel';
  @media (max-width: 800px) {
    font-size: 7px;
    flex-basis: 80px;
  }
`;

export const StyledContent = styled.div`
  flex-basis: 400px;
  font-family: 'Abel';
  word-break: keep-all;
  @media (max-width: 800px) {
    font-size: 6px;
  }
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid black;
  margin: 87px 0 10px 0;
  @media (max-width: 800px) {
    margin: 16px 0;
  }
`;

export const StyledFooterGithubLink = styled.a`
  flex-basis: 400px;
  font-size: 14px;
  font-family: 'Abel';
  color: black;
  @media (max-width: 800px) {
    font-size: 7px;
  }
`;

export const StyledCopyRight = styled.span`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 16px;
  font-family: 'Abel';
  span {
    font-family: 'sdBo';
  }
  @media (max-width: 800px) {
    font-size: 7px;
    margin-left: 4px;
  }
`;

export const StyledFooterLogo = styled.img`
  width: 81px;
  height: 81px;
  content: url('https://avatars.githubusercontent.com/u/8529732?s=200&v=4');
  @media (max-width: 800px) {
    width: 37px;
    height: 37px;
  }
`;