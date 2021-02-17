import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
import instance from "../movies/getReq";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    movieTrailer(movie?.name || "")
    .then(url=>{
      const urlP = new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlP.get("v"))
    }).catch(err=>console.log(err))
  }
}

  return (
    <div className="row">
      {/* title*/}
      <h2>{title}</h2>
      {/* container */}
      <div className="row_post_parent">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>{
              handleClick(movie)
            }}
            className={`row_post ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}{" "}
    </div>
  );
}

export default Row;
