import React, { Component } from 'react';
import './App.css';
import BasicInfoForm from './components/BasicInfoForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicInfoForm />
      </div>
    );
  }
}

export default App;
