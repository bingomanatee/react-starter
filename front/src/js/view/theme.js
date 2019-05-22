import { createMuiTheme } from '@material-ui/core/styles';
import {BLUE_MED, BLUE, BLUE_DARK, BLUE_LIGHT, BLUE_VERY_LIGHT,
GREEN, GREEN_DARK, RED_ERROR,
  BODY_FONT_FAMILY
} from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: BLUE,
      light: BLUE_VERY_LIGHT,
      dark: BLUE_DARK
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: GREEN,
      dark: GREEN_DARK,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // error: will use the default color
    error: {
      main: RED_ERROR
    },
    typography: {
      fontFamily: BODY_FONT_FAMILY,
      fontSize: 16,
      htmlFontSize: 16,
    }
  },
});

export default theme;
