import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

/* spinner */
import { PropagateLoader } from 'react-spinners';

/* bootstrap */
import { Container, Row, Col, Badge, Button, Alert, Modal, Card } from 'react-bootstrap';

/* hook */
import { useMovieDetail } from '../../hook/useMovieDetail'
import { useMovieReview } from '../../hook/useMovieReview';
import useMovieTrailer from '../../hook/useMovieTrailer';
import { useMovieCredits } from '../../hook/useMovieCredits';
import { useMovieSimilar } from '../../hook/useMovieSimilar';

import MovieCreditSlide from './movieCreditSlide/MovieCreditSlide';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetail(id);
  const { data : reviewData } = useMovieReview(id) 

  /* Trailer Modal */
  const { data: trailerData } = useMovieTrailer(id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('review', reviewData);

  const { data: creditData } = useMovieCredits(id);

  const { data: similarData } = useMovieSimilar(id);

  // console.log('credit', creditData);
  console.log('similar', similarData);

  if (isLoading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <PropagateLoader color="#FFDC16" size={15} />
      </div>
    );
  }

  if (isError) {
    return (
      <>
        {[
          'info',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert with{' '}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
            you like.
          </Alert>
        ))}
      </>
    )
  }
  
  const movie = data?.data;
  const trailerList = trailerData?.data?.results || [];
const trailer = trailerList.find(
  (vid) =>
    vid.type?.toLowerCase() === 'trailer' &&
    vid.site?.toLowerCase() === 'youtube'
);

  // console.log('trailer', trailerData);
  // console.log('trailer id', trailer);

  // console.log('ID', id ,'/', data);

  console.log('results?.[0]', reviewData?.data?.results?.[0])
  return (
    <div className='movie-detail'>
        <div className="visual"
        style={{
          backgroundImage:`url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path})`
        }}
        >

          <Container>
            <Row className='aline-items-center'>
              <Col md={4}>
                <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
                  alt={movie?.title}
                  className='img-fluid rounded shadow'
                />
              </Col>
              <Col md={8}>
                <h2>
                  {movie?.title}
                </h2>
                <p className='date'>{movie?.release_date}</p>
                <p>{movie?.overview}</p>
                <div className='lang mt-2'>
                  <strong>
                    {movie.production_countries?.map((c) => c.name).join(',')}
                  </strong>
                  <span className='original-language mb-2'>
                    {movie.original_language?.toUpperCase()}
                  </span>
                </div>
                <span className='age mb-4'>
                  <Badge>
                    {movie?.adult? '18+' : 'ALL'}
                  </Badge>
                </span>
                <div className="genre mb-2">
                  <span>{movie.genres.map((genre) => (<Badge>{genre.name}</Badge>))}</span>
                </div>
                <div className='score mt-2 mb-2'>
                  <strong>score</strong>
                  <Badge>{movie?.vote_average.toFixed(1)}</Badge>
                </div>
                {trailer?(
                  <Button className='trailer_btn' onClick={handleShow}>
                    Watch Trailer
                  </Button>
                ):(
                  <p className='trailer_btn'>
                    No Trailer Available
                  </p>
                )}
              </Col>
            </Row>
          </Container>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {trailer?.name}
            </Modal.Header>
            <Modal.Body>
              {trailer? <div className='ratio ratio-16x9'>
                <iframe src={`https://www.youtube.com/embed/${trailer?.key}`}></iframe>
              </div>
              : <p>No Trailer Available</p>}
            </Modal.Body>
          </Modal>  
        </div>
        <div className="content">
          <Container>
            {/* cast */}
            <div className="cast mt-5">
              <h3>Credits</h3>
              <p>{movie.title}'s Cast</p>
              <MovieCreditSlide movieId={id} />
            </div>
            {/* review */}
            {reviewData?.data?.results?.length > 0 && (
              <div className='review mt-5'>
                <h3 className='title'>Rate & Review</h3>
                <p>Share your experience</p>
                {reviewData.data.results.map((review) => (
                  <div key={reviewData.id} className='review-card'>
                    <div className="review-card-heading">
                      <div className='review-img'>
                        {review.author_details.avatar_path? (<img src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${review.author_details.avatar_path}`} alt={review.author} />):(<div className='img-none'>{review.author.slice(0,1)}</div>)}
                      </div>
                      <strong>{review.author}</strong>
                      <Badge>💛 {review.author_details.rating}</Badge>
                      <span>
                      {review.created_at.slice( 0 , 10)}
                    </span>
                    </div>
                    <p>{review.content.length > 200 ? (
                      review.content.slice( 0, 200 ) + '…'
                    ) : ( review.content)}</p>
                    <a href={review.url} target="_blank" rel="noopener noreferrer">
                      read more
                    </a>
                  </div>
                ))}
              </div>
            )}
            {/* recommendation */}
            {similarData?.data?.results?.length > 0 && (
              <div className='recommendation mt-5'>
                <h3>Recommended</h3>
                <p>If you liked this movie, you might enjoy these too</p>
                <Row>
                  {similarData.data.results.slice(0, 4).map((similar) => (
                    <Col key={similar.id} md={3}>
                      <Link to={`/movie/${similar.id}`} className="text-decoration-none text-dark">
                        <div className='similar-movie'>
                          <img
                            src={
                              similar.poster_path
                                ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${similar.poster_path}`
                                : 'https://via.placeholder.com/300x450?text=No+Image'
                            }
                            alt={similar.title}
                            className='img-fluid rounded shadow'
                          />
                          <p>{similar.title}</p>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

          </Container>
        </div>
    </div>
  )
}

export default MovieDetailPage
