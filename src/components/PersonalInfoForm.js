import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 15,
  },
};

export class PersonalInfoForm extends Component {
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
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter your Age"
            floatingLabelText="Age"
            onChange={handleChange('age')}
            defaultValue={values.age}
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your Country"
            floatingLabelText="Country"
            onChange={handleChange('country')}
            defaultValue={values.country}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton label="Back" primary={true} style={styles.button} onClick={this.back} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default PersonalInfoForm;
