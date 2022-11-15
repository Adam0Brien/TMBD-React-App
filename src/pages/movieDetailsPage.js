import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { Paper } from "@mui/material";


const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie} >
            <MovieDetails movie={movie} />
            <Paper movie={movie.video} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;