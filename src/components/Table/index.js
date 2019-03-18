import React, { Component } from 'react';
import './index.css';
import Player from '../Player/index.js'



class Table extends Component {
  state = {
    players: [
      {firstname: "First Name",
      lastname: "Last Name",
      sport: "Sport",
      club: "Club",
      city: "City",
      id: 1}
    ]
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/chris44f/react-players/')
    .then( response => response.json() )
    .then( data => console.log(JSON.parse(data)) )
  }

  addPlayer = () => this.setState(
    {
      players: (
        this.state.players.concat(
          {
            firstname: this.state.firstNameInput,
            lastname: this.state.lastNameInput,
            sport: this.state.sportInput,
            club: this.state.clubInput,
            city: this.state.cityInput,
            id: this.state.players.length + 1
          }
        )
      )
    }
  )

  cityFilter = (location) => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          for(let i=0, filter=""; i<player.city.length; i++){
            filter += player.city.charAt(i)
            if(filter === location){
              return player
            }
          }
        })
      )
    }
  )

  nameFilter = (name) => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          for(let i=0, filter=""; i<player.firstname.length; i++){
            filter += player.firstname.charAt(i)
            if(filter === name){
              return player
            }
          }
        })
      )
    }
  )

  sportFilter = (game) => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          for(let i=0, filter=""; i<player.sport.length; i++){
            filter += player.sport.charAt(i)
            if(filter === game){
              return player
            }
          }
        })
      )
    }
  )

  // genericButtonFilter = (game) => this.setState(
  //   {
  //     players: (
  //       this.state.players.filter(player => {
  //         if(player.sport === game){
  //           return player
  //         }
  //       })
  //     )
  //   }
  // )

  updateFirstName = (event) => this.setState({ firstNameInput: event.target.value })
  updateLastName = (event) => this.setState({ lastNameInput: event.target.value })
  updateSport = (event) => this.setState({ sportInput: event.target.value })
  updateCity = (event) => this.setState({ cityInput: event.target.value })
  updateClub = (event) => this.setState({ clubInput: event.target.value })

  updateCityFilter = (event) => this.cityFilter(event.target.value)
  updateNameFilter = (event) => this.nameFilter(event.target.value)
  updateSportFilter = (event) => this.sportFilter(event.target.value)

  render() {
    return(
      <div>
        <h1> Table to show sports players across the world </h1>
        <h3> Currently, there are {this.state.players.length} players documented
        within this table. </h3>
        {this.state.players.map(player => (
          <Player
            firstname={player.firstname}
            lastname={player.lastname}
            sport={player.sport}
            club={player.club}
            city={player.city}
            id={player.id}
            updateFirstName={this.updateFirstName}
            updateLastName={this.updateLastName}
            updateSport={this.updateSport}
            updateCity={this.updateCity}
            updateClub={this.updateClub}
            addPlayer={this.addPlayer}
            cityFilter={this.cityFilter}
            nameFilter={this.nameFilter}
            sportFilter={this.sportFilter}
            updateFilter={this.updateFilter}
          />
        ))}
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateFirstName(event)}
        defaultValue="Enter First Name"
        />
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateLastName(event)}
        defaultValue="Enter Last Name"></input>
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateSport(event)}
        defaultValue="Enter Sport"
        />
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateCity(event)}
        defaultValue="Enter City"
        />
        <input
        className="playerWrapperElement"
        onChange={(event)=>this.updateClub(event)}
        defaultValue="Enter Club"
        />
        <button onClick={()=>this.addPlayer()}>Add sportsman</button>
        <h4>Filters:</h4>
        Filter by first name:
        <input
        className="filterInput"
        onChange={(event)=>this.updateNameFilter(event)}
        />
        <br />
        Filter by city:
        <input
        className="filterInput"
        onChange={(event)=>this.updateCityFilter(event)}
        />
        <br />
        Filter by sport:
        <input
        className="filterInput"
        onChange={(event)=>this.updateSportFilter(event)}
        />
      </div>
    )
  }
}

export default Table;
