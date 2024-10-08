export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
  
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then( (response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getMovieImages = (id: string | number) => {
  console.log("getMovieImages running");
  console.log("id:" + id);
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch movie images");
    }
    //console.log(response.json());
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};

export const getActorImages = (id: string | number) => {
  console.log("getActorImages running");
  console.log("id:" + id);
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch actor images");
    }
    //console.log(response.json());
    return response.json();
  }).then((json) => json.profiles)
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id: string | number) => { //movie id can be string or number
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getMovieTranslations = (id: string | number) => { //movie id can be string or number
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/translations?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json);
      return json.translations;
    });
};

export const getActorCredits = (id: string | number) => { 
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json)
      //console.log(json.cast)
      return json.cast;
    });
};

export const getUpcomingMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US&page=1"
    ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch upcoming movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getTopRatedMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=" + import.meta.env.VITE_TMDB_KEY
    ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch top rated movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPopularMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=" + import.meta.env.VITE_TMDB_KEY
    ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch popular movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getNowPlayingMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=" + import.meta.env.VITE_TMDB_KEY
    ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies now playing. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPopularActors = () => {
    return fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=" + import.meta.env.VITE_TMDB_KEY
    ).then((response) => {
      //console.log(response.json());
    if (!response.ok)
      throw new Error(`Unable to fetch popular actors. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getActor = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get actor data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};








