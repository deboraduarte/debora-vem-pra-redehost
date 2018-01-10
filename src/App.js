import React, { Component } from 'react';
import './App.css';
import LinesMap from './LinesMap.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {
        FormControl,
        Button,
        PageHeader,
        FormGroup,
        Form,
        ControlLabel,
        Col,
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
      <ReactCSSTransitionGroup transitionName="fadein" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
          <LinesMap />
          <Col md={12} lg={12} sm={12} xs={12} >
            <Col md={6} lg={6} mdOffset={3}lgOffset={3}>
              <PageHeader>
                Location API
                <br />
                <small>
                  Selecione o que deseja saber
                </small>
              </PageHeader>
            </Col>

            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
                <FormGroup controlId="cep">
                  <ControlLabel>
                    Desejo saber o Endereço do seguinte CEP:
                  </ControlLabel>
                  <FormControl
                    type="text"
                    name="cep"
                    value={this.state.cep}
                    placeholder="CEP"
                    onChange={this.onChange.bind(this)}/>
                  <span className="underline"></span>
                </FormGroup>
              </Col>

              <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
                <FormGroup controlId="uf">
                  <ControlLabel>
                    Selecione o estado:
                  </ControlLabel>
                  <FormControl
                    type="text"
                    name="uf"
                    value={this.state.uf}
                    placeholder="Estado"
                    onChange={this.onChange.bind(this)}/>
                  <span className="underline"></span>
                </FormGroup>
              </Col>

              <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
                <FormGroupcontrolId="city">
                  <ControlLabel>
                    Cidade:
                  </ControlLabel>
                  <FormControl
                    type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="Cidade"
                    onChange={this.onChange.bind(this)} />
                  <span className="underline"></span>
                </FormGroup>
              </Col>

              <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
                <FormGroup controlId="stret">
                  <ControlLabel>
                    Rua:
                  </ControlLabel>
                  <FormControl
                    type="text"
                    name="street"
                    value={this.state.street}
                    placeholder="Rua"
                    onChange={this.onChange.bind(this)} />
                  <span className="underline"></span>
                </FormGroup>
              </Col>
              <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
                <Button bsSize="large" bsStyle="primary" type="submit">
                  Enviar
                </Button>
              </Col>
            </Form>
          </Col>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
