import React, { Component } from 'react';
// import { length, equals, compose } from 'ramda';
import { FormControl, Button } from 'react-bootstrap';




export default class Cep extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      cep: '',
      address: '',
    };
  }


  validationState(){
    const length = this.state.cep.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
  }


  render() {
    return (
      <div>
        <FormControl
          type="text"
          name="cep"
          value={this.state.cep}
          placeholder="CEP"
          onChange={this.onChange}
        />
      </div>
    )
  }
}
