import { Link } from "react-router-dom";
import ContentEl from "./common/Content";
import { P } from "./common/Tags";
import { Div } from "./common/Tags";
import { DivInfo } from "./common/Tags";
import { Span } from "./common/Tags";


const Content = ({ movies }) => {
  return (
    <ContentEl>
      {movies ? (
        movies.map((movie) => {
          return (
            <Div key={movie.Title}>
              <img src={movie.Poster} height="450px" alt={movie.Title} />
              <DivInfo>
                <Link to={`/movie-info/${movie.Title}`}>{movie.Title}</Link>
                <Span>{movie.Year}</Span>
              </DivInfo>
            </Div>
          );
        })
      ) : (
        <P>No Movie - Please search...</P>
      )}
    </ContentEl>
  );
};

export default Content;
