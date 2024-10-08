export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
}

export interface BaseActorProps {
  name: string;
  id: number;
  imdb_id: string;
  popularity: number;
  profile_path?: string;
  known_for?: string;
  isMostLoved?: boolean;
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface BaseActorListProps {
  actors: BaseActorProps[];
  action: (m: BaseActorProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
        iso_3166_1: string,
        name: string,
    }[];
}

export interface ActorDetailsProps extends BaseActorProps {
  name: string;
  biography: string;
  birthday: string;
  known_for_department?: string;
  place_of_birth: string;
  popularity: number;
  profile_path?: string;
  homepage?: string;
  also_known_as?: string[];
}

export interface ActorCreditsProps extends BaseActorProps {
}


export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface ActorImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export type FilterOption = "title" | "genre" | "name";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface ActorListPageTemplateProps extends BaseActorListProps {
  title: string;
}

export interface Review{
    id: string;
    content: string
    author: string
}

export interface ActorReview{
    rating: number;
    actorId: number;
    id: string;
    content: string
    author: string
}



export interface Credit{
    id: string;
    overview: string;
    character: string;
    title: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface UpcomingMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface Translation {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    data: {
      overview: string,
      title: string,
    },
  }

export interface TopRatedMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface PopularMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface NowPlayingMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface PopularActors {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseActorProps[];
}