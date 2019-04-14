import React, { Component } from 'react'
import './styles.css'
import logo from '../../image/logo.svg'

import api from '../../services/api'

export default class componentName extends Component {
  state = {
    newBox: '',
  }

  handleSubmit = async e => {
    //previne comportamento padrão do navegador
    e.preventDefault()
    //console.log(this.state.newBox)

    const response = await api.post('boxes', {
      title: this.state.newBox,
    });
    //console.log(response.data)

    this.props.history.push(`/box/${response.data._id}`)


  }

  // informa alterações dentro do estado(state)
  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value })
  }



  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input 
          placeholder="Criar um box"
          value={this.state.newBox}
          onChange={this.handleInputChange}

          />
          <button type="submit">Criar</button>
        </form>
      </div>
    )
  }
}



