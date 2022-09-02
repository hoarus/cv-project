import React, { Component, Fragment } from 'react';

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        id: 0,
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        details: ''},
      entries : []
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.addEmploymentEntry = this.addEmploymentEntry.bind(this);
  }

  handleChange(event) {
    const updatedEntry = {...this.state.current, [event.target.name]: event.target.value};
    console.log(updatedEntry);
    let newState = {...this.state,
      current: updatedEntry
    }
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
    let employmentEntries = this.state.entries
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
    let ID = 0;
    let employmentEntries = this.state.entries
    let entriesFormatted = employmentEntries.map((entry)  => 
      <div>
        <p><strong>Company:</strong> {entry.company}</p>
        <p><strong>Role: </strong> {entry.role}</p>
        <p><strong>Start Date:</strong> {entry.startDate}</p>
        <p><strong>End Date:</strong> {entry.endDate}</p>
        <p><strong>Details:</strong> {entry.details}</p>
      </div>
    )
  
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}> 
        <h2> Employment Details </h2>
        <div className="flex-row">
          <div>
            <label>
              Company: 
              <input type="text" name="company" value={this.state.current.company} onChange={(e) => this.handleChange(e)} />        
            </label>
            <label>
              Role: 
              <input type="text" name="role" value={this.state.current.role} onChange={(e) => this.handleChange(e)}   />        
            </label>
            <label>
              Start Date: 
              <input type="date" name="startDate"  value={this.state.current.startDate} onChange={(e) => this.handleChange(e)}  />        
            </label>
          </div>
          <div>
            <label>
              End Date: 
              <input type="date" name="endDate"  value={this.state.current.endDate} onChange={(e) => this.handleChange(e)} />        
            </label>
            <label>
              Details: 
              <textarea type="text" name="details"  value={this.state.current.details} onChange={(e) => this.handleChange(e)} />        
            </label>
          </div>
        </div>    
        <input className="formSubmit" type="submit" value="Update" />
      </form>
      <form onSubmit={this.handleSubmit}> 
        <p>{entriesFormatted}</p>
        <button onClick= {this.previousPage} className="formSubmit">Previous</button>
        <button onClick= {this.addEmploymentEntry} className="formSubmit">Add Additional Employment Entry</button>
      </form>
    </Fragment>
    );
  }
}

export default Employment;

// Next Steps - Save the being-edited company separately in State
// When you press "Update", add that company to state