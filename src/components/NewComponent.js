import React, { Component } from 'react'

// const ranks = [
//   "Castle",
//   "Knight",
//   "Bishop",
//   "Queen",
//   "King"
// ];


class NewComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentAge : this.props.ranks
    }
  }

  LevelUp = () => {
    // alert(`Level Up ${this. props.name}`)    
    this.setState({currentAge: this.state.currentAge+1})
  }

  render() {
    return (
      <div className = "card col-sm-6">
        <div className="card-body">
          <h1 className = "card-title">{this.props.name}</h1>
          <p className = "card-text">Age: {this.state.currentAge}</p>
          <p className = "card-text">Hair Color: {this.props.color}</p>

          <button onClick = {this.LevelUp} style = {{color: "pink"}}>Birthday Button for {this.props.name} </button>
        </div>
      </div>
    );
  }
}


export default NewComponent 