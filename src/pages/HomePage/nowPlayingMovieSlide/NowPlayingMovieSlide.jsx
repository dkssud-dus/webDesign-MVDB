import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useNowPlayingMoviesQuery from '../../../hook/useNowPlayingMoviesQuery';
import MovieCard from '../movieCard/MovieCard';

const NowPlayingMovieSlide = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();

  if (isLoading) return <h1>Now Loading</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const movies = data?.data?.results || [];
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        draggable={true}
        swipeable={true}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  )
}

export default NowPlayingMovieSlide