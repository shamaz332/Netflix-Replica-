import React from "react";
import requests from "./components/movies/api";
import Row from "./components/ MoviesList/Row";
import { Banner } from "./components/Banner";
import "./App.css"
function App() {
  return (
    <div className="app">
      {/* navbar  */}

      {/* banner or slider  */}

      <Banner />

      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentry Movies" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
