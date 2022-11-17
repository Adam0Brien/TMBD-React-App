import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../../api/tmdb-api";


export default function SimilarMovies({ movie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="movies table">
        <TableHead>
          <TableRow>
            <TableCell >Similar Movies</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((r) => (
            <TableRow key={r.id}>
                
             <TableCell component="th" scope="row">
              <Link
                  to={`/movies/${r.id}`}
                  state={{
                      movie: movie,
                  }}
                >
                 {r.title}
                </Link>
              </TableCell>
              <TableCell>{r.overview}</TableCell>
              <TableCell>{r.vote_average}/10</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
