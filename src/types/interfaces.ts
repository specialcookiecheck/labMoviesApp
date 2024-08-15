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
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
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

export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface ActorListPageTemplateProps extends BaseActorListProps {
  name: string;
}

export interface Review{
    id: string;
    content: string
    author: string
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

export interface PopularActors {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseActorProps[];
}