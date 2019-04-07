import React, { Component } from 'react';
import AddForm from '../AddForm'
import Filters from '../Filters'
import './index.css'

class Options extends Component {

  state = {
    playerAddOn: false,
    filtersOn: false
  }

  handlePlayer = () => this.setState({playerAddOn: !this.state.playerAddOn})

  handleFilters = () => this.setState({filtersOn: !this.state.filtersOn})

  render() {

    let displayForm, displayFilters

    if (this.state.playerAddOn===true) { displayForm = <AddForm onClick={(i)=>this.props.onClick(i)}/>}
    if (this.state.filtersOn===true) { displayFilters =
      <Filters
        onChangeNameFilter={(i)=>this.props.onChangeNameFilter(i)}
        onChangeClubFilter={(i)=>this.props.onChangeClubFilter(i)}
        onChangeSportFilter={(i)=>this.props.onChangeSportFilter(i)}
        />}

    return(
      <div className="optionsWrapper">
        <button onClick={()=>this.handlePlayer()}>{ this.state.playerAddOn ? "Hide detail" : "Add Player"}</button>
        <br /> {displayForm} <br />
        <button onClick={()=>this.handleFilters()}>{ this.state.filtersOn ? "Hide filters" : "Filter table"}</button>
        <br /> {displayFilters} <br />
        <span>Alternatively, to view a player in more detail, click the player's name within the table</span>
        <br /><br />
      </div>
    )
  }
}

export default Options
