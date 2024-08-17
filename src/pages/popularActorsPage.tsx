import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getPopularActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
// import MovieFilterUI, { titleFilter, genreFilter } from "../components/movieFilterUI";
import ActorFilterUI, { nameFilter } from "../components/actorFilterUI";
import { BaseActorProps, PopularActors} from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
// import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToMostLovedActorsIcon from "../components/cardIcons/addToMostLovedActors";
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const PopularActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<PopularActors, Error>(
    "actors",
    getPopularActors
  );
  
  
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    nameFiltering,
  ]);
  
  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  
  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };
  

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);

  return (
    <>
      <PageTemplate
        title="Popular Actors"
        actors={displayedActors}
        action={(actor: BaseActorProps) => {
          return <AddToMostLovedActorsIcon {...actor} />;
        }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default PopularActorsPage;
