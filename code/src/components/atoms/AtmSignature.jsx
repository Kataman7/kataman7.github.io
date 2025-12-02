import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../styles/ThemeProvider';

// Styled image with optional width prop
const SignatureImg = styled.img`
  width: ${props => props.$width || '180px'};
  height: auto;
  display: block;
  /* Right align in flex/container contexts */
  align-self: flex-end;
  margin-left: auto;
`;

// AtmSignature: chooses the signature image based on the current theme
const AtmSignature = ({ alt = 'Signature', width = '180px', className = '' }) => {
  const { isDark } = useTheme();

  // If theme isDark (portfolio/dark), show the white signature (good on dark bg)
  // otherwise show the black signature (good on light bg)
  const src = isDark ? '/resources/images/signature-white.png' : '/resources/images/signature-black.png';

  return <SignatureImg $width={width} src={src} alt={alt} className={className} />;
};

export default AtmSignature;
