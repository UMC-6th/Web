import { useEffect, useState } from "react";
import MovieFile from "./MovieFile";



    export default function Movies({ movies }) {
        return (
          <div className='app-container'>
            {movies.length>0&&
            movies.map((item) => (
              <MovieFile
                key={item.id} // Don't forget to add a unique key prop
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            ))}
          </div>
        );
      }

