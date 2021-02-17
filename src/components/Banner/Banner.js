import React, { useEffect, useState } from "react";
import requests from "../movies/api";
import instance from "../movies/getReq";
import "./Banner.css";
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

  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }


  return (
    // -----Header Image -----
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-style">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        {/* ----Buttons -----  */}
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>

        <h1 className="banner_des">
          
          {truncate(movie?.overview,150)}
          
          </h1>
      </div>

<div className="banner_bot">
  
</div>

    </header>
  );
};
