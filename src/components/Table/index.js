import React, { Component } from 'react';
import './index.css';
import Player from '../Player/index.js'

class Table extends Component {
  state = {
    players: [
      {
        firstname: "First Name",
        lastname: "Last Name",
        sport: "Sport",
        club: "Club",
        city: "City",
        id: 1
      },
      {
        firstname: "Ben",
        lastname: "Simmons",
        sport: "Basketball",
        club: "76ers",
        city: "Philadelphia",
        id: 2
      },
      {
        firstname: "Joel",
        lastname: "Embiid",
        sport: "Basketball",
        club: "76ers",
        city: "Philadelphia",
        id: 3
      },
      {
        firstname: "Joel",
        lastname: "Campbell",
        sport: "Football",
        club: "Frosinone",
        city: "Lazio",
        id: 4
      },
      {
        firstname: "Sergej",
        lastname: "Milinkovic-Savic",
        sport: "Football",
        club: "S.S. Lazio",
        city: "Lazio",
        id: 5
      },
      {
        firstname: "Lebron",
        lastname: "James",
        sport: "Basketball",
        club: "Lakers",
        city: "Los Angeles",
        id: 6
      },
      {
        firstname: "Todd",
        lastname: "Gurley",
        sport: "American Football",
        club: "Rams",
        city: "Los Angeles",
        id: 7
      },
      {
        firstname: "Odell",
        lastname: "Beckham Jr",
        sport: "American Football",
        club: "Giants",
        city: "New York",
        id: 8
      },
      {
        firstname: "Aaron",
        lastname: "Ramsey",
        sport: "Football",
        club: "Arsenal",
        city: "London",
        id: 9
      },
      {
        firstname: "Eden",
        lastname: "Hazard",
        sport: "Football",
        club: "Chelsea",
        city: "London",
        id: 10
      },
      {
        firstname: "Aaron",
        lastname: "Rodgers",
        sport: "American Football",
        club: "Packers",
        city: "Green Bay",
        id: 11
      }
    ]
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

  londonFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.city === "London"){
            return player
          }
        })
      )
    }
  )

  losangFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.city === "Los Angeles"){
            return player
          }
        })
      )
    }
  )

  phileFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.city === "Philadelphia"){
            return player
          }
        })
      )
    }
  )

  joelFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.firstname === "Joel"){
            return player
          }
        })
      )
    }
  )

  aaronFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.firstname === "Aaron"){
            return player
          }
        })
      )
    }
  )

  footyFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.sport === "Football"){
            return player
          }
        })
      )
    }
  )

  basketFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.sport === "Basketball"){
            return player
          }
        })
      )
    }
  )

  americanFilter = () => this.setState(
    {
      players: (
        this.state.players.filter(player => {
          if(player.sport === "American Football"){
            return player
          }
        })
      )
    }
  )

  updateFirstName = (event) => this.setState({ firstNameInput: event.target.value })
  updateLastName = (event) => this.setState({ lastNameInput: event.target.value })
  updateSport = (event) => this.setState({ sportInput: event.target.value })
  updateCity = (event) => this.setState({ cityInput: event.target.value })
  updateClub = (event) => this.setState({ clubInput: event.target.value })

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
            londonFilter={this.londonFilter}
            losangFilter={this.losangFilter}
            phileFilter={this.phileFilter}
            joelFilter={this.joelFilter}
            aaronFilter={this.aaronFilter}
            footyFilter={this.footyFilter}
            basketFilter={this.basketFilter}
            americanFilter={this.americanFilter}
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
        <button onClick={()=>this.londonFilter()}>Filter by London</button>
        <button onClick={()=>this.losangFilter()}>Filter by Los Angeles</button>
        <button onClick={()=>this.phileFilter()}>Filter by Philadelphia</button>
        <button onClick={()=>this.joelFilter()}>Filter by Joels</button>
        <button onClick={()=>this.aaronFilter()}>Filter by Aarons</button>
        <button onClick={()=>this.footyFilter()}>Filter by Football</button>
        <button onClick={()=>this.basketFilter()}>Filter by Basketball</button>
        <button onClick={()=>this.americanFilter()}>Filter by American Football</button>
        {/* First Name<input list="name"></input>
        <datalist id="name">
          <option value={this.state.players[0].firstname}></option>
        </datalist>*/}
      </div>


    )
  }
}

export default Table;
