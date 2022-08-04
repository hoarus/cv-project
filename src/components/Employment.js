import React, { Component } from 'react';

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
  }

  handleChange(event) {
    let stateSnapshot = this.state
    const newState = stateSnapshot.employment.map(obj => {
      // 👇️ if id equals 0, update that element of array
      if(obj.id === 0) {
          return {...obj, [event.target.name]: event.target.value};
      } else {
        return obj;
      }});

    this.setState(newState);
    console.log(this.state);
  };
  
  handleSubmit(event) {
    this.props.saveData(this.state);
    event.preventDefault();
  }

  previousPage() {
    this.props.previousPage();
  }



  render(){
    return (
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
      <input className="formSubmit" type="submit" value="Next" />
      <button onClick= {this.previousPage} className="formSubmit">Previous</button>
      {/* Need to add a button which goes backwards */}
    </form>
    );
  }
}

export default Employment;


