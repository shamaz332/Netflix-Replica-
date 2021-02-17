import React from "react";
import requests from "../movies/api";
import Row from "../MoviesList/Row";
import { Banner } from "../Banner/Banner";
import "./Home.css";
import Nav from "../Nav/Nav";
function Home() {
  return (
    <div className="app">
      {/* navbar  */}

      {/* banner or slider  */}
      <Nav />
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

export default Home;
