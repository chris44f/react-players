import React, { Component } from 'react';
import './index.css';
import Player from '../Player/index.js'

// TODO: make the add player bit just a button at the side and then a form appears below the button with the inputs when clicked
// TODO: move the filter list to the right, and maybe have a summary button, i.e. "Filter?" then filter choices appear when clicked
// TODO: clicking on a row gives more detail on the right, with an image pop up also??!? how sick would that be

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

  addPlayer = () => {
    const newPlayer = {
      firstname: this.state.firstNameInput,
      lastname: this.state.lastNameInput,
      sport: this.state.sportInput,
      club: this.state.clubInput,
      id: this.state.players.length + 1,
    }
    this.setState(
      {
        players: this.state.players.concat(newPlayer),
        filteredPlayers: this.state.filteredPlayers.concat(newPlayer),
        firstNameInput: ""
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

  updateFirstName = (e) => this.setState({ firstNameInput: e })
  updateLastName = (event) => this.setState({ lastNameInput: event.target.value })
  updateSport = (event) => this.setState({ sportInput: event.target.value })
  updateCity = (event) => this.setState({ cityInput: event.target.value })
  updateClub = (event) => this.setState({ clubInput: event.target.value })

  render(){
    return(
      <div>
        <h1> Table to show sports players across the world </h1>
        <h3> Currently, there are {this.state.players.length} players documented
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
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateFirstName(event.target.value)}
        placeholder="Enter First Name"
        />
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateLastName(event)}
        placeholder="Enter Last Name"></input>
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateSport(event)}
        placeholder="Enter Sport"
        />
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateClub(event)}
        placeholder="Enter Club"
        />
        <button onClick={()=>this.addPlayer()}>Add sportsman</button>
        <h4>Filters:</h4>
        Filter by first name:
        <input
        className="filterInput"
        onChange={(event)=>this.nameFilter(event.target.value)}
        />
        <br />
        Filter by city:
        <input
        className="filterInput"
        onChange={(event)=>this.cityFilter(event.target.value)}
        />
        <br />
        Filter by sport:
        <input
        className="filterInput"
        onChange={(event)=>this.sportFilter(event.target.value)}
        />
      </div>
    )
  }
}

export default Table;
