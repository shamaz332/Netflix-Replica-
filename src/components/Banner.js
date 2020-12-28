import React, { useEffect, useState } from "react";
import requests from "./movies/api";
import instance from "./movies/getReq";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    // -----Header Image -----
    <header
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="header-style">
        <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>
        {/* ----Buttons -----  */}
        <div className="banner_btn">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>



<h1 className="banner_des">
{movie?.overview}
</h1>


      </div>
    </header>
  );
};
