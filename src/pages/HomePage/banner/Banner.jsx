import React from 'react';
import { useState } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap/';

// Router
import { useNavigate } from 'react-router-dom';

// Hook
import { usePopularMoviesQuery } from '../../../hook/usePopularMoviesQuery';
import useMovieTrailer from '../../../hook/useMovieTrailer';


const Banner = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {data, isLoading, isError, error} = usePopularMoviesQuery();
  const movie = data?.data?.results?.[0];

  const movieId = movie?.id;
  const trailerQuery = useMovieTrailer(movieId, {
    enabled: !!movieId,
  });
  console.log(trailerQuery.data);
  const trailer = trailerQuery.data?.data?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  
  const trailerKey = trailer?.key;
  
  if (isLoading) return <h2>Now Loading…</h2>;
  if (isError) return <h2>{error.message}</h2>;

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
    <div 
    className='banner'
    style={{
      backgroundImage:`url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.data.results[0].backdrop_path})`
    }}
    >
      <Container className="banner-text-box">
        <div className="title-box">
          <h2 onClick={() => navigate(`/movies/${movie.id}`)}>{data.data.results[0].title}</h2>
        </div>
        <p>{movie.overview}</p>
        {renderSimpleStarRating(movie.vote_average)} 

        <Button onClick={handleShow}>Watch Trailer</Button>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Official Trailer</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '2rem', position: 'relative' }}>
            {trailerKey ? (
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <p style={{ padding: '1rem' }}>No Trailer Available</p>
            )}
          </Modal.Body>
        </Modal>
        
      </Container>
    </div>
  )
}

export default Banner
