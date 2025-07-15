import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { usePopularMoviesQuery } from '../../../hook/usePopularMoviesQuery';
import useMovieTrailer from '../../../hook/useMovieTrailer';

import { Button, Modal } from 'react-bootstrap/';

const Banner = () => {
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
  return (
    <div 
    className='banner'
    style={{
      backgroundImage:`url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.data.results[0].backdrop_path})`
    }}
    >
      <Container className="banner-text-box">
        <div className="title-box">
          <h2>{data.data.results[0].title}</h2>
        </div>
        <p>{data.data.results[0].overview}</p>
        <span>💛 {Math.round(data.data.results[0].vote_average)}</span>

        <Button onClick={handleShow}>Trailer</Button>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Trailer</Modal.Title>
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
              <p style={{ padding: '1rem' }}>트레일러를 찾을 수 없습니다.</p>
            )}
          </Modal.Body>
        </Modal>
        
      </Container>
    </div>
  )
}

export default Banner