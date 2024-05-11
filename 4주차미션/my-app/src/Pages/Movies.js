import MovieFile from "./MovieFile";
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`
    export default function Movies({ movies }) {
        return (
          <AppContainer>
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
        </AppContainer>
        );
      }

