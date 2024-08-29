import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "./lib/api";
import { JokeResponse } from "./types/Types";

function App() {
  const { data, isLoading, refetch } = useQuery<JokeResponse>({
    queryKey: ["joke"],
    queryFn: () => api("/"),
  });

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
