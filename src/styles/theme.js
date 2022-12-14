import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';

const MuiTheme = createTheme(
  {
    breakpoints: {
      values: {
        sm: 375,
        md: 768,
        lg: 1280,
      },
    },
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#87A2FB',
        contrastText: '#FFF5E4',
      },
      secondary: {
        main: '#ECC5FB',
        contrastText: '#FFF5E4',
      },
    },
  },
  esES,
);

export default MuiTheme;
