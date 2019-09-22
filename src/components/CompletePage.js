import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

export class CompletePage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Details Submitted" />
          <h1>Thank you for your submission</h1>
          <p>You will shortly recieve a confirmation email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default CompletePage;
