import "./App.css";
import { useGetJoke } from "./hooks/useApi";

function App() {
  const { data, isLoading, refetch } = useGetJoke();

  return (
    <div>
      <h1>Joke</h1>

      <div style={{ marginBottom: "2rem" }}>
        {!isLoading && data ? <>{data?.joke}</> : <>loading...</>}
      </div>

      <button onClick={() => refetch()}>new joke</button>
    </div>
  );
}

export default App;
