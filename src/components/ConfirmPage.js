import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 15,
  },
};

export class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    // This is where code would be written to send to a database //
    this.props.nextStage();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStage();
  };
  render() {
    const {
      values: { firstName, lastName, email, age, city, country },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />

          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Second Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="County" secondaryText={country} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Submit"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ConfirmPage;
