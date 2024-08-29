const API_BASE = "https://icanhazdadjoke.com";


export async function api<TData>(...args: Parameters<typeof fetch>): Promise<TData> {
  const [path, init] = args;

  const opts: RequestInit = {
    ...init,
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
  };

  const response = await fetch(`${API_BASE}${path}`, opts);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return (await response.json()) as TData;
}

