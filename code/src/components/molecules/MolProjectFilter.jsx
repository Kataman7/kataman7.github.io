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

const ActiveButton = styled(AtmButton)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border-color: ${props => props.theme.colors.primary};
`;

const TYPES = ['all', 'web', 'game', 'ai', 'hardware'];

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
        const ButtonComp = isActive ? ActiveButton : AtmButton;
        const label = `${t(`projectTypes.${type}`)} (${counts[type] ?? 0})`;
        return (
          <ButtonComp key={type} onClick={() => onChange(type)} aria-pressed={isActive}>
            {label}
          </ButtonComp>
        );
      })}
    </FilterContainer>
  );
};

export default MolProjectFilter;
