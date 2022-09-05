import React, { Component } from 'react';
import General from './components/General';
import Employment from './components/Employment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      general: {
        firstName: '',
        lastName: '',
        occupation: '',
        addressLine1: '',
        addressLine2: '',
        town: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
      }
    };
    this.receiveGeneralData = this.receiveGeneralData.bind(this);
    this.CurrentPage = this.CurrentPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }


  // Method to receive general data in real time

  receiveGeneralData = (key, value) => {
    const updatedEntry = {...this.state.general, [key]: value};
    let newState = {...this.state,
      general: updatedEntry
    }
    this.setState(newState);
  }

  previousPage = () => {
    this.setState((state) => ({
      currentPage: state.currentPage - 1
    }));
  }

  nextPage = () => {
    this.setState((state) => ({
      currentPage: state.currentPage + 1
    }));
  }


  receiveEmploymentData = (childData) =>{
    this.setState({
      general: {
        firstName: childData.firstName,
        lastName: childData.lastName,
        occupation: childData.occupation,
        addressLine1: childData.addressLine1,
        addressLine2: childData.addressLine2,
        town: childData.town,
        state: childData.state,
        zipCode: childData.zipCode,
        phone: childData.phone,
        email: childData.email,
      },
    });
  }



   CurrentPage = () => {
    switch(this.state.currentPage) {
      case 0:
        return <General nextPage = { this.nextPage } saveRealTime = {this.receiveGeneralData} general = { this.state.general } ></General>;
      case 1:
        return <Employment saveData = { this.receiveEmploymentData } previousPage = { this.previousPage }></Employment>;
      default:
        return <General saveData = { this.receiveGeneralData }></General>;
    }
  }

  render(){
    return (
      <div className="App">
        <h1> CV Builder </h1>
        <h2> {this.state.currentPage} </h2>
        <this.CurrentPage/>
      </div>
    );
    }
}

export default App;
