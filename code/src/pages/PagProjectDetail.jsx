import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../i18n/LanguageContext';
import MolSection from '../components/molecules/MolSection';
import MolTwoColumn from '../components/molecules/MolTwoColumn';
import AtmHeading from '../components/atoms/AtmHeading';
import AtmText from '../components/atoms/AtmText';
import AtmButtonLink from '../components/atoms/AtmButtonLink';
import AtmSimpleLink from '../components/atoms/AtmSimpleLink';
import { projectsData } from '../data/projectsData';

const Main = styled.main`
  margin: auto;
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

const MediaContainer = styled.div`
  margin-top: ${props => props.theme.spacing.large};
  width: 100%;
  
  img {
  width: 100%;
  max-width: ${props => props.theme.sizes.mediaMaxWidth};
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  video {
  width: 100%;
  max-width: ${props => props.theme.sizes.mediaMaxWidth};
    height: auto;
    border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  }
  
  iframe {
  width: 100%;
  max-width: ${props => props.theme.sizes.mediaMaxWidth};
  height: ${props => props.theme.sizes.iframeHeight};
    border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  }
`;

const MediaItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const SkillsList = styled.ul`
  list-style-type: ${props => props.theme.listStyleType || 'square'};
  padding-left: ${props => props.theme.spacing.large};
  
  li {
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small};
    font-family: ${props => props.theme.fontFamily};
  }
`;

const PagProjectDetail = () => {
  const { projectId } = useParams();
  const { t, currentLanguage } = useTranslation();
  
  const project = projectsData[projectId];
  
  if (!project) {
    return <Navigate to="/" replace />;
  }
  
  // Use detailsKey provided in `projectsData` for translation path
  const detailsKey = project.detailsKey || `projectDetails.${project.id}`;
  
  // Helper function to check if translation exists
  const hasTranslation = (key) => {
    const value = t(key);
    return value !== key && value !== undefined && value !== null && value !== '';
  };
  
  const renderMedia = () => {
    if (project.mediaType === 'image') {
      return (
        <MediaContainer>
          <a href={project.mediaSrc} target="_blank" rel="noopener noreferrer">
            <img src={project.mediaSrc} alt={project.mediaAlt} />
          </a>
        </MediaContainer>
      );
    }
    
    if (project.mediaType === 'images') {
      return (
        <MediaContainer>
          {project.mediaSrcs.map((src, index) => (
            <MediaItem key={index}>
              <a href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={project.mediaAlts[index]} />
              </a>
              {project.mediaAlts[index] && (
                <AtmText><em>{project.mediaAlts[index]}</em></AtmText>
              )}
            </MediaItem>
          ))}
        </MediaContainer>
      );
    }
    
    if (project.mediaType === 'video') {
      return (
        <MediaContainer>
          <video controls>
            <source src={project.mediaSrc} type="video/mp4" />
            Your browser does not support video.
          </video>
        </MediaContainer>
      );
    }
    
    if (project.mediaType === 'youtube') {
      return (
        <MediaContainer>
          <iframe 
            src={project.mediaSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </MediaContainer>
      );
    }
    
    return null;
  };

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
      
      <MolSection>
        {/* Date (left) + Title & Intro (right) */}
        <MolTwoColumn
          leftWidth={'20%'}
          left={
            <DateRange>
              <AtmHeading level={3}>{project.startDate}</AtmHeading>
              <AtmHeading level={3}>{project.endDate}</AtmHeading>
            </DateRange>
          }
          right={
            <>
              <AtmHeading level={4}>{t(`${detailsKey}.title`)}</AtmHeading>
              <AtmText>{t(`${detailsKey}.intro`)}</AtmText>
            </>
          }
        />

        {/* Context */}
        {hasTranslation(`${detailsKey}.context`) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Project Context' : 'Contexte du Projet'}</AtmHeading>}
            right={<AtmText>{t(`${detailsKey}.context`)}</AtmText>}
          />
        )}

        {/* Role */}
        {hasTranslation(`${detailsKey}.role`) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'My Role & Responsibilities' : 'Mon Rôle & Responsabilités'}</AtmHeading>}
            right={<AtmText>{t(`${detailsKey}.role`)}</AtmText>}
          />
        )}

        {/* Technologies */}
        {hasTranslation(`${detailsKey}.technologies`) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Technologies Used' : 'Technologies Utilisées'}</AtmHeading>}
            right={<AtmText>{t(`${detailsKey}.technologies`)}</AtmText>}
          />
        )}

        {/* Skills */}
        {hasTranslation(`${detailsKey}.skills`) && Array.isArray(t(`${detailsKey}.skills`)) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Skills Developed' : 'Compétences Développées'}</AtmHeading>}
            right={
              <SkillsList>
                {t(`${detailsKey}.skills`).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillsList>
            }
          />
        )}

        {/* Takeaways */}
        {hasTranslation(`${detailsKey}.takeaways`) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Key Takeaways' : 'Points Clés'}</AtmHeading>}
            right={<AtmText>{t(`${detailsKey}.takeaways`)}</AtmText>}
          />
        )}

        {/* Links (linkUrl + itchUrl) */}
        {(hasTranslation(`${detailsKey}.linkUrl`) || hasTranslation(`${detailsKey}.itchUrl`)) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Links' : 'Liens'}</AtmHeading>}
            right={
              <>
                {hasTranslation(`${detailsKey}.linkUrl`) && (
                  <AtmText>
                    <strong>{t(`${detailsKey}.link`)}</strong>{' '}
                    <AtmSimpleLink href={t(`${detailsKey}.linkUrl`)} target="_blank">{t(`${detailsKey}.linkUrl`)}</AtmSimpleLink>
                  </AtmText>
                )}
                {hasTranslation(`${detailsKey}.itchUrl`) && (
                  <AtmText>
                    <strong>{t(`${detailsKey}.itchLink`)}</strong>{' '}
                    <AtmSimpleLink href={t(`${detailsKey}.itchUrl`)} target="_blank">{t(`${detailsKey}.itchUrl`)}</AtmSimpleLink>
                  </AtmText>
                )}
              </>
            }
          />
        )}

        {/* Trailer */}
        {hasTranslation(`${detailsKey}.trailer`) && (
          <MolTwoColumn
            left={<AtmHeading level={3}>{currentLanguage === 'en' ? 'Trailer' : 'Bande-annonce'}</AtmHeading>}
            right={<AtmText><strong>{t(`${detailsKey}.trailer`)}</strong></AtmText>}
          />
        )}

        {renderMedia()}
      </MolSection>
    </Main>
  );
};

export default PagProjectDetail;
