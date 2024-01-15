import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        if (!ignore) {
          setData(jsonData);
          setLoading(false);
        }
      })
      .catch((error) => setError(error));

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
