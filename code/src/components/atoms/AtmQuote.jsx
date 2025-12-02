import React from 'react';
import styled from 'styled-components';
import AtmText from './AtmText';
import { useTranslation } from '../../i18n/LanguageContext';

const Quote = styled.blockquote`
  font-style: italic;
  text-align: center;
  margin: auto;
  padding: ${props => props.theme.spacing.large};
  border-left: 4px solid ${props => props.theme.colors.primary};
  
  p {
  margin-bottom: ${props => props.theme.spacing.small};
    font-size: ${props => props.theme.fontSize.medium};
  }
  
  cite {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.secondary};
  }
`;

const AtmQuote = ({ 
  quoteKey = "quotes.quote", 
  authorKey = "quotes.author",
  showIntro = true 
}) => {
  const { t } = useTranslation();

  return (
    <>
      {showIntro && <AtmText>{t('quotes.intro')}</AtmText>}
      <Quote>
        <p>"{t(quoteKey)}"</p>
        <cite>{t(authorKey)}</cite>
      </Quote>
    </>
  );
};

export default AtmQuote;