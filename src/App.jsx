import "./App.css";
import responseMovies from "./mocks/with-results.json";
// const API_KEY_OMDB = '6c52a547';
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${search}`;

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder="Avengers, matrix..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        <ul className="movies">
          {hasMovies ? (
            movies.map((movie) => (
              <li className="movie" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.imdbID} />
              </li>
            ))
          ) : (
            <p>No se han encontrado resultados</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
