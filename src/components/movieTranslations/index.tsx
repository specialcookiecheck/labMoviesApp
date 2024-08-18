import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import { Link } from "react-router-dom";
import { getMovieTranslations } from "../../api/tmdb-api";
//import { excerpt } from "../../util";

import { MovieTranslationsProps, Translation } from "../../types/interfaces";

const styles = {
  table: {
    minWidth: 550,
  },
};

const MovieTransations: React.FC<MovieTranslationsProps> = (movie) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    getMovieTranslations(movie.id).then((translations) => {
      setTranslations(translations);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {translations.map((t: Translation) => (
            <TableRow key={t.id}>
              <TableCell component="th" scope="row">
                {t.translations[1].name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieTransations;
