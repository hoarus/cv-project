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
    this.addEntry = this.addEntry.bind(this);
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
    this.addEntry();
    this.props.saveData(this.state);
    event.preventDefault();
  }

  previousPage() {
    this.props.previousPage();
  }


  addEntry(){
    let entries = this.state.entries
    let entryID = this.nextID(entries);
    let newEntry = {
      id: entryID,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      details: ''}
    let newState = { current: newEntry,
      entries: this.state.entries.concat(this.state.current)
    }
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

 



  render(){
    // let ID = 0;
    let employmentEntries = this.state.entries
    let entriesFormatted = employmentEntries.map((entry)  => 
      <div key={entry.id}>
        <p key={entry.id.toString().concat(".1")}><strong>Company:</strong> {entry.company}</p>
        <p key={entry.id.toString().concat(".2")}><strong>Role: </strong> {entry.role}</p>
        <p key={entry.id.toString().concat(".3")}><strong>Start Date:</strong> {entry.startDate}</p>
        <p key={entry.id.toString().concat(".4")}><strong>End Date:</strong> {entry.endDate}</p>
        <p key={entry.id.toString().concat(".5")}><strong>Details:</strong> {entry.details}</p>
      </div>
    )
  
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}> 
        <h2> Add Employment Details </h2>
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
        <input className="formSubmit" type="submit" value="Save" />
      </form>
      <form onSubmit={this.handleSubmit}> 
      <h2> Existing Employment Details </h2>
        <div>{entriesFormatted}</div>
        <button onClick= {this.previousPage} className="formSubmit">Previous</button>
        <button onClick= {this.addEntry} className="formSubmit">Add Additional Employment Entry</button>
      </form>
    </Fragment>
    );
  }
}

export default Employment;

// employment details does not save - need to save to props and pull from props
// need to add edit button
// need to add delete button