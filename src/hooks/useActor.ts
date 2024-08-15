import { useEffect, useState } from "react";
import { getActor } from '../api/tmdb-api'
import { ActorDetailsProps } from '../types/interfaces'

type ActorHookReturnType = [ActorDetailsProps | undefined, React.Dispatch<React.SetStateAction<ActorDetailsProps | undefined>>];

const useActor  = (id: string):ActorHookReturnType  => {
    const [movie, setMovie] = useState<ActorDetailsProps>();
    useEffect(() => {
        getActor(id).then(actor => {
            setActor(actor);
        });
    }, [id]);
    return [actor, setActor];
};

export default useActor