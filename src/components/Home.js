import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Content from "./Content";
import Search from "./Search";

const Home = () => {
  const { onSearch, movies } = useContext(MovieContext);

  return (
    <div>
      <Search onSearch={onSearch} />
      <Content movies={movies} />
    </div>
  );
};

export default Home;
