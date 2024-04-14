import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Results.css";
import Header from "./Header";
import FooterCompound from "./compounds/FooterCompound";

function Results() {
  const location = useLocation();
  const { query } = location.state || {};
  const [results, setResults] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie`;
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          query: query,
        },
      })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [query]);

  return (
    <div>
      <Header />
      <h1 className="results-title">Search results for "{query}"</h1>
      <div className="results-container">
        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <FooterCompound />
    </div>
  );
}

export default Results;
