import React, { Component } from 'react';

class Filters extends Component {

  render(){
    return(
      <div className="filters">
        <br />
        Filter by first name:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeNameFilter(e.target.value)}
        placeholder="Type here..."
        />
        <br />
        Filter by club:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeClubFilter(e.target.value)}
        placeholder="Type here..."
        />
        <br />
        Filter by sport:
        <input
        className="filterInput"
        onChange={(e)=>this.props.onChangeSportFilter(e.target.value)}
        placeholder="Type here..."
        />
      </div>
    )
  }
}

export default Filters
