import React from 'react';
import styled from 'styled-components';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import { projectsData } from '../../data/projectsData';

const FilterContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.large};
`;

const TYPES = ['all', 'web', 'game', 'ai', 'hardware', 'other'];

const MolProjectFilter = ({ value = 'all', onChange = () => {} }) => {
  const { t } = useTranslation();

  const projects = Object.values(projectsData);
  const counts = TYPES.reduce((acc, type) => {
    if (type === 'all') {
      acc[type] = projects.length;
    } else {
      acc[type] = projects.filter(p => Array.isArray(p.types) ? p.types.includes(type) : (p.type === type)).length;
    }
    return acc;
  }, {});

  return (
    <FilterContainer>
      {TYPES.map(type => {
        const isActive = value === type;
        const label = `${t(`projectTypes.${type}`)} (${counts[type] ?? 0})`;
        return (
          <AtmButton key={type} onClick={() => onChange(type)} aria-pressed={isActive}>
            {label}
          </AtmButton>
        );
      })}
    </FilterContainer>
  );
};

export default MolProjectFilter;
