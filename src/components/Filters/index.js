import React, { Component } from 'react';

class Filters extends Component {

  render(){
    return(
      <div>
        <br />
        Filter by first name:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeNameFilter(e.target.value)}
        />
        <br />
        Filter by club:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeClubFilter(e.target.value)}
        />
        <br />
        Filter by sport:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeSportFilter(e.target.value)}
        />
      </div>
    )
  }
}

export default Filters
