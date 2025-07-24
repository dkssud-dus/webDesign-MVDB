import React, {  } from 'react';

// Router
import { useParams, useSearchParams } from 'react-router-dom'; 

// Hook
import { usePopularMoviesQuery } from '../../hook/usePopularMoviesQuery';
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery';

// Components
import MovieCard from '../HomePage/movieCard/MovieCard';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'; 

const MoviePage = () => {
  const { data: popularData, isLoading, isError, error } = usePopularMoviesQuery();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const { data: searchData, isLoading: isSearchLoading, isError: isSearchError, error: searchError } = useSearchMovieQuery(keyword, {
    enabled: !!keyword,
  });

  if (isLoading || isSearchLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Loading Movies...</h2>
      </div>
    );
  }

  if (isError) {
    return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;
  }

  if (isSearchError) {
    return <div className="alert alert-danger" role="alert">Search Error: {searchError.message}</div>;
  }

  const isSearchMode = !!keyword;
  
  const moviesToDisplay = (keyword && searchData?.data?.results?.length > 0) 
    ? searchData.data.results 
    : popularData?.data?.results;
  

  if (isSearchMode && (!moviesToDisplay || moviesToDisplay.length === 0)) {
    return (
      <Container className="my-5">
        <h2>No Results Found for "{keyword}"</h2>
        <p>Please try a different keyword or check your spelling.</p>
      </Container>
    );
  }

  if (!moviesToDisplay || moviesToDisplay.length === 0) {
    return (
      <Container className="my-5">
        <h2>No Movies Available</h2>
        <p>Could not load any movie data at this time.</p>
      </Container>
    );
  }

  return (
    <div className='movie-page'>
      <Container>
        <h2>{isSearchMode ? `Search Results for "${keyword}"` : 'Popular Movies'}</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {moviesToDisplay.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} /> 
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MoviePage;