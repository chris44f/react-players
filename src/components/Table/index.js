import React, { Component } from 'react';
import './index.css';
import Player from '../Player'
import Options from '../Options'

// TODO: clicking on a row gives more detail on the right, with an image pop up also??!?
// TODO: allow more add details in add form if button 'more details' selected

class Table extends Component {

  state = {
    players: [],
    filteredPlayers: []
  }

  componentDidMount(){
    fetch('/db.json')
    .then( response => response.json())
    .then( json => this.setState({ players: json, filteredPlayers: json}))
  }

  handleClick = (i) => {
    const newPlayer = {
      firstname: i.firstNameInput,
      lastname: i.lastNameInput,
      sport: i.sportInput,
      club: i.clubInput,
      id: this.state.players.length + 1,
    }
    this.setState(
      {
        players: this.state.players.concat(newPlayer),
        filteredPlayers: this.state.filteredPlayers.concat(newPlayer),
      }
    )
  }

  nameFilter = (name) => {
    let filteredTable = this.state.players
    filteredTable = filteredTable.filter((player) => {
      return player.firstname.toLowerCase().includes(name.toLowerCase())
    })
    this.setState({filteredPlayers: filteredTable})
  }

  clubFilter = (club) => {
    const tableToFilter = this.state.players
    let filteredTable = tableToFilter.filter((player) => {
      return player.club.toLowerCase().includes(club.toLowerCase())
    })
    this.setState({filteredPlayers: filteredTable})
  }

  sportFilter = (sport) => {
    const tableToFilter = this.state.players
    let filteredTable = tableToFilter.filter((player) => {
      return player.sport.toLowerCase().includes(sport.toLowerCase())
    })
    this.setState({filteredPlayers: filteredTable})
  }

  render(){
    return(
      <div>
        <h1> Table to show sports players across the world </h1>
        <h3> Currently, there are {this.state.players.length} sportsmen documented
        within this table. </h3>
        <table>
          <thead>
            <th className="tableColumn">First Name</th>
            <th className="tableColumn">Last Name</th>
            <th className="tableColumn">Sport</th>
            <th className="tableColumn">Club</th>
          </thead>
          <tbody>
        {this.state.filteredPlayers.map(player => (
          <Player
            firstname={player.firstname}
            lastname={player.lastname}
            sport={player.sport}
            club={player.club}
            id={player.id}
          />
        ))}
        </tbody>
        </table>
        <Options
          onClick={this.handleClick}
          onChangeNameFilter={this.nameFilter}
          onChangeClubFilter={this.clubFilter}
          onChangeSportFilter={this.sportFilter}
        />
      </div>
    )
  }
}

export default Table;
