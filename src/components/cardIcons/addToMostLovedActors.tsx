import React, { MouseEvent, useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseActorProps } from "../../types/interfaces";

const AddToMostLovedActorsIcon: React.FC<BaseActorProps> = (actor) => {
  const context = useContext(ActorsContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMostLovedActors(actor);
  };
  return (
    <IconButton aria-label="add to most loved actors" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMostLovedActorsIcon;
