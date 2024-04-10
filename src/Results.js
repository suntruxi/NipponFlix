import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Results() {
  const location = useLocation();
  const { query } = location.state || {};
  console.log(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Define the API endpoint using the query parameter
    const apiUrl = `https://api.themoviedb.org/3/search/movie`;
    const apiKey = process.env.REACT_APP_API_KEY;

    // Fetch data from the API using Axios
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          query: query,
        },
      })
      .then((response) => {
        // Update state with the fetched results
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [query]); // useEffect will re-run whenever the query parameter changes
  console.log(results);

  // Render the search results
  return (
    <div>
      <h1>Search results for {query}</h1>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
