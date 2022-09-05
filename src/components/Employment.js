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
  }

  handleChange(event) {
    this.props.saveRealTime(event.target.name, event.target.value)
  };
  
  handleSubmit(event) {
    this.props.saveData();
    event.preventDefault();
  }

  previousPage() {
    this.props.previousPage();
  }

  render(){
    let employmentEntries = this.props.employment.entries

    // Formated employment entries
    let entriesFormatted = employmentEntries.map((entry)  => 
      <div key={entry.id}>
        <p key={entry.id.toString().concat(".1")}><strong>Company:</strong> {entry.company}</p>
        <p key={entry.id.toString().concat(".2")}><strong>Role: </strong> {entry.role}</p>
        <p key={entry.id.toString().concat(".3")}><strong>Start Date:</strong> {entry.startDate}</p>
        <p key={entry.id.toString().concat(".4")}><strong>End Date:</strong> {entry.endDate}</p>
        <p key={entry.id.toString().concat(".5")}><strong>Details:</strong> {entry.details}</p>
      </div>
    )
    let current = this.props.employment.current
  
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}> 
        <h2> Add Employment Details </h2>
        <div className="flex-row">
          <div>
            <label>
              Company: 
              <input type="text" name="company" value={current.company} onChange={(e) => this.handleChange(e)} />        
            </label>
            <label>
              Role: 
              <input type="text" name="role" value={current.role} onChange={(e) => this.handleChange(e)}   />        
            </label>
            <label>
              Start Date: 
              <input type="date" name="startDate"  value={current.startDate} onChange={(e) => this.handleChange(e)}  />        
            </label>
          </div>
          <div>
            <label>
              End Date: 
              <input type="date" name="endDate"  value={current.endDate} onChange={(e) => this.handleChange(e)} />        
            </label>
            <label>
              Details: 
              <textarea type="text" name="details"  value={current.details} onChange={(e) => this.handleChange(e)} />        
            </label>
          </div>
        </div>    
        <input className="formSubmit" type="submit" value="Save" />
      </form>
      <form onSubmit={this.handleSubmit}> 
      <h2> Existing Employment Details </h2>
        <div>{entriesFormatted}</div>
        <button onClick= {this.previousPage} className="formSubmit">Previous</button>
      </form>
    </Fragment>
    );
  }
}

export default Employment;

// need to add edit button
// need to add delete button