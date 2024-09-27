import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    console.log("Constructor Invoked");
    super();
    this.state ={ 
      //insert heart or default state for username, image, and profile url here !
      users: [],
      img: [],
      profile: []

    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/JoeKrapsicher")
      .then(res=> {
        this.setState(({
          ...this.state,
          users: res.data.name,
          img: res.data.avatar_url,
          profile: res.data.login
        }))
      })
      .catch(err=> console.log(err))
  }
  render() {
    console.log("Render Invoked!")
    console.log("logging state", this.state);
    console.log("logging img", this.state.img)

    return(
      <div className="App">
        <h1>Hello World Boiii</h1>
        <div className="card">
          <img width="200" key={this.state.img} src={this.state.img}/>
          <div className="Text">
            <p >{this.state.users}</p>
            <p>@{this.state.profile}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
