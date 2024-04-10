import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Header from "./Header";
import Search from "./Search";
import FooterCompound from "./compounds/FooterCompound";

export default function Homepage() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Banner />
      <Row
        title="STUDIO GHIBLI MOVIES"
        fetchUrl={requests.fetchStudioGhibliMovies}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="NARUTO UNIVERSE" fetchUrl={requests.fetchNarutoVerse} />
      <Row title="Fantasy Anime" fetchUrl={requests.fetchFantasyAnime} />
      <Row title="Comedy Anime" fetchUrl={requests.fetchComedyAnime} />
      <Row title="Horror Anime" fetchUrl={requests.fetchHorrorAnime} />
      <Row title="Romance Anime" fetchUrl={requests.fetchRomanceAnime} />
      <Row title="Asian Movies" fetchUrl={requests.fetchAsianMovies} />

      <FooterCompound />
    </div>
  );
}
