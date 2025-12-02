import styled from 'styled-components';
import AtmProgressBar from '../atoms/AtmProgressBar';
import AtmHeading from '../atoms/AtmHeading';
import { useTranslation } from '../../i18n/LanguageContext';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.large};
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

const SkillTitle = styled(AtmHeading)`
  margin: 0;
  font-size: ${props => props.theme.fontSize.small};
`;

const MolSkills = ({ skills = [] }) => {
  const { t } = useTranslation();

  // Traduire les noms des compétences
  const translatedSkills = skills.map(skill => ({
    ...skill,
    name: t(skill.nameKey) || skill.name
  }));

  return (
    <>
      <SkillsContainer>
        {translatedSkills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillTitle level={5}>{skill.name}</SkillTitle>
            <AtmProgressBar progress={skill.progress} />
          </SkillItem>
        ))}
      </SkillsContainer>
    </>
  );
};

export default MolSkills;