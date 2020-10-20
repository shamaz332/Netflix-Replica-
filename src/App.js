import React from "react";
import requests from "./components/movies/api";
import Row from "./components/ MoviesList/Row";


function App() {
  return <div>





<Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals}/>

<Row title="TRENDING NOW"fetchUrl={requests.fetchTrending}/>


  </div>;
}

export default App;
