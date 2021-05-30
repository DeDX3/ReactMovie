import React from "react";
import ReactDOM from "react-dom";
import { MoviesData } from "./MoviesData";
import Movie from "./Components/Movie";
import "./index.css";

function App() {
  return (
    <>
      {MoviesData.map((movie) => {
        return (
          <>
            <Movie key={movie.id} {...movie} />
          </>
        );
      })}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
