
export const themeOptions: any = {
  palette: {
    type: 'dark',
    primary: {
      main: '#299049',
    },
    secondary: {
      main: '#e85c37',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
  },
  overrides: {
    MuiSelect: {
      root: {
        borderBottom: 'none',
      },
    },
    MuiButton: {
      root: {
        background:
          'linear-gradient(45deg, #299049 30%, rgb(83, 166, 109) 90%)',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        textDecoration: 'none',
      },
    },
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
};