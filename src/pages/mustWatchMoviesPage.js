import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
//import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites";
import WriteReviewIcon from "../components/cardIcons/writeReview";
//import AddToMustWatch from "../components/cardIcons/addToMustWatch";




const MustWatchMoviesPage = () => {
  const {mustWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = mustWatchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;
  
  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <WriteReviewIcon movie={movie} />
          </>
        );
      }}
    />
  );
};


// return (
//     <PageTemplate
//       title="Discover Movies"
//       movies={movies}
//       action={(movie) => {
//         return <AddToMustWatch movie={movie} />
//       }}
//     />
// );
// };
export default MustWatchMoviesPage;