import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const cachedData = localStorage.getItem(url);

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          localStorage.setItem(url, JSON.stringify(jsonData));
          setData(jsonData);
          setLoading(false);
        })
        .catch((error) => setError(error));
    }
  }, [url]);

  return { data, loading, error };
}
