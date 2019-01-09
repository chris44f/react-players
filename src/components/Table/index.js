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
            firstname: "New",
            lastname: "Player",
            sport: "Sport",
            club: "Club",
            city: "City",
            id: this.state.players.length + 1
          }
        )
      )
    }
  )

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
            addPlayer={this.addPlayer}
          />
        ))}
        <input className="playerWrapperElement" value="Enter First Name"></input>
        <input className="playerWrapperElement" value="Enter Last Name"></input>
        <input className="playerWrapperElement" value="Enter Sport"></input>
        <input className="playerWrapperElement" value="Enter City"></input>
        <input className="playerWrapperElement" value="Enter Club"></input>
        <button onClick={()=>this.addPlayer()}>Add sportsman</button>
        <h4>Filters:</h4>
        First Name<input list="name"></input>
        <datalist id="name">
          <option value="todd"></option>
        </datalist>
      </div>

    )
  }
}

export default Table;
