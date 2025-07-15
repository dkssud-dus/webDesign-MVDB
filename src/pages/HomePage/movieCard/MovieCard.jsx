import React from 'react'

import { useGenreListQuery } from '../../../hook/useGenreList';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  // console.log(movie, 'movie')
  const {data} = useGenreListQuery();

  // console.log('genre', data);
  const genreList = data?.data?.genres || [];
  const genreNames = genreList.filter(g => movie.genre_ids?.includes(g.id)).map(g => g.name);

  const adult = movie.adult ? "청소년 관람불가" : "전체 관람가";
  const imeUrl = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}.jpg`

  const navigate = useNavigate();

  return (
    <div>
      <div className='movie-card-wrap'
      style={{
        cursor: 'pointer'
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <div className='movie-card'
        style={{
          backgroundImage: `url(${imeUrl})`
        }}>
          <div className="overlay">
            <div className="text-wrap">
              <span className='vote'>
                💛 {movie.vote_average.toFixed(1)}
              </span>
              <p className='overview'>
                {movie.overview}
              </p>
              <span className='genre'>
                {genreNames?.join(' / ')}
              </span>
              <span className='adult'>
                {adult}
              </span>
            </div>
          </div>
        </div>
        <h5 className='movie-title'>{movie.title}</h5>
      </div>
    </div>
  )
}

export default MovieCard