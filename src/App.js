import React, { Component } from 'react';
import './App.css';
import Cep from './Cep.js';

import {
        FormControl,
        Button,
        PageHeader,
        FormGroup,
        ControlLabel,
        Col
      } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
    state = {
      cep: '',
      uf: '',
      street: '',
      city: '',
      address: '',
    };

  onChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.cep){
      axios
          .get(`http://viacep.com.br/ws/${this.state.cep}/json/`)
          .then(response => {
            this.setState({
              uf: response.data.uf,
              city: response.data.localidade,
              street: response.data.logradouro + response.data.complemento,
            });
          })
        .catch(error => console.error(error));
    }else {
      axios
          .get(`http://viacep.com.br/ws/${this.state.uf}/${this.state.city}/${this.state.street}/json/`)
          .then(response => {
            this.setState({
              cep: response.data.map((data,cep) => {
                return data.cep;
              }),
            });
          })
        .catch(error => console.error(error));
    }

    }

  render() {
    return (
      <div className="App">
        <Col
          md={6}
          sm={6}
          xs={6} >

          <PageHeader>
            Location API
            <small>
              Selecione o que deseja saber
            </small>
          </PageHeader>

          <FormGroup
            controlId="cep"
          >
            <ControlLabel>
              Desejo saber o Endereço do seguinte CEP:
            </ControlLabel>
            <FormControl
              type="text"
              name="cep"
              value={this.state.cep}
              placeholder="CEP"
              onChange={this.onChange.bind(this)}
            />
          </FormGroup>

          <FormGroup
            controlId="uf">

            <ControlLabel>
              Selecione o estado:
            </ControlLabel>
            <FormControl
              type="text"
              name="uf"
              value={this.state.uf}
              placeholder="Estado"
              onChange={this.onChange.bind(this)}
            />
          </FormGroup>
          <FormGroup
            controlId="city">

            <ControlLabel>
              Cidade:
            </ControlLabel>
            <FormControl
              type="text"
              name="city"
              value={this.state.city}
              placeholder="Cidade"
              onChange={this.onChange.bind(this)}
            />
          </FormGroup>
          <FormGroup
            controlId="stret">

            <ControlLabel>
              Rua:
            </ControlLabel>
            <FormControl
              type="text"
              name="street"
              value={this.state.street}
              placeholder="Rua"
              onChange={this.onChange.bind(this)}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}> Enviar </Button>
        </Col>


      </div>
    );
  }
}

export default App;
