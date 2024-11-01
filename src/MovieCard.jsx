import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <Card className="movie-card" style={{ width: "18rem" }}>
      <div className="movie-image-wrapper">
        <Card.Img className="movie-image" variant="top" src={movie.Poster} />
      </div>
      <Card.Body>
        <Card.Title className="movie-title">{movie.Title}</Card.Title>
        <Card.Text className="movie-year">{movie.Year}</Card.Text>
        <Button variant="primary" onClick={() => addToFavorites(movie.imdbID)}>
          add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

// <div className="movie-card">
// <img src={movie.Poster} alt={`${movie.Title} Poster`} />
// <h3>{movie.Title}</h3>
// <p>{movie.Year}</p>
// <button onClick={() => addToFavorites(movie.imdbID)}>
//   Add to Favorites
// </button>
// </div>
