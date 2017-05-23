import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
  
}

export default class Loading extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    let stopper = this.props.text + '...';
    this.interval = setInterval(() => {
      if (this.state.text == stopper) {
        this.setState(() => {return {text: this.props.text}})
      } else {
        this.setState((prev) => {return {text: prev.text + '.'}})
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <p style={styles.content}>
          {this.state.text}
        </p>
      </div>
    )
  }
}

Loading.PropTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}