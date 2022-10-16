
 const key = "80c07a94e81a6142e7dd02eaef22d442"

export const getMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key="+key+"&language=en-US&include_adult=false&page=1"
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        key +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  
  export const getMovieImages = (id) => {
    return fetch(
      "https://api.themoviedb.org/3/movie/${id}/images?api_key="+key
    )
      .then((res) => res.json())
      .then((json) => json.posters);
  };



// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//   )
//     .then(res => res.json())
//     .then(json => json.results);
// };

// export const getMovie = id => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then(res => res.json());
// };

// export const getGenres = () => {
//   return fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//       process.env.REACT_APP_TMDB_KEY +
//       "&language=en-US"
//   )
//     .then(res => res.json())
//     .then(json => json.genres);
// };

// export const getMovieImages = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then((res) => res.json())
//     .then((json) => json.posters);
// };
