import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStage();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStage();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ConfirmPage;
