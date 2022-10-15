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


import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );