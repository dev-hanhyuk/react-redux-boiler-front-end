import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './store'
import Routes from './routes'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
