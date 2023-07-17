const API_KEY_OMDB = "6c52a547";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
