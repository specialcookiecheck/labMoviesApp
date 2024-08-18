import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI, {
  nameFilter,
} from "../components/actorFilterUI";
import RemoveFromMostLoved from "../components/cardIcons/removeFromMostLoved";
import WriteReview from "../components/cardIcons/writeReview";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const MostLovedActorsPage: React.FC = () => {
  const { mostLovedActors: actorIds } = useContext(ActorsContext);
  console.log("mostLovedActorsIds:" + actorIds);
  
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    nameFiltering,
  ]);
  

  const mostLovedActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId],
        queryFn: () => getActor(actorId.toString()),
      };
    })
  );

  const isLoading = mostLovedActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allMostLovedActors = mostLovedActorQueries.map((q) => q.data);
  const displayedActors =
    allMostLovedActors ? filterFunction(allMostLovedActors): [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Most Loved Actors"
        actors={displayedActors}
        action={(actor) => {
          return (
            <>
              <RemoveFromMostLoved {...actor} />
              <WriteReview {...actor} />
            </>
          );
        }}
      />

      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default MostLovedActorsPage;
