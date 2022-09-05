import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.saveRealTime(event.target.name, event.target.value)
  }
  handleSubmit(event) {
    this.props.nextPage();
    event.preventDefault();
  }



  render(){
    return (
      <form onSubmit={this.handleSubmit}> 
      <h2> General Details </h2>
      <div>{this.props.general.firstName} </div>
      <div className="flex-row">
        <div>
          <label>
            First Name: 
            <input type="text" name="firstName" value={this.props.general.firstName} onChange={this.handleChange} />        
          </label>
          <label>
            Last Name: 
            <input type="text" name="lastName" value={this.props.general.lastName} onChange={this.handleChange} />        
          </label>
          <label>
            Occupation: 
            <input type="text" name="occupation" value={this.props.general.occupation} onChange={this.handleChange} />        
          </label>
        </div>
        <div>
          <label>
            Address Line 1: 
            <input type="text" name="addressLine1" value={this.props.general.addressLine1} onChange={this.handleChange} />        
          </label>
          <label>
            Address Line 2: 
            <input type="text" name="addressLine2" value={this.props.general.addressLine2} onChange={this.handleChange} />        
          </label>
          <label>
            Town/City: 
            <input type="text" name="town" value={this.props.general.town} onChange={this.handleChange} />        
          </label>
          <label>
            State: 
            <input type="text" name="state" value={this.props.general.state} onChange={this.handleChange} />        
          </label>
          <label>
            Zip Code: 
            <input type="text" name="zipCode" value={this.props.general.zipCode} onChange={this.handleChange} />        
          </label>
          <label>
            Phone Number: 
            <input type="text" name="phone" value={this.props.general.phone} onChange={this.handleChange} />        
          </label>
          <label>
            Email Address: 
            <input type="text" name="email" value={this.props.general.email} onChange={this.handleChange} />        
          </label>
        </div>
      </div>    
      <input className="formSubmit" type="submit" value="Next" />
    </form>
    );
  }
}

export default General;


