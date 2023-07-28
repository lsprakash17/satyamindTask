import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data from the API and update the state
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.result);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.movie}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
          <p>Starring: {movie.stars}</p>
          <p>{movie.language}</p>
          <p>{movie.views} views | Voted by {movie.votes} People</p>
          <p>Votes: {movie.totalVotes}</p>
          <p>Watch Trailer</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
