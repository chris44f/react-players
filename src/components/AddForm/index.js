import React, { Component } from 'react';

  class AddForm extends Component {

    state = {
      firstNameInput: "",
      lastNameInput: "",
      sportInput: "",
      clubInput: ""
    }

    updateFirstName = (e) => this.setState({ firstNameInput: e.target.value })
    updateLastName = (e) => this.setState({ lastNameInput: e.target.value })
    updateSport = (e) => this.setState({ sportInput: e.target.value })
    updateClub = (e) => this.setState({ clubInput: e.target.value })

    render() {
      return(
        <div className="newPlayer">
          <br />
          <input
          onChange={(e)=>this.updateFirstName(e)}
          placeholder="Enter First Name"
          />
          <br />
          <input
          onChange={(e)=>this.updateLastName(e)}
          placeholder="Enter Last Name"
          />
          <br />
          <input
          onChange={(e)=>this.updateSport(e)}
          placeholder="Enter Sport"
          />
          <br />
          <input
          onChange={(e)=>this.updateClub(e)}
          placeholder="Enter Club"
          />
          <br />
          <button onClick={()=>this.props.onClick(this.state)}>Add sportsman</button>
        </div>
      )
    }

}

export default AddForm
