import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../ReviewList/ReviewList";
import fetchMovieReviews from "../../fetch/fetch-movie-reviews";

export default function Reviews() {
  const [loading, setLoading] = useState("Idle");
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading("Pending");
    fetchMovieReviews(movieId).then(({ results }) => {
      setReviews(results);

      if (results.length !== 0) setLoading("Resolved");
      else {
        setLoading("Rejected");
      }
    });
  }, [movieId]);

  return (
    <>
      {loading === "Rejected" && <p>There is no reviews yet</p>}
      {loading === "Resolved" && <ReviewList reviews={reviews}></ReviewList>}
    </>
  );
}
