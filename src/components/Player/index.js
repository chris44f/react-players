import React, { Component } from 'react';
import './index.css';

const Player = props => {
    return (
      <tr>
        <td className="tableColumn"> {props.firstname} </td>
        <td className="tableColumn"> {props.lastname} </td>
        <td className="tableColumn"> {props.sport} </td>
        <td className="tableColumn"> {props.club} </td>
      </tr>
    )
}

export default Player;
