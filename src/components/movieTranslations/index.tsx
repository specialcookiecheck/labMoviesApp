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

import { MovieDetailsProps, Translation } from "../../types/interfaces";

const styles = {
  table: {
    minWidth: 550,
  },
};

const MovieTransations: React.FC<MovieDetailsProps> = (movie) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    getMovieTranslations(movie.id).then((translations) => {
        //console.log("translations: " + translations);
      setTranslations(translations);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell>Translated Title</TableCell>
            <TableCell align="center">Translated Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {translations.map((t: Translation) => (
            <TableRow key={t.iso_3166_1}>
              <TableCell component="th" scope="row">
                {t.iso_639_1}-{t.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {t.data.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {t.data.overview}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieTransations;
