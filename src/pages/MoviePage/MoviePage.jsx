import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { usePopularMoviesQuery } from '../../hook/usePopularMoviesQuery'
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery'

const MoviePage = () => {

  // 1. Popular Movie Data
  const { data: popularData, isLoading, isError, error } = usePopularMoviesQuery();

  // 2. Keyword Load
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  // 3. Search Keyword → API
  const { data: searchData } = useSearchMovieQuery(keyword);

  // 4. Component Rendering → Popular Movie
  useEffect(() => {
    if (popularData) {
      console.log('Movie Page: Popular Data Check', popularData);
    }
  })

  // 5. Alert
  useEffect(() => {
    if (keyword) {
      alert(`Keyword: ${keyword}`);
    }
  }, [keyword]);


  /* Page Code */
  return (
    <div>MoviePage</div>
  )

}

export default MoviePage