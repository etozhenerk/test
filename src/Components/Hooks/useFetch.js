import { useEffect, useState } from "react";

export const useFetch = (param) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch("https://opentdb.com/api.php?amount=9&type=boolean");
        const res = await json.json();
        setResponse(res.results);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [param]);

  return { response, error };
};
