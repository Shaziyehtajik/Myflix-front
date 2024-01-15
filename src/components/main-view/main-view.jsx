import React, { Component } from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    // Assuming movies.json is in the root of your project
    axios.get('/videos.json')  
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  renderMovieCards() {
    const { movies } = this.state;
    return movies.map(movie => (
      <MovieCard key={movie._id} movie={movie} onMovieClick={() => this.setSelectedMovie(movie)} />
    ));
  }

  render() {
    const { selectedMovie, movies } = this.state;

    return (
      <div className='main-view'>
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => this.setSelectedMovie(newSelectedMovie)} />
          : (movies.length === 0
            ? <div>No movies available.</div>
            : this.renderMovieCards())
        }
      </div>
    );
  }
}

export default MainView;
