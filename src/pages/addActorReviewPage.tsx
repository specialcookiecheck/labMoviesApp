import React from "react";
import PageTemplate from "../components/templateActorPage";
import ActorReviewForm from "../components/actorReviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { /*BaseActorProps,*/ ActorDetailsProps } from "../types/interfaces";

const WriteReviewPage: React.FC = () => {
  const location = useLocation();
  const { actorId } = location.state;
  const {
    data: actor,
    error,
    isLoading,
    isError,
  } = useQuery<ActorDetailsProps, Error>(["actor", actorId], () =>
    getActor(actorId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {actor ? (
        <PageTemplate actor={actor}>
          <ActorReviewForm {...actor} />
        </PageTemplate>
      ) : (
        <p>Waiting for actor review details</p>
      )}
    </>
  );
};

export default WriteReviewPage;
