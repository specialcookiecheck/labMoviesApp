import React from "react";
import Header from "../headerActorList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { ActorListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = ({
  actors,
  name,
  action,
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={actors}></ActorList>
      </Grid>
    </Grid>
  );
};
export default ActorListPageTemplate;
