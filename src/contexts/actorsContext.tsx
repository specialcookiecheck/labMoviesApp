import React, { useState, useCallback } from "react";
import { BaseActorProps, Review } from "../types/interfaces";

interface ActorsContextInterface {
  mostLovedActors: number[];
  addToMostLovedActors: (actor: BaseActorProps) => void;
  removeFromMostLovedActors: (actor: BaseActorProps) => void;
  addReview: (actor: BaseActorProps, review: Review) => void; // NEW
}
const initialContextState: ActorsContextInterface = {
  mostLovedActors: [],
  addToMostLovedActors: () => {},
  removeFromMostLovedActors: () => {},
  addReview: (actor, review) => {
    actor.id, review;
  },
};

export const ActorsContext =
  React.createContext<ActorsContextInterface>(initialContextState);

const ActorsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]); // NEW
  const [mostLovedActors, setMostLovedActors] = useState<number[]>([]);

  const addToMostLovedActors = useCallback((actor: BaseActorProps) => {
    setMostLovedActors((prevMostLoved) => {
      if (!prevMostLoved.includes(actor.id)) {
        return [...prevMostLoved, actor.id];
      }
      return prevMostLoved;
    });
  }, []);

  const removeFromMostLovedActors = useCallback((actor: BaseActorProps) => {
    setMostLovedActors((prevMostLoved) =>
      prevMostLoved.filter((actorId) => actorId !== actor.id)
    );
  }, []);

  const addReview = (actor: BaseActorProps, review: Review) => {
    setMyReviews({ ...myReviews, [actor.id]: review });
  };

  return (
    <ActorsContext.Provider
      value={{
        mostLovedActors,
        addToMostLovedActors,
        removeFromMostLovedActors,
        addReview,
      }}
    >
      {children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
