import React from "react";
import Actor from "../actorCard/";
import Grid from "@mui/material/Grid";
import { BaseActorListProps } from "../../types/interfaces";

const ActorList: React.FC<BaseActorListProps> = ({ actors, action }) => {
  const actorCards = actors.map((actor) => (
    <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={actor.id} actor={actor} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;
