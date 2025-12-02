import styled from 'styled-components';
import AtmHeading from '../atoms/AtmHeading'
import { useTranslation } from '../../i18n/LanguageContext';
import MolSection from '../molecules/MolSection';
import MolTwoColumn from '../molecules/MolTwoColumn';

const HeaderContainer = styled.header`
  text-align: center;
  display: flex;
  gap: ${props => props.theme.spacing.small};
  flex-direction: column;
`;


const OrgHeader = ({ titleKey = "portfolio" }) => {
  const { t } = useTranslation();

  return (
    
        <MolSection>
        <MolTwoColumn
          left={<div></div>}
          right={
            <HeaderContainer>
              <AtmHeading level={1}>{t(titleKey)}</AtmHeading>
              <AtmHeading level={2}>{t('title')}</AtmHeading>
              <AtmHeading level={3}>{t('location')}</AtmHeading>
            </HeaderContainer>
          }
        />
      </MolSection>
  );
};

export default OrgHeader;