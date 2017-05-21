import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
//test out the return es6
  handleChange(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        username: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit.bind(this)}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
          />
          <button 
            className="button"
            type="submit"
            disabled={!this.state.username}>
            Submit
            </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}


export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      playerOneName: '',
      playerTwoName: '',
      playerOneImg: null,
      playerTwoImg: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      let newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    })
  }

  render() {

    let { playerOneName, playerTwoName } = this.state;

    return (
      <div>
        <div className="row">
          {!playerOneName && 
            <PlayerInput 
              id='playerOne'
              label="Player One"
              onSubmit={this.handleSubmit}
              />}
          {!playerTwoName && 
            <PlayerInput
              id="playerTwo"
              label="PlayerTwo"
              onSubmit={this.handleSubmit}
              />}
        </div>
      </div>
    )
  }
}