import React from 'react';
import styled from 'styled-components';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.small};
  }

  label {
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.small};
  }

  input, textarea {
    padding: ${props => props.theme.spacing.small};
    border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFamily};
    border-radius: ${props => props.theme.borderRadius.normal};
  }

  button {
    margin-top: ${props => props.theme.spacing.small};
  }
`;

const MolContactForm = ({ 
  accessKey = "d8b94f75-d2c0-4ecf-be4c-89c3fe5b8280",
  redirect = "#contact"
}) => {
  const { t } = useTranslation();

  return (
    <ContactForm action="https://api.web3forms.com/submit" method="POST" id="contact">
      <div>
        <label htmlFor="name">{t('contact.form.name')}</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label htmlFor="email">{t('contact.form.email')}</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">{t('contact.form.message')}</label>
        <textarea name="message" rows="6" required></textarea>
      </div>
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="redirect" value={redirect} />
      <AtmButton type="submit">{t('contact.form.send')}</AtmButton>
    </ContactForm>
  );
};

export default MolContactForm;