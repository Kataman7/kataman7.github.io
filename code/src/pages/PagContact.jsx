import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../i18n/LanguageContext';
import MolSection from '../components/molecules/MolSection';
import AtmHeading from '../components/atoms/AtmHeading';
import AtmText from '../components/atoms/AtmText';
import MolTwoColumn from '../components/molecules/MolTwoColumn';
import MolContactForm from '../components/molecules/MolContactForm';
import AtmSimpleLink from '../components/atoms/AtmSimpleLink';
import AtmButtonLink from '../components/atoms/AtmButtonLink';
import OrgFooter from '../components/organisms/OrgFooter';

const Main = styled.main`
  margin: auto;
`;

const PagContact = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('links.title')}</AtmHeading>}
          right={
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <AtmButtonLink href="/">{t('projectDetails.backToPortfolio')}</AtmButtonLink>
            </div>
          }
        />
      </MolSection>

      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('contact.title')}</AtmHeading>}
          right={
            <>
              <AtmText>
                {t('contact.intro')} <strong>
                  <AtmSimpleLink href="mailto:contact@antonin.net">contact@antonin.net</AtmSimpleLink>
                </strong>
              </AtmText>
              <AtmText>{t('contact.alternative')}</AtmText>
              <MolContactForm />
            </>
          }
        />
      </MolSection>

      <OrgFooter timeTitle={t('footer.timeInSete')} />
    </Main>
  );
};

export default PagContact;
