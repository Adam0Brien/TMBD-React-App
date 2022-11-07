import React from "react";
import { getUpcommingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";


const UpcommingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcomming', getUpcommingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const mustWatch = movies.filter(m => m.favourite)
  // localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  // const addToMustWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Upcomming Movies"
      movies={movies}
      action={(movie) => {
        return (
        <>
            <AddToMustWatchIcon movie={movie} />
        </>
  )}}
    />
);
};


export default UpcommingMoviesPage;