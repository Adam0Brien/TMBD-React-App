import SiteHeader from './components/siteHeader'
import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import UpcommingMoviesPage from './pages/UpcommingMoviesPage'; //new
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage"; // NEW
import TrendingMoviesPage from './pages/trendingMoviesPage';





const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route exact path="/movies/upcomming" element={<UpcommingMoviesPage />} />
        <Route exact path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/trending" element={<TrendingMoviesPage />} />
        
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        
            </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});