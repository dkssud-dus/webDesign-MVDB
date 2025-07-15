import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useMovieCredits } from '../../../hook/useMovieCredits';

const MovieCreditSlide = ({ movieId }) => {
  
  const { data, isLoading, isError, error } = useMovieCredits(movieId);

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

  const credits = data?.data?.cast || [];

  console.log('credits data', data);


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
        {credits.map((credit, index) => (
          <div className='credit' key={index}>
            <img
            src={
              credit.profile_path
                ? `https://media.themoviedb.org/t/p/w138_and_h175_face/${credit.profile_path}`
                : 'https://inthemass.com/common/img/default_profile.png'
            }
            alt={credit.name}
            />
            <strong>{credit.name}</strong>
            <p>{credit.character}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MovieCreditSlide