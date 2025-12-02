export const portfolioTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#e1e1e1',
    accent: '#141414',
    background: '#000000',
    hovered: '#ffffff',
  },
  spacing: {
    xs: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    xl: '25px',
    xxl: '50px',
    section: '30px', // Espacement entre sections
  },
  fontSize: {
    small: '20px', // ~14px * 1.4
    medium: '25px', // ~18px * 1.4
    large: '31px', // ~22px * 1.4
    xl: '39px', // ~28px * 1.4
    xxl: '53px', // ~38px * 1.4
  },
  lineHeight: {
    small: '27px',
  },
  sizes: {
    mediaMaxWidth: '800px',
    iframeHeight: '450px',
  },
  listStyleType: 'square',
  layout: {
    leftWidth: '20%'
  },
  border: {
    normal: '2px',
  },
  borderRadius: {
    normal: '0px',
  },
  boxShadow: {
    button: '2px 2px #000000, 4px 4px #ffffff',
    buttonHover: '0px 0px',
  },
  fontFamily: "'Jersey20', 'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'",
  selection: {
    background: '#ffffff',
    color: '#000000'
  },
};

export const lightTheme = {
  colors: {
    primary: '#000000',
    secondary: '#333333',
    accent: '#666666',
    background: '#ffffff',
    hovered: '#000000',
  },
  spacing: {
    xs: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    xl: '25px',
    xxl: '50px',
    section: '30px', // Espacement entre sections
  },
  fontSize: {
    small: '16px', // ~14px * 1.16
    medium: '21px', // ~18px * 1.16
    large: '26px', // ~22px * 1.16
    xl: '32px', // ~28px * 1.16
    xxl: '44px', // ~38px * 1.16
  },
  lineHeight: {
    small: '22px',
  },
  sizes: {
    mediaMaxWidth: '800px',
    iframeHeight: '450px',
  },
  layout: {
    leftWidth: '20%'
  },

  listStyleType: 'disc',
  border: {
    normal: '2px',
  },
  borderRadius: {
    normal: '3px',
  },
  boxShadow: {
    button: '2px 2px #ffffff, 3.5px 3.5px #000000',
    buttonHover: '0px 0px',
  },
  fontFamily: "'Chillax', 'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'",
  selection: {
    background: '#000000',
    color: '#ffffff'
  },
};

export const themes = {
  portfolio: portfolioTheme,
  light: lightTheme,
};