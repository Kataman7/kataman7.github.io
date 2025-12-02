import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small};
  text-align: justify;
  margin-bottom: ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colors.primary};
`;

const StyledListItem = styled.li`
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small};
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colors.primary};
`;

const AtmText = ({ as = 'p', children, ...props }) => {
  if (as === 'li') {
    return <StyledListItem {...props}>{children}</StyledListItem>;
  }
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default AtmText;