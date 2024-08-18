import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActorsContext } from "../../contexts/actorsContext";
import { BaseActorProps } from "../../types/interfaces";

const RemoveFromMostLovedIcon: React.FC<BaseActorProps> = (actor) => {
  const context = useContext(ActorsContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.removeFromMostLovedActors(actor);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMostLovedIcon;
