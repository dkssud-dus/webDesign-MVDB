import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReview = (movieId) => {
  return api.get(`movie/${movieId}/reviews`)
}

export const useMovieReview = (movieId) => {
  return useQuery({
    queryKey: ['movie-reviews', movieId],
    queryFn: () => fetchMovieReview(movieId),
  })
}