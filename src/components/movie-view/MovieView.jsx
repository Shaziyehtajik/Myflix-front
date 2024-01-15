import React from 'react';

class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.thumb} alt={`${movie.title} Poster`} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.description}</span>
        </div>
        <div className="movie-category">
          <span className="label">Category: </span>
          <span className="value">{movie.category}</span>
        </div>
        {/* Add more fields as needed, e.g., uuid, server, etc. */}
        <button onClick={() => onBackClick(null)}>Back</button>
      </div>
    );
  }
}

export default MovieView;
