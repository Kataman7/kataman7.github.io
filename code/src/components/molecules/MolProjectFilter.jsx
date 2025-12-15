import React from 'react';
import styled from 'styled-components';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';

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

  return (
    <FilterContainer>
      {TYPES.map(type => {
        const isActive = value === type;
        const ButtonComp = isActive ? ActiveButton : AtmButton;
        return (
          <ButtonComp key={type} onClick={() => onChange(type)} aria-pressed={isActive}>
            {t(`projectTypes.${type}`)}
          </ButtonComp>
        );
      })}
    </FilterContainer>
  );
};

export default MolProjectFilter;
