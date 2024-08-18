# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

__Name:__ Vincent Groeneveld

__Video Demo:__ https://www.youtube.com/watch?v=fFkFKxP_aKM

__Live Website on Vercel:__ https://lab-movies-app-six.vercel.app/

__Github Repo:__ https://github.com/specialcookiecheck/labMoviesApp

This repository contains an implementation of the Movie Fans Web Application using the React library. 

### Features
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any **modifications to existing features**) .]

- four additional main (menu) pages added
- three additional (linked) pages added
- eight extra TMDB API endpoints used for retrieving data
- 'most loved actors' page uses user-created list of "favourites"
- actors has filtering based on name
- actors detail page show relevant info about each actor (date and place of birth & popularity), as well as a fun translation of their name in different languages
- actors detail page shows all available images for an actor
- actors detail page has a "credits" button, which allows you to see all the movies an actor has played in, and provides links to directly open any given movie
- reviews can be written for actors
- after a review has been written, the user is routed back to the correct page ("most loved actors)
- actors can be removed again from the "most loved" list
- both "most loved actors" and previously existing "favourites" are sorted automatically sorted alphabetically
- movie details pages allow you to see translated content in all available languages for each movie
- no errors in the app

### Setup requirements.

app can be run by running "npm run dev" or can be seen here live on Vercel: https://lab-movies-app-six.vercel.app/

### API endpoints

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

    `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`             -> get actor images
    `https://api.themoviedb.org/3/movie/${id}/translations?api_key=${import.meta.env.VITE_TMDB_KEY}`        -> get movie translations
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`   -> get actor credits
    "https://api.themoviedb.org/3/movie/top_rated?api_key=" + import.meta.env.VITE_TMDB_KEY                 -> get top-rated movies
    "https://api.themoviedb.org/3/movie/popular?api_key=" + import.meta.env.VITE_TMDB_KEY                   -> get popular movies
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" + import.meta.env.VITE_TMDB_KEY               -> get movies now playing
    "https://api.themoviedb.org/3/person/popular?api_key=" + import.meta.env.VITE_TMDB_KEY                  -> get popular actors
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`                    -> get individual actor


### Routing

[ List the __new routes__ supported by your app and state the associated page.]

    <Route path="/actor_reviews/form" element={<AddActorReviewPage />} />       -> path to actor review page
    <Route path="/actors/popular_actors" element={<PopularActorsPage />} />     -> path to popular actors page
    <Route path="/actors/most_loved" element={<MostLovedActorsPage />} />       -> path to most loved actors page
    <Route path="/actors/:id" element={<ActorPage />} />                        -> path to indiviual actor page
    <Route path="/movies/now_playing" element={<NowPlayingMoviesPage />} />     -> path to movies now playing page
    <Route path="/movies/popular" element={<PopularMoviesPage />} />            -> path to popular movies page
    <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />          -> path to top-rated movies page

### Third Party Components/Integration

[Describe the level of  integration/use or other API's or third party components]

- Additional mui components have been used

### Independent learning (If relevant)

- independently researched and fixed bugs that prevented deployment on Vercel
- deployment on Vercel
- how to have several "FABs" on the same page
- how to use the data being provided by TMDB for the various integrations
- how to sort TMDB provided object data

