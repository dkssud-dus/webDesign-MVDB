import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieSimilar = (movieId) => {
  return api.get(`/movie/${movieId}/similar`);
};

export const useMovieSimilar = (movieId) => {
  return useQuery({
    queryKey: ['movie-similar', movieId],
    queryFn: () => fetchMovieSimilar(movieId), 
  });
};

export default useMovieSimilar;
