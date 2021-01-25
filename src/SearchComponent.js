import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent";

const SearchComponent = (props) => {
  const [query, setQuery] = useState("");
  const [movies, setMovie] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=1b09d3324c43d43fd3facfd973d35db5&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.results)
      setMovie(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchComponent;
