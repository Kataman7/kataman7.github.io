import React from 'react';
import MolTwoColumn from '../molecules/MolTwoColumn';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButtonLink from '../atoms/AtmButtonLink';
import { projectsData } from '../../data/projectsData';
import { useTranslation } from '../../i18n/LanguageContext';
import styled from 'styled-components';
import AtmSimpleLink from '../atoms/AtmSimpleLink';
import { useState } from 'react';
import MolProjectFilter from '../molecules/MolProjectFilter';

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
  const [selectedType, setSelectedType] = useState('all');

  // Get projects from central data file keyed by slug
  const projects = Object.values(projectsData);

  const filtered = projects.filter(p => {
    if (!selectedType || selectedType === 'all') return true;
    return Array.isArray(p.types) ? p.types.includes(selectedType) : (p.type === selectedType);
  });

  return (
    <ProjectsContainer>
      <MolTwoColumn
        left={<div />}
        right={<MolProjectFilter value={selectedType} onChange={setSelectedType} />}
      />

      {filtered.map((project, index) => (
        <div key={index} id={project.id}>
          <MolTwoColumn
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
              {project.types && (
                <AtmText>{project.types.map(type => t(`projectTypes.${type}`)).join(', ')}</AtmText>
              )}
            </>
          }
        />
        </div>
      ))}
    </ProjectsContainer>
  );
};

export default OrgProjectsList;