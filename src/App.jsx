import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            onChange={handleChange}
            value={search}
            placeholder="Avengers, matrix..."
          />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
