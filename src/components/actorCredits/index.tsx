import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getActorCredits } from "../../api/tmdb-api";
//import { excerpt } from "../../util";

import { ActorCreditsProps, Credit} from "../../types/interfaces"; // Import the ActorT type from the appropriate location

const styles = {
  table: {
    minWidth: 550,
  },
};

const ActorCredits: React.FC<ActorCreditsProps> = (actor) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getActorCredits(actor.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Production</TableCell>
            <TableCell>Character Name</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">Movie Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((c: Credit) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                {c.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {c.character}
              </TableCell>
              <TableCell component="th" scope="row">
                {c.overview}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link
                  to={`/movies/${c.id}`}
                >
                  Open
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActorCredits;
