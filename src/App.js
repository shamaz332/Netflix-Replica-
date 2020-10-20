import React from "react";
import requests from "./components/movies/api";
import Row from "./components/ MoviesList/Row";


function App() {
  return <div>





<Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals}/>
<Row title="TRENDING NOW"fetchUrl={requests.fetchTrending}/>
<Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
<Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
<Row title="Documentry Movies"fetchUrl={requests.fetchDocumentaries}/>
<Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>

  </div>;
}

export default App;
