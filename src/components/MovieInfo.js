import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Span } from "./common/Tags";
import { P } from "./common/Tags";
import styled from "styled-components";

const WrapInfo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 25px;
  @media screen and (max-width: 991px) {
    padding: 2rem;
  }
`;
const DescMovie = styled.p`
  font-size: 1.2rem;
  line-height: 32px;
`;

const MovieInfo = () => {
  const [info, setInfo] = useState({});
  const { title } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=7f76daa9&t=${title}?&plot=full`
      );
      setInfo(data);
    };
    getInfo();
    if (info) setLoading(false);
  }, [title]);
  return (
    <>
      {loading ? (
        <P>Loading...</P>
      ) : (
        <div>
          <img src={info.Poster} />
          <WrapInfo>
            <h2>{info.Title}</h2>
            <Span>{info.Year}</Span>
            <P>
              <span style={{ color: "orange" }}>Genre:</span> {info.Genre} |{" "}
              <span style={{ color: "orange" }}>Country:</span> {info.Country}
            </P>
            <P>
              <span style={{ color: "orange" }}>Actors:</span> {info.Actors}
            </P>
            <DescMovie>{info.Plot}</DescMovie>
          </WrapInfo>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
