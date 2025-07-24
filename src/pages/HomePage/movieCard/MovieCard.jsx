import React from 'react'

// Router
import { useNavigate } from 'react-router-dom';

// Hook
import { useGenreListQuery } from '../../../hook/useGenreList';

// Movie Card
const MovieCard = ({movie}) => {
  // console.log(movie, 'movie')
  const {data} = useGenreListQuery();

  // console.log('genre', data);
  const genreList = data?.data?.genres || [];
  const genreNames = genreList.filter(g => movie.genre_ids?.includes(g.id)).map(g => g.name);

  const adult = movie.adult ? "18+" : "All";
  const imeUrl = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}.jpg`

  const navigate = useNavigate();

  // Star
  const renderSimpleStarRating = (voteAverage) => {
    const starCount = 5; 
    const rating = voteAverage / 2; 

    let starsHtml = ''; 
    
    for (let i = 0; i < Math.floor(rating); i++) {
      starsHtml += '★';
    }
    
    if (rating % 1 >= 0.5) {
      starsHtml += '★';
    }
    
    const currentStarCount = starsHtml.length;
    for (let i = currentStarCount; i < starCount; i++) {
      starsHtml += '☆';
    }

    return (
      <span className="star-rating">
        {starsHtml}
        <span className="vote-average-text"> ({voteAverage.toFixed(1)})</span>
      </span>
    );
  };

  return (
    <div className='movie-card-wrap'
    style={{
      cursor: 'pointer'
    }}
    onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="movie-card-box">
        <div className='movie-card'
        style={{
          backgroundImage: `url(${imeUrl})`
        }}>
        </div>
      </div>
      <h5 className='movie-title'>{movie.title}</h5>
      {renderSimpleStarRating(movie.vote_average)} 
    </div>
  )
}

export default MovieCard