
import { movies } from './api';
import "../App.css"

const MovieList = () => {
    return (
      <div className="movie-list">
        {movies.results.map((movie) => ( 
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <table><tbody>
                <tr><td id='title' width={'150px'} align='left'>{movie.title}</td><td id='vote' width={'50px'}>{movie.vote_average}</td></tr>
            </tbody></table>
            <div className="movie-overview">{movie.title}<br /><br />{movie.overview}</div>
          </div>
        ))}
      </div>
    );
};



export default MovieList;
