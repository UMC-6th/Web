
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import starIcon from '../assets/star.png';
import spinner from '../assets/loading.png';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Fetch({ url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjhjZTE1MDcxOTI4YmY1MjFlMzczNTJiNmYxMTdkZiIsInN1YiI6IjY2MWNkOTgzZjNlMGRmMDE2M2E5NTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j90PFsY1a4nkgqMqWVK-aO0GE9zmozT37CxaXxMCctQ'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return (
    <Container>
      {loading ? (
        <div className='spinner-div'><img className='spinner-icon' src={spinner} alt="loading spinner" /></div>
      ) : (
        <MovieList className='movielist'>
          {movies.map((movie) => (
            <div onClick={() => navigate(`/movie/${movie.original_title}`, {state: {movie}})} key={movie.id}>
              <MovieItem>
                <div className='movie-content'>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <div className='movie-info'>
                    <div className='title'>{movie.title}</div>
                    <div className='vote'><img style={{ height: '20px', width: '20px', marginRight: '3px' }} src={starIcon} alt="star icon" />{movie.vote_average}</div>
                  </div>
                </div>
                <MovieOverview id='movie-overview'>
                  <div className='wrap'>{movie.overview}</div>
                </MovieOverview>
              </MovieItem>
            </div>
          ))}
        </MovieList>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 50px;

  .spinner-div{
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner-icon {
    width: 10%;
  }
`;

const MovieList = styled.div`
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 0 15vw;
`;

const MovieOverview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 10px;

  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  opacity: 0;
  height: 96.5%;
  padding-bottom: 10px;
  overflow-y: auto;

  .wrap {
    height: 95%;
    padding-bottom: 10%;
  }
`;

const MovieItem = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  height: 100%;
  border-radius: 4px;
  background-color: rgb(55, 59, 105);

  .movie-content {
    position: relative;
  }
  .movie-content img {
    width: 100%;
    display: block;
  }
  .movie-info {
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vote {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover #movie-overview {
    opacity: 1;
  }
`;

export default Fetch;



// link
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import starIcon from '../assets/star.png';
// import spinner from '../assets/loading.png';
// import { Link } from 'react-router-dom';

// // eslint-disable-next-line react/prop-types
// function Fetch({url}) {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjhjZTE1MDcxOTI4YmY1MjFlMzczNTJiNmYxMTdkZiIsInN1YiI6IjY2MWNkOTgzZjNlMGRmMDE2M2E5NTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j90PFsY1a4nkgqMqWVK-aO0GE9zmozT37CxaXxMCctQ'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         setMovies(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [url]);

//   return (
    
//     <Container>
//       {loading ? (
//         <div className='spinner-div'><img className='spinner-icon' src={spinner} /></div>
//       ) : (
//         <MovieList className='movielist'>
//           {movies.map((movie) => ( 
//             <Link to={`/movie/${movie.original_title}`} key={movie.id}>
//               <MovieItem key={movie.id}>
//                 <div className='movie-content'>
//                   <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                   <div className='movie-info'>
//                     <div className='title'>{movie.title}</div>
//                     <div className='vote'><img style={{height: '20px', width: '20px', marginRight:'3px'}} src={starIcon} />{movie.vote_average}</div>
//                   </div>
//                 </div>
//                 <MovieOverview id='movie-overview'>
//                   <div className='wrap'>{movie.overview}</div>
//                 </MovieOverview>
//               </MovieItem>
//             </Link>
//           ))}
//         </MovieList>
//       )}
//     </Container>
//   );
// }

// const Container = styled.div`
//   position: relative;
//   padding-bottom: 50px;

//   .spinner-div{
//     width: 100%;
//     height: 90vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .spinner-icon {
//     width: 10%;

//   }
// `;

// const MovieList = styled.div `
//   overflow-y: hidden;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
//   padding: 20px;
//   margin:0 15vw;
// `;
// const MovieOverview = styled.div `
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 10px;

//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   padding: 6px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   text-align: center;
//   opacity: 0;
//   height: 96.5%;
//   padding-bottom: 10px;
//   overflow-y: auto;

//   .wrap {
//     height:95%;
//     padding-bottom: 10%;
//   }
// `;
// const MovieItem = styled.div `
//   position: relative;
//   overflow: hidden;
//   margin-bottom: 10px;
//   height: 100%;
//   border-radius: 4px;
//   background-color: rgb(55, 59, 105);

//   .movie-content {
//     position: relative;
//   }
//   .movie-content img {
//     width: 100%;
//     display: block;
//   }
//   .movie-info {
//     color: white;
//     padding: 8px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .vote {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   &:hover #movie-overview {
//     opacity:1;
//   }
// `;

// export default Fetch;