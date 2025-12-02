import React from 'react';
import styled from 'styled-components';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import AtmSimpleLink from '../atoms/AtmSimpleLink';

const ProjectDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
`;

const MolProject = ({ 
  startDate, 
  endDate = null, 
  titleKey, 
  descriptionKey, 
  projectUrl 
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ProjectDate>
        <AtmHeading level={3}>{startDate}</AtmHeading>
        {endDate && (
          <>
            <AtmHeading level={3}>{endDate}</AtmHeading>
          </>
        )}
      </ProjectDate>
      <ProjectContent>
        <AtmHeading level={4}>
          <AtmSimpleLink href={projectUrl}>{t(titleKey)}</AtmSimpleLink>
        </AtmHeading>
        <AtmText>{t(descriptionKey)}</AtmText>
      </ProjectContent>
    </>
  );
};

export default MolProject;