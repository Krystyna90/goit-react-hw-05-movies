import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieCast from "../../fetch/fetch-movie-cast";
import { CastList } from "../CastList/CastList";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  console.log(cast);

  return <>{cast && <CastList cast={cast}></CastList>}</>;
}
