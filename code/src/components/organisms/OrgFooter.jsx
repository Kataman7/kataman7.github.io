import React from 'react';
import styled from 'styled-components';
import MolSection from '../molecules/MolSection';
import MolTwoColumn from '../molecules/MolTwoColumn';
import AtmEcoBadge from '../atoms/AtmEcoBadge';
import AtmSignature from '../atoms/AtmSignature';

const FooterContainer = styled.footer`
  margin-top: 90px;
`;

const OrgFooter = ({ timeTitle }) => {
  return (
    <FooterContainer>
      <MolSection>
        <MolTwoColumn
          left={<AtmEcoBadge width="160px" />}
          right={<AtmSignature width="160px" alt="Signature" />}
        />
      </MolSection>
    </FooterContainer>
  );
};

export default OrgFooter;
