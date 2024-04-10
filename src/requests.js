const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchStudioGhibliMovies: `/discover/movie?api_key=${API_KEY}&with_companies=10342`,
  fetchNarutoVerse: `/search/multi?api_key=${API_KEY}&query=Naruto`,
  fetchFantasyAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16,14`,
  fetchComedyAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16,35`,
  fetchHorrorAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16,27`,
  fetchRomanceAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16,10749`,
  fetchAsianMovies: `/search/movie?api_key=${API_KEY}&query=Asia`,
};

export default requests;
