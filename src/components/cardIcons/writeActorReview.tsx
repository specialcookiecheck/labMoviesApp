import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BaseActorProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon: React.FC<BaseActorProps> = (actor) => {
  return (
    <Link
      to={"/actor_reviews/form"}
      state={{
        actorId: actor.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
