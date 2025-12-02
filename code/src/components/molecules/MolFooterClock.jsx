import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AtmHeading from '../atoms/AtmHeading';
import { useTranslation } from '../../i18n/LanguageContext';

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

const MolFooterClock = ({ timeTitle, clockId = "clock" }) => {
  const { currentLanguage } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // update every second
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString(currentLanguage || undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <ClockContainer>
      <AtmHeading level={3}>{timeTitle}</AtmHeading>
      <AtmHeading level={3} id={clockId}>{timeString}</AtmHeading>
    </ClockContainer>
  );
};

export default MolFooterClock;