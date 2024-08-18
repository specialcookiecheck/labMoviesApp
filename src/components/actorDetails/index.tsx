import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorCredits from "../actorCredits";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails: React.FC<ActorDetailsProps> = (actor) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<ZoomOutMapIcon />} label={`${actor.place_of_birth}`} />
        <Chip
          icon={<AccessTimeIcon />}
          label={`${actor.birthday.toLocaleString()}`}
        />
        <Chip icon={<StarRate />} label={`${actor.popularity}`} />
      </Paper>

      <Typography variant="h6" component="p">
        {actor.also_known_as}
      </Typography>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Credits
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ActorCredits {...actor} />
      </Drawer>
      </Fab>
    </>
  );
};
export default ActorDetails;
