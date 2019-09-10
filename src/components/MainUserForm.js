import React, { Component } from 'react';
import BasicInfoForm from './BasicInfoForm';
import PersonalInfoForm from './PersonalInfoForm';
import ConfirmPage from './ConfirmPage';

export class MainUserForm extends Component {
  state = {
    stage: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
  };

  // Proceed to next stage on form
  nextStage = () => {
    const { stage } = this.state;
    this.setState({
      stage: stage + 1,
    });
  };

  // Revert to previous stage on form
  prevStage = () => {
    const { stage } = this.state;
    this.setState({
      stage: stage - 1,
    });
  };

  // Handle change in form fields
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { stage } = this.state;
    const { firstName, lastName, email, city, country } = this.state;
    const values = { firstName, lastName, email, city, country };

    switch (stage) {
      case 1:
        return (
          <BasicInfoForm
            nextStage={this.nextStage}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>Personal Info Form</h1>;
      case 3:
        return <h1>Confirm Page</h1>;
      case 4:
        return <h1> Complete Page</h1>;

      // no default
    }
  }
}

export default MainUserForm;
