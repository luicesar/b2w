import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import { Container, Box, Button, Logo, Section } from "./style";
import "font-awesome/css/font-awesome.css";
import api from "../../services/api";

class App extends Component {
  state = {
    id: 0,
    planets: {},
    qtdeFilms: 0,
    loading: false
  };

  async componentDidMount() {
    const id = Math.floor(Math.random() * 61) + 1;

    this.setState({ loading: true });
    const { data } = await api.get(`planets/${id}`);

    this.setState({
      id: id,
      planets: data,
      loading: false,
      qtdeFilms: data.films.length
    });
  }

  handleClick = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const id = Math.floor(Math.random() * 61) + 1;
      const { data } = await api.get(`planets/${id}`);

      this.setState({ id: id, planets: data, qtdeFilms: data.films.length });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { planets, loading, qtdeFilms } = this.state;

    return (
      <Container>
        <Logo src={logo} alt="logo" />
        <Box>
          <Section>
            <h1>Planet {planets.name}</h1>
            <div className="item">Population: {planets.population}</div>
            <div className="item">Climate: {planets.climate}</div>
            <div className="item">Terrain: {planets.terrain}</div>
            <div className="item">Featured in {qtdeFilms} films</div>
          </Section>
        </Box>

        <Button onClick={this.handleClick}>
          {loading ? <i className="fa fa-spinner fa-pulse" /> : "NEXT"}
        </Button>
      </Container>
    );
  }
}

export default App;
