import React, { Component } from 'react';

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value}
    );  
  }
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
            First Name: 
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />        
          </label>
          <label>
            Last Name: 
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />        
          </label>
          <label>
            Occupation: 
            <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />        
          </label>
        </div>
        <div>
          <label>
            Address Line 1: 
            <input type="text" name="addressLine1" value={this.state.addressLine1} onChange={this.handleChange} />        
          </label>
          <label>
            Address Line 2: 
            <input type="text" name="addressLine2" value={this.state.addressLine2} onChange={this.handleChange} />        
          </label>
          <label>
            Town/City: 
            <input type="text" name="town" value={this.state.town} onChange={this.handleChange} />        
          </label>
          <label>
            State: 
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />        
          </label>
          <label>
            Zip Code: 
            <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />        
          </label>
          <label>
            Phone Number: 
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />        
          </label>
          <label>
            Email Address: 
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />        
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


