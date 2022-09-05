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
        email: ''},
      employment: {    
        current: {
          id: 0,
          company: '',
          role: '',
          startDate: '',
          endDate: '',
          details: ''},
        entries : []}
      };
    this.receiveGeneralData = this.receiveGeneralData.bind(this);
    this.CurrentPage = this.CurrentPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addEmploymentEntry = this.addEmploymentEntry.bind(this);
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
      employment: childData,
    });
  }

  receiveEmploymentCurrent = (key, value) => {
    const updatedEntry = {...this.state.employment.current, [key]: value};
    let newState = {...this.state,
      employment: {...this.state.employment, current: updatedEntry }
    }
    this.setState(newState);
  }

  addEmploymentEntry = () => {
    let entries = this.state.employment.entries
    let entryID = this.nextID(entries);
    let newEntry = {
      id: entryID,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      details: ''}
    let updatedEntries = entries.concat(this.state.employment.current)
    let newState = {...this.state, 
      employment: {entries: updatedEntries, current: newEntry}}
    this.setState(newState);
  }

  nextID(entries) {
    if (entries.length === 0) {
      return 1;
    } else {
      let lastEntry = entries.slice(-1)
      return lastEntry.id +1;
    }
  }

  receiveEmploymentEntries = (entries, newID) => {
    let newState = {...this.state,
      employment: {...this.state.employment, entries: entries }
    }
    this.setState(newState);
    console.log(this.state.employment)
  }



   CurrentPage = () => {
    switch(this.state.currentPage) {
      case 0:
        return <General nextPage = { this.nextPage } saveRealTime = {this.receiveGeneralData} general = { this.state.general } ></General>;
      case 1:
        return <Employment saveData = { this.addEmploymentEntry } saveRealTime = { this.receiveEmploymentCurrent }
         previousPage = { this.previousPage } employment = {this.state.employment} ></Employment>;
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
