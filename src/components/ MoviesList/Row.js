import React, { useState, useEffect } from "react";
import instance from "../movies/getReq";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      {/* title*/}
      <h2>{title}</h2>
      {/* container */}
      <div className="row_post_parent">
        {movies.map((movie) => (
          <img
          key={movie.id}
            className="row_post"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
