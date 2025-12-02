import React from 'react';
import MolTwoColumn from '../molecules/MolTwoColumn';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButtonLink from '../atoms/AtmButtonLink';
import { projectsData } from '../../data/projectsData';
import { useTranslation } from '../../i18n/LanguageContext';
import styled from 'styled-components';
import AtmSimpleLink from '../atoms/AtmSimpleLink';

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large || '1rem'};
`;

const ProjectDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

const OrgProjectsList = () => {
  const { t } = useTranslation();

  // Get projects from central data file keyed by slug
  const projects = Object.values(projectsData);

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <MolTwoColumn
          key={index}
          left={
            <ProjectDate>
              {project.endDate ? (
                <DateRange>
                  <AtmHeading level={3}>{project.startDate}</AtmHeading>
                  <AtmHeading level={3}>{project.endDate}</AtmHeading>
                </DateRange>
              ) : (
                <AtmHeading level={3}>{project.startDate}</AtmHeading>
              )}
            </ProjectDate>
          }
          right={
            <>
              <AtmHeading level={4}>
                <AtmSimpleLink to={`/project/${project.id}`}>
                  {t(project.titleKey)}
                </AtmSimpleLink>
              </AtmHeading>
              <AtmText>{t(project.descriptionKey)}</AtmText>
            </>
          }
        />
      ))}
    </ProjectsContainer>
  );
};

export default OrgProjectsList;