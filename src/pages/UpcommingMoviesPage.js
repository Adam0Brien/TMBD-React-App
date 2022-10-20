import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcommingMovies } from "../api/tmdb-api";
import { getMovies } from "../api/tmdb-api";


const UpcommingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m,
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcommingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};
export default UpcommingMoviesPage;