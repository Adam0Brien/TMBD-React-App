// import React from "react";
// import {createRoot} from "react-dom/client";
// import HomePage from "./pages/homePage";
// import sample from './stories/sampleData'
// import MovieDetailsPage from './pages/movieDetailsPage'


// const movies = [sample, sample, sample, sample, sample, sample, sample];

// const images = [
//   "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
//   "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
//   "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
//   "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
// ]

// const App = () => {
//   return (
//       <MovieDetailsPage movie={sample} images={images} />
//       );
// };

// const rootElement = createRoot( document.getElementById("root") )
// rootElement.render(<App /> );

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


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <SiteHeader />      {/* New Header  */}
      <Routes>
        <Route exact path="/movies/upcomming" element={<UpcommingMoviesPage />} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});