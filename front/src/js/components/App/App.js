import React, {Component} from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../view/theme';

export default class App extends Component {
  render () {
    return <MuiThemeProvider theme={theme}>
      <h1>Welcome To TaskFun!</h1>
      </MuiThemeProvider>
  }
}
git
