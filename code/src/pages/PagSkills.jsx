import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../i18n/LanguageContext';
import MolSection from '../components/molecules/MolSection';
import AtmHeading from '../components/atoms/AtmHeading';
import AtmText from '../components/atoms/AtmText';
import MolTwoColumn from '../components/molecules/MolTwoColumn';
import AtmTable from '../components/atoms/AtmTable';
import AtmButtonLink from '../components/atoms/AtmButtonLink';

const Main = styled.main`
  margin: auto;
`;

const PagSkills = () => {
  const { t } = useTranslation();

  return (
    <Main>

      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('links.title')}</AtmHeading>}
          right={
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <AtmButtonLink href="/">
                {t('projectDetails.backToPortfolio')}
              </AtmButtonLink>
            </div>
          }
        />
      </MolSection>

      {/* Learning Section */}
      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('learning.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('learning.overview.title')}</AtmHeading>
              <AtmText>{t('learning.overview.content1')}</AtmText>
              <AtmText>{t('learning.overview.content2')}</AtmText>
            </>
          }
        />
      </MolSection>

      {/* Develop Skills */}
      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('develop.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('develop.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
            </>
          }
        />
      </MolSection>

      {/* Optimize Skills */}
      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('optimize.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('optimize.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
            </>
          }
        />
      </MolSection>

      {/* Verify Skills */}
      <MolSection>
        <MolTwoColumn
          left={<AtmHeading level={3}>{t('verify.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('verify.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
              <AtmText>{t('verify.conclusion')}</AtmText>
            </>
          }
        />
      </MolSection>
    </Main>
  );
};

export default PagSkills;
