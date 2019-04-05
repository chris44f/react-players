import React, { Component } from 'react';
import './index.css';

class Player extends Component {
  render() {
    return (
      <tr>
        <td className="tableColumn"> {this.props.firstname} </td>
        <td className="tableColumn"> {this.props.lastname} </td>
        <td className="tableColumn"> {this.props.sport} </td>
        <td className="tableColumn"> {this.props.club} </td>
      </tr>
    )
  }
}

export default Player;
