import React from "react";

const Movie = (props) => {
  const showMovieDetails = (movieName, Moviedirector) => {
    alert(`Name: ${movieName} Director: ${Moviedirector} `);
  };

  const { img, name, director } = props;

  return (
    <>
      <div className="movie" onClick={() => showMovieDetails(name, director)}>
        <div className="img-wrap">
          <img src={img} alt={name} />
        </div>
        <div className="movie-info">
          <h3>{name}</h3>
          <h4>{director}</h4>
        </div>
      </div>
    </>
  );
};

export default Movie;
