import React, { Component, Fragment } from 'react';

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employment: [ {
        id: 0,
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        details: ''
    }],
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.addEmploymentEntry = this.addEmploymentEntry.bind(this);
  }

  handleChange(event) {
    let employmentEntries = this.state.employment
    const newState = employmentEntries.map(obj => {
      // 👇️ if id equals 0, update that element of array
      if(obj.id === 0) {
          return {...obj, [event.target.name]: event.target.value};
      } else {
        return obj;
      }});
    this.setState(newState);
  };
  
  handleSubmit(event) {
    this.props.saveData(this.state);
    event.preventDefault();
  }

  previousPage() {
    this.props.previousPage();
  }

  addEmploymentEntry(){
    let employmentEntries = this.state.employment
    let entryID = employmentEntries.length;
    let newEntry = {
      id: entryID,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      details: ''}
    let newState = [...employmentEntries, newEntry];
    this.setState(newState);
  }




  render(){
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}> 
        <h2> Employment Details </h2>
        <div className="flex-row">
          <div>
            <label>
              Company: 
              <input type="text" name="company" value={this.state.employment.company} onChange={this.handleChange} />        
            </label>
            <label>
              Role: 
              <input type="text" name="role" value={this.state.employment.role} onChange={this.handleChange} />        
            </label>
            <label>
              Start Date: 
              <input type="date" name="startDate" value={this.state.employment.startDate} onChange={this.handleChange} />        
            </label>
          </div>
          <div>
            <label>
              End Date: 
              <input type="date" name="endDate" value={this.state.employment.endDate} onChange={this.handleChange} />        
            </label>
            <label>
              Details: 
              <textarea type="text" name="details" value={this.state.employment.details} onChange={this.handleChange} />        
            </label>
          </div>
        </div>    
        <input className="formSubmit" type="submit" value="Update" />
      </form>
      <form onSubmit={this.handleSubmit}> 
        <button onClick= {this.previousPage} className="formSubmit">Previous</button>
        <button onClick= {this.addEmploymentEntry} className="formSubmit">Add Additional Employment Entry</button>
      </form>
    </Fragment>
    );
  }
}

export default Employment;


