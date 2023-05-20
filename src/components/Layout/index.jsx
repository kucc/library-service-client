import { 
  StyledContent,
  StyledCopyRight,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterGithubLink,
  StyledFooterLogo,
  StyledFooterMargin,
  StyledHorizontalLine,
  StyledRow,
  StyledTitle,
} from "./style";
  
export default function Footer() {

    return (
    <StyledFooterContainer>
      <StyledFooter>
          <StyledRow>
            <StyledTitle>FE</StyledTitle>
            <StyledContent>
              김채린 · 박성철 · 오대양
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>BE</StyledTitle>
            <StyledContent>
              한수빈 · 권민재 · 박진권 · 안준현
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Design</StyledTitle>
            <StyledContent>
              최어진 · 김예락
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Github</StyledTitle>
            <StyledFooterGithubLink href='https://github.com/kucc/library-service-client' target='_blank'>
                https://github.com/kucc/library-service-client
            </StyledFooterGithubLink>
          </StyledRow>
          <StyledHorizontalLine />
          <StyledRow>
            <StyledFooterLogo />
            <StyledCopyRight>
                Copyright <span>ⓒ KUCC</span> All Rights Reserved.
            </StyledCopyRight>
          </StyledRow>
      </StyledFooter>
    </StyledFooterContainer>
    );
};