import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";
import api from "../../services/api";

class App extends Component {

  state = {
    planets: {},
    id: 0
  };

  async componentDidMount() {
    const id = Math.floor(Math.random() * 61) + 1;
    const { data } = await api.get(`planets/${id}`);
    this.setState({ planets: data, id: id });
  }

  handleClick = async (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 61) + 1;
    const { data } = await api.get(`planets/${id}`);
    this.setState({ planets: data, id: id });
  }

  render() {

    const { planets } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>{planets.name}</p>
          <p>{planets.population}</p>
          <p>{planets.climate}</p>
          <p>{planets.terrain}</p>
          <button onClick={this.handleClick}>PROXIMO</button>
        </header>
      </div>
    );
  }
}

export default App;
