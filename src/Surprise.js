import React, { useState, useEffect } from "react";
import Header from "./Header";
import FooterCompound from "./compounds/FooterCompound";
import "./Surprise.css";

function SurprisePage() {
  const [movieData, setMovieData] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const API_KEY = process.env.REACT_APP_API_KEY;
        // Make a GET request to fetch movie details
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Jujutsu+Kaisen`
        );
        const data = await response.json();
        // Set the movie data in state
        setMovieData(data.results[0]);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieData();
  }, []);

  async function fetchTrailer() {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const movieId = movieData.id;
      // Make a GET request to fetch movie trailer
      const trailerResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const trailerData = await trailerResponse.json();
      // If trailer is available, set the trailer key
      if (trailerData.results.length > 0) {
        setTrailerKey(trailerData.results[0].key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  }

  return (
    <div className="surprise-container">
      <Header />
      <h1 className="surprise-heading">Don't know what to watch next?</h1>
      <p className="surprise-recommendation">Here is our recommendation:</p>
      {movieData && (
        <div className="article">
          <div className="content">
            <h2>{movieData.title}</h2>
            <p>{movieData.overview}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt="Movie Poster"
            className="poster"
            onClick={fetchTrailer}
            style={{ cursor: "pointer" }}
          />
          {trailerKey && (
            <div className="trailer-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      )}
      <FooterCompound />
    </div>
  );
}

export default SurprisePage;
