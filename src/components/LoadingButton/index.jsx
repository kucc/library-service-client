import { CSSProperties } from 'react';

import { StyledButton, StyledLoadingSpinner, StyledLoadingSpinnerContainer } from './style';

export const LoadingButton = ({
  text,
  style,
  isLoading,
  isActive,
  onClick,
}) => {
  return (
    <StyledButton
      className={isActive ? 'active' : ''}
      style={style}
      isLoading={isLoading}
      onClick={onClick}>
      {isLoading && (
        <StyledLoadingSpinnerContainer>
          <StyledLoadingSpinner />
        </StyledLoadingSpinnerContainer>
      )}
      {text}
    </StyledButton>
  );
};
