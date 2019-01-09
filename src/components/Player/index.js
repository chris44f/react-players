import React, { Component } from 'react';
import './index.css';

class Player extends Component {
  render() {
    return (
      <div>
        <div className="playerWrapperElement"> {this.props.firstname} </div>
        <div className="playerWrapperElement"> {this.props.lastname} </div>
        <div className="playerWrapperElement"> {this.props.sport} </div>
        <div className="playerWrapperElement"> {this.props.city} </div>
        <div className="playerWrapperElement"> {this.props.club} </div>
      </div>
    )
  }
}

export default Player;
